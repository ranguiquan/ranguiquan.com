import { RequestRateLimiter, sleep } from './limiter';
import { notion } from './client';
import { APIErrorCode, ClientErrorCode } from '@notionhq/client';
import config from '../../site.config';

const requestRateLimiter = new RequestRateLimiter({
  maxRequests: config.parallelRequestLimit,
  maxRequestWindowMS: 1000,
});

// recall when timeout or reach API limit
async function fetchAndRetryIfNecessary(callAPIFn) {
  const startTimeStamp = new Date();
  try {
    console.log(
      `\n${startTimeStamp.toLocaleString()} [fetchAndRetryIfNecessary]: 💡 Sending a request...`
    );
    const res = await callAPIFn();
    const successTimeStamp = new Date();
    console.log(
      `\n${successTimeStamp.toLocaleString()} [fetchAndRetryIfNecessary]: ✅ Success!   Took ${
        successTimeStamp.getTime() - startTimeStamp.getTime()
      } ms.`
    );
    return res;
  } catch (error) {
    if (
      [APIErrorCode.RateLimited, ClientErrorCode.RequestTimeout].includes(
        error.code
      )
    ) {
      await sleep(1000);
      const refetchTimeStamp = new Date();
      console.log(
        `\n${refetchTimeStamp.toLocaleString()} [fetchAndRetryIfNecessary]: 💦 Refetching...    Took ${
          refetchTimeStamp.getTime() - startTimeStamp.getTime()
        } ms.`
      );
      return fetchAndRetryIfNecessary(callAPIFn);
    } else {
      console.error(error);
      return { message: 'request error' };
    }
  }
}

export async function retrieve_page({ page_id }) {
  return fetchAndRetryIfNecessary(() => {
    return requestRateLimiter.acquireToken(() => {
      return notion.pages.retrieve({ page_id });
    });
  });
}
export async function retrieve_block({ block_id }) {
  return fetchAndRetryIfNecessary(() => {
    return requestRateLimiter.acquireToken(() => {
      return notion.blocks.retrieve({
        block_id: block_id,
      });
    });
  });
}

export async function retrieve_block_children({
  block_id,
  page_size,
  start_cursor,
}) {
  return fetchAndRetryIfNecessary(() => {
    return requestRateLimiter.acquireToken(() => {
      return notion.blocks.children.list({
        block_id,
        page_size,
        start_cursor,
      });
    });
  });
}
export async function query_page_list({ database_id }) {
  return fetchAndRetryIfNecessary(() => {
    return requestRateLimiter.acquireToken(() => {
      return notion.databases.query({
        database_id: database_id,
        filter: {
          and: [
            {
              property: 'Published',
              checkbox: {
                equals: true,
              },
            },
          ],
        },
        sorts: [
          {
            property: 'Created',
            direction: 'descending',
          },
        ],
      });
    });
  });
}
