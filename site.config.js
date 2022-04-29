const config = {
  // [Required]
  // Your site's name, which will show up in the header and title.
  siteName: 'rgq.plus',

  // [Optional]
  // For SEO.
  domain: 'rgq.plus',

  // [Required]
  // Shown in footer.
  writerName: 'ranguiquan',

  // [Required]
  // Shown in footer.
  copyrightStartYear: 2021,

  // [Optional]
  // Every request can only retrieve 100 blocks due to API limit.
  // It defines how many request you can send in one page.
  // By default it's 50, it means one page can render 5000 blocks at most.
  // Change it as you need.
  contentRequestLimit: 50,

  // [Optional]
  // It defines how many requests you can send parallelly to Notion in one second.
  // By default it's 3 to meet the requirement of Notion's API limit.
  // You can bump it up for a faster render speed. Notion limit their API in a very loose way.
  parallelRequestLimit: 10,

  // [Required]
  // Configure site structure in the nav list below.
  // nav must contain one or more Objects: {name, type, id}
  // {name, type, id}:
  //    name: String, which will show up in the header nav bar and url path.
  //    type: String, 'database', 'page' or 'link'
  //    id: String, notion databaseID , pageID or outer URL.
  //
  // Special: The first nav item will be treated as the index '/' path.
  //
  nav: [
    {
      name: 'blog',
      type: 'database',
      id: 'c1e6f3acbf7e4d58a0b72f15554aa431',
    },
    {
      name: 'about',
      type: 'page',
      id: '98fe2fe9860743e99fe8e5d8af5c16b8',
    },
    {
      name: 'github',
      type: 'link',
      id: 'https://github.com/ranguiquan',
    },
  ],

  commentDatabaseID: '6fbf0dcbb3f7422094eb08651dae84ac',
};

export default config;
