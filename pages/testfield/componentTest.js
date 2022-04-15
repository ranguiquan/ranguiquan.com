import Paragraph from '../../components/Notion/Blocks/Paragraph';
import RichText from '../../components/Notion/Common/RichText';
import { getPageChildrenBlocks } from '../../lib/notion/page';

export const getStaticProps = async (ctx) => {
  const pageID = process.env.PAGE_ID;
  const data = await getPageChildrenBlocks(pageID);

  return {
    props: {
      data,
    },
  };
};

const paragraph = {
  rich_text: [
    {
      type: 'text',
      text: {
        content: "'default',\n",
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
      plain_text: "'default',\n",
      href: null,
    },
    {
      type: 'text',
      text: {
        content: "'gray',",
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'gray',
      },
      plain_text: "'gray',",
      href: null,
    },
    {
      type: 'text',
      text: {
        content: '\n',
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
      plain_text: '\n',
      href: null,
    },
    {
      type: 'text',
      text: {
        content: "'brown',",
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'brown',
      },
      plain_text: "'brown',",
      href: null,
    },
    {
      type: 'text',
      text: {
        content: '\n',
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
      plain_text: '\n',
      href: null,
    },
    {
      type: 'text',
      text: {
        content: "'orange',",
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'orange',
      },
      plain_text: "'orange',",
      href: null,
    },
    {
      type: 'text',
      text: {
        content: '\n',
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
      plain_text: '\n',
      href: null,
    },
    {
      type: 'text',
      text: {
        content: "'yellow',",
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'yellow',
      },
      plain_text: "'yellow',",
      href: null,
    },
    {
      type: 'text',
      text: {
        content: '\n',
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
      plain_text: '\n',
      href: null,
    },
    {
      type: 'text',
      text: {
        content: "'green',",
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'blue',
      },
      plain_text: "'green',",
      href: null,
    },
    {
      type: 'text',
      text: {
        content: '\n',
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
      plain_text: '\n',
      href: null,
    },
    {
      type: 'text',
      text: {
        content: "'blue',",
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'blue',
      },
      plain_text: "'blue',",
      href: null,
    },
    {
      type: 'text',
      text: {
        content: '\n',
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
      plain_text: '\n',
      href: null,
    },
    {
      type: 'text',
      text: {
        content: "'purple',",
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'purple',
      },
      plain_text: "'purple',",
      href: null,
    },
    {
      type: 'text',
      text: {
        content: '\n',
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
      plain_text: '\n',
      href: null,
    },
    {
      type: 'text',
      text: {
        content: "'pink',",
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'pink',
      },
      plain_text: "'pink',",
      href: null,
    },
    {
      type: 'text',
      text: {
        content: '\n',
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
      plain_text: '\n',
      href: null,
    },
    {
      type: 'text',
      text: {
        content: "'red',\n",
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'red',
      },
      plain_text: "'red',\n",
      href: null,
    },
    {
      type: 'text',
      text: {
        content: "'default_background'\n",
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
      plain_text: "'default_background'\n",
      href: null,
    },
    {
      type: 'text',
      text: {
        content: "'gray_background',",
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'gray_background',
      },
      plain_text: "'gray_background',",
      href: null,
    },
    {
      type: 'text',
      text: {
        content: '\n',
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
      plain_text: '\n',
      href: null,
    },
    {
      type: 'text',
      text: {
        content: "'brown_background',",
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'brown_background',
      },
      plain_text: "'brown_background',",
      href: null,
    },
    {
      type: 'text',
      text: {
        content: '\n',
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
      plain_text: '\n',
      href: null,
    },
    {
      type: 'text',
      text: {
        content: "'orange_background',",
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'orange_background',
      },
      plain_text: "'orange_background',",
      href: null,
    },
    {
      type: 'text',
      text: {
        content: '\n',
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
      plain_text: '\n',
      href: null,
    },
    {
      type: 'text',
      text: {
        content: "'yellow_background',",
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'yellow_background',
      },
      plain_text: "'yellow_background',",
      href: null,
    },
    {
      type: 'text',
      text: {
        content: '\n',
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
      plain_text: '\n',
      href: null,
    },
    {
      type: 'text',
      text: {
        content: "'green_background',",
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'green_background',
      },
      plain_text: "'green_background',",
      href: null,
    },
    {
      type: 'text',
      text: {
        content: '\n',
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
      plain_text: '\n',
      href: null,
    },
    {
      type: 'text',
      text: {
        content: "'blue_background',",
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'blue_background',
      },
      plain_text: "'blue_background',",
      href: null,
    },
    {
      type: 'text',
      text: {
        content: '\n',
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
      plain_text: '\n',
      href: null,
    },
    {
      type: 'text',
      text: {
        content: "'purple_background',",
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'purple_background',
      },
      plain_text: "'purple_background',",
      href: null,
    },
    {
      type: 'text',
      text: {
        content: '\n',
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
      plain_text: '\n',
      href: null,
    },
    {
      type: 'text',
      text: {
        content: "'pink_background',",
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'pink_background',
      },
      plain_text: "'pink_background',",
      href: null,
    },
    {
      type: 'text',
      text: {
        content: '\n',
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
      plain_text: '\n',
      href: null,
    },
    {
      type: 'text',
      text: {
        content: "'red_background',\n",
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'red_background',
      },
      plain_text: "'red_background',\n",
      href: null,
    },
    {
      type: 'text',
      text: {
        content: 'bold\n',
        link: null,
      },
      annotations: {
        bold: true,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'red_background',
      },
      plain_text: 'bold\n',
      href: null,
    },
    {
      type: 'text',
      text: {
        content: 'italic\n',
        link: null,
      },
      annotations: {
        bold: false,
        italic: true,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'red_background',
      },
      plain_text: 'italic\n',
      href: null,
    },
    {
      type: 'text',
      text: {
        content: 'strikethrough\n',
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: true,
        underline: false,
        code: false,
        color: 'red_background',
      },
      plain_text: 'strikethrough\n',
      href: null,
    },
    {
      type: 'text',
      text: {
        content: 'underline',
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: true,
        code: false,
        color: 'red',
      },
      plain_text: 'underline',
      href: null,
    },
    {
      type: 'text',
      text: {
        content: '\n',
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: true,
        code: false,
        color: 'red_background',
      },
      plain_text: '\n',
      href: null,
    },
    {
      type: 'text',
      text: {
        content: 'code',
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: true,
        color: 'red_background',
      },
      plain_text: 'code',
      href: null,
    },
    {
      type: 'text',
      text: {
        content: '\n',
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'red_background',
      },
      plain_text: '\n',
      href: null,
    },
    {
      type: 'text',
      text: {
        content: 'ffffffffffffffff',
        link: {
          url: 'https://rgq.plus',
        },
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: true,
        color: 'green_background',
      },
      plain_text: 'ffffffffffffffff',
      href: 'https://rgq.plus',
    },
  ],
  color: 'default',
};

const componentTest = ({ data }) => {
  // console.log(data)
  const { paragraph } = data[0];
  return (
    <div>
      <Paragraph paragraph={paragraph} />
    </div>
  );
};

export default componentTest;
