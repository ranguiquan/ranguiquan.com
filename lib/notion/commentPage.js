import config from '../../site.config';
import {
  retrieve_nested_children,
  retrieve_nested_children_cors,
} from './block';
import { query_comment_page_list } from './wrappedAPI';

export async function createCommentPage({
  commentInput,
  pageID,
  pageTitle,
  url,
}) {
  const parent = { database_id: config.commentDatabaseID };
  const properties = {
    pageID: {
      rich_text: [
        {
          type: 'text',
          text: {
            content: pageID,
          },
        },
      ],
    },
    pageTitle: {
      rich_text: [
        {
          type: 'text',
          text: {
            content: pageTitle,
          },
        },
      ],
    },
    from: {
      url: url
    },
  };
  const children = [
    {
      object: 'block',
      type: 'paragraph',
      paragraph: {
        rich_text: [
          {
            type: 'text',
            text: {
              content: commentInput,
            },
          },
        ],
      },
    },
  ];
  const jsoned = await fetch('/api/createComment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ properties, parent, children }),
  }).then((res) => res.json());

  const handledPage = handleRawCommentPage(jsoned);
  return handledPage;
}

export async function getCommentPageList(pageID) {
  const { commentDatabaseID } = config;
  const res = await query_comment_page_list({
    database_id: commentDatabaseID,
    page_id: pageID,
  });
  const list = res.results;
  await Promise.all(list.map((page) => retrieve_nested_children(page)));
  const handedList = list.map((page) => handleRawCommentPage(page));
  return handedList;
}

export function handleRawCommentPage(rawPage) {
  return {
    id: rawPage.id,
    name: rawPage.properties.Name.title[0].plain_text,
    email: rawPage.properties.email.email,
    avatar: rawPage.properties.avatar.rich_text[0].text.content,
    content: rawPage.children[0].paragraph.rich_text[0].text.content,
    created_time: rawPage.created_time,
    last_edited_time: rawPage.last_edited_time,
  };
}
