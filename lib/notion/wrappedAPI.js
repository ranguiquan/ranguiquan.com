import { RequestRateLimiter, sleep } from './limiter';
import { notion } from './client';
import { APIErrorCode, ClientErrorCode } from '@notionhq/client';

const requestRateLimiter = new RequestRateLimiter({
  maxRequests: 3,
  maxRequestWindowMS: 1000,
});

// recall when timeout or reach API limit
async function fetchAndRetryIfNecessary(callAPIFn) {
  try {
    console.log('\n[fetchAndRetryIfNecessary]: ⚡ Sending a request...');
    const res = await callAPIFn();
    console.log('\n[fetchAndRetryIfNecessary]: ✅ Success!');
    return res;
  } catch (error) {
    if (
      [APIErrorCode.RateLimited, ClientErrorCode.RequestTimeout].includes(
        error.code
      )
    ) {
      await sleep(1000);
      console.log('\n[fetchAndRetryIfNecessary]: 💦 Refetching...');
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

export async function retrieve_block_children({ block_id, page_size }) {
  return fetchAndRetryIfNecessary(() => {
    return requestRateLimiter.acquireToken(() => {
      return notion.blocks.children.list({
        block_id,
        page_size,
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
