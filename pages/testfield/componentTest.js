import RichText from "../../components/Notion/Common/RichText";

const mock = [
  {
    type: 'text',
    text: {
      content: 'ffff',
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
    plain_text: 'ffff',
    href: null,
  },
];

const componentTest = () => {
  return <RichText rich_text={mock[0]}/>;
};

export default componentTest;
