import SyntaxHighlighter from 'react-syntax-highlighter';
import { RichText } from '../Common/RichText';

// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// Just use 'cjs' rather than 'esm', I don't know why.
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/230#issuecomment-568377353
import {
  docco,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export const Code = ({ code }) => {
  const { rich_text, language } = code;
  return (
    <div className='mt-2 rounded overflow-hidden'>
    <SyntaxHighlighter language={language} style={docco}>
      {rich_text.map((item)=>item.text.content).join('')}
    </SyntaxHighlighter>
    </div>
  );
};
