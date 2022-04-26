const { Client } = require('@notionhq/client');

/**
 * Notion official client
 */
export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
  timeoutMs: 10000,
});
