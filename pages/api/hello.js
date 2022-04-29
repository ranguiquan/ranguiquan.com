// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSession, getCsrfToken } from 'next-auth/react';

export default async function handler(req, res) {
  const session = await getSession({ req });
  const csrfToken = await getCsrfToken({ req });
  res.status(200).json({ name: 'John Doe' });
}
