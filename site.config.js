const config = {
  // [required]
  // Your site's name, which will show up in the header and title.
  siteName: 'rgq.plus',

  // [Required]
  // Notion database ID where you store your blog pages.
  // Put it in Vercel environment variable if you like.
  blogDatabaseID: process.env.BLOG_DATABASE_ID || '',

  // [Optional]
  // Every request can retrieve 100 blocks due to API limit, this defines how many request you can send in one page.
  // By default it's 20, it means one page can render 2000 blocks at most. Change it as you need.
  contentRequestLimit: 20,

  // [Optional]
  // It defines how many requests you can send to Notion in one second in SSR.
  // By default it's 3 to meet the requirement of Notion's API limit.
  // You can bump it up for a faster render speed. Notion practice their API limit in a very loose way.
  parallelRequestLimit: process.env.PARALLEL_REQUEST_LIMIT || 3,

  nav: [
    {
      name: 'about',
      type: 'page',
      id: '98fe2fe9860743e99fe8e5d8af5c16b8',
    },
  ],
};

export default config;
