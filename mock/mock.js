export const mock = [
  {
    object: 'block',
    id: 'ac7830aa-17ec-412d-8d4d-a06cc70023fe',
    created_time: '2022-04-19T04:41:00.000Z',
    last_edited_time: '2022-04-20T14:12:00.000Z',
    created_by: {
      object: 'user',
      id: 'bee3a462-44be-405b-b2cb-994920ea1d89',
    },
    last_edited_by: {
      object: 'user',
      id: 'bee3a462-44be-405b-b2cb-994920ea1d89',
    },
    has_children: false,
    archived: false,
    type: 'code',
    code: {
      caption: [],
      rich_text: [
        {
          type: 'text',
          text: {
            content:
              'function numberToString(num) {\n  return new String(num);\n}',
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
          },
          plain_text:
            'function numberToString(num) {\n  return new String(num);\n}',
          href: null,
        },
      ],
      language: 'javascript',
    },
  },
  {
    object: 'block',
    id: 'ea9051d1-34ab-4de1-8211-555177368b16',
    created_time: '2022-04-20T14:33:00.000Z',
    last_edited_time: '2022-04-20T14:34:00.000Z',
    created_by: {
      object: 'user',
      id: 'bee3a462-44be-405b-b2cb-994920ea1d89',
    },
    last_edited_by: {
      object: 'user',
      id: 'bee3a462-44be-405b-b2cb-994920ea1d89',
    },
    has_children: true,
    archived: false,
    type: 'callout',
    callout: {
      rich_text: [
        {
          type: 'text',
          text: {
            content: 'this is a callout',
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
          },
          plain_text: 'this is a callout',
          href: null,
        },
      ],
      icon: {
        type: 'emoji',
        emoji: '💙',
      },
      color: 'gray_background',
    },
    children: [
      {
        object: 'block',
        id: '2d788328-cedc-44fa-9282-5ea26c1724ef',
        created_time: '2022-04-20T14:33:00.000Z',
        last_edited_time: '2022-04-20T14:34:00.000Z',
        created_by: {
          object: 'user',
          id: 'bee3a462-44be-405b-b2cb-994920ea1d89',
        },
        last_edited_by: {
          object: 'user',
          id: 'bee3a462-44be-405b-b2cb-994920ea1d89',
        },
        has_children: false,
        archived: false,
        type: 'paragraph',
        paragraph: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: 'first sub',
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
              },
              plain_text: 'first sub',
              href: null,
            },
          ],
          color: 'default',
        },
      },
      {
        object: 'block',
        id: '99541eb7-ccc9-456a-9dc5-de12d432dba3',
        created_time: '2022-04-20T14:33:00.000Z',
        last_edited_time: '2022-04-20T14:34:00.000Z',
        created_by: {
          object: 'user',
          id: 'bee3a462-44be-405b-b2cb-994920ea1d89',
        },
        last_edited_by: {
          object: 'user',
          id: 'bee3a462-44be-405b-b2cb-994920ea1d89',
        },
        has_children: false,
        archived: false,
        type: 'paragraph',
        paragraph: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: 'third sub',
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
              },
              plain_text: 'third sub',
              href: null,
            },
          ],
          color: 'default',
        },
      },
    ],
  },
  {
    object: 'block',
    id: '7fa1fb0e-a0bf-43f0-86bc-e435870a7b0f',
    created_time: '2022-04-20T14:34:00.000Z',
    last_edited_time: '2022-04-20T14:34:00.000Z',
    created_by: {
      object: 'user',
      id: 'bee3a462-44be-405b-b2cb-994920ea1d89',
    },
    last_edited_by: {
      object: 'user',
      id: 'bee3a462-44be-405b-b2cb-994920ea1d89',
    },
    has_children: false,
    archived: false,
    type: 'paragraph',
    paragraph: {
      rich_text: [],
      color: 'default',
    },
  },
];
