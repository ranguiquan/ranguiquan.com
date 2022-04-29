import { getSession, getCsrfToken } from 'next-auth/react';
import { retrieve_nested_children } from '../../lib/notion';
import { create_page } from '../../lib/notion/wrappedAPI';

export default async function handler(req, res) {
  console.log('[/api/createComment]: start!');
  const session = await getSession({ req });
  const create_page_object = req.body;
  const Name = {
    title: [
      {
        type: 'text',
        text: {
          content: session.user.name,
        },
      },
    ],
  };
  const email = {
    email: session.user.email,
  };
  const avatar = {
    rich_text: [
      {
        type: 'text',
        text: {
          content: session.user.image,
        },
      },
    ],
  };
  create_page_object.properties = {
    ...create_page_object.properties,
    Name,
    email,
    avatar,
  };
  const notion_res = await create_page({ ...create_page_object });
  notion_res.children = create_page_object.children;
  console.log('[/api/createComment]: end!');
  res.status(200).json(notion_res);
}
