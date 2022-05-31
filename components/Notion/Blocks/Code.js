import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useContext } from 'react';
import { ThemeContext } from '../../../pages/_app';

// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// Just use 'cjs' rather than 'esm', I don't know why.
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/230#issuecomment-568377353
import { oneLight, tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// import {
//   abap,
//   arduino,
//   bash,
//   basic,
//   c,
//   clojure,
//   coffeescript,
//   cpp,
//   csharp,
//   css,
//   dart,
//   diff,
//   docker,
//   elixir,
//   elm,
//   erlang,
//   flow,
//   fortran,
//   fsharp,
//   gherkin,
//   glsl,
//   go,
//   graphql,
//   groovy,
//   haskell,
//   html,
//   java,
//   javascript,
//   json,
//   julia,
//   kotlin,
//   latex,
//   less,
//   lisp,
//   livescript,
//   lua,
//   makefile,
//   markdown,
//   markup,
//   matlab,
//   mermaid,
//   nix,
//   objectivec,
//   ocaml,
//   pascal,
//   perl,
//   php,
//   powershell,
//   prolog,
//   protobuf,
//   python,
//   r,
//   reason,
//   ruby,
//   rust,
//   sass,
//   scala,
//   scheme,
//   scss,
//   shell,
//   sql,
//   swift,
//   typescript,
//   vbnet,
//   verilog,
//   vhdl,
//   visualBasic,
//   webassembly,
//   xml,
//   yaml,
// } from 'react-syntax-highlighter/dist/cjs/languages/prism';

export const Code = ({ code }) => {
  const { theme } = useContext(ThemeContext);
  const { rich_text } = code;
  let { language } = code;
  switch (language) {
    case 'c++':
      language = 'cpp';
      break;
    case 'c#':
      language = 'csharp';
      break;
    case 'f#':
      language = 'fsharp';
      break;
    case 'objective-C':
      language = 'objectivec';
      break;
    case 'plain text':
      language = '';
      break;
    case 'vb.net':
      language = 'vbnet';
      break;
    case 'visual basic':
      language = 'visualBasic';
      break;
    default:
      break;
  }
  return (
    <div className='mt-2 rounded overflow-hidden'>
      <SyntaxHighlighter language={language} style={theme === 'dark' ? tomorrow : oneLight}>
        {rich_text.map((item) => item.text.content).join('')}
      </SyntaxHighlighter>
    </div>
  );
};
