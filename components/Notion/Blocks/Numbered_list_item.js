import { blockMapper } from '../../../lib/notion/blockMapper';
import { RichText } from '../Common/RichText';
import { colors } from '../Common/color';

// From stackoverflow: https://stackoverflow.com/questions/9083037/convert-a-number-into-a-roman-numeral-in-javascript
const numberToRoman = (num) => {
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  var str = '';

  for (var i of Object.keys(roman)) {
    var q = Math.floor(num / roman[i]);
    num -= q * roman[i];
    str += i.repeat(q);
  }

  return str;
};

function numberToAlphabet(num) {
  // lowercase: 96, uppercase: 64
  let letter = String.fromCharCode(num + 96);
  return letter;
}

function numberToString(num) {
  return new String(num);
}

const numberHandlers = [numberToString, numberToRoman, numberToAlphabet];

export const Numbered_list_item = ({
  numbered_list_item,
  children,
  layer,
  number,
}) => {
  const { rich_text, color } = numbered_list_item;
  if (!layer) layer = 0;
  return (
    <div
      className={` grid grid-cols-[minmax(2em,auto)_1fr] grid-flow-row ${colors[color]} align-top mt-2 `}>
      <div className=' self-baseline mr-2'>
        {numberHandlers[layer % numberHandlers.length](number)}.
      </div>
      <div className=' self-baseline '>
        {rich_text.map((i, index) => (
          <RichText rich_text={i} key={index} />
        ))}
      </div>
      <div className=' col-start-2 col-end-3'>
        {children?.map((child, index) => {
          if (child.type === 'numbered_list_item') {
            child.layer = layer + 1;
            if (
              index === 0 ||
              children[index - 1].type !== 'numbered_list_item'
            ) {
              child.number = 1;
            } else {
              child.number = children[index - 1].number + 1;
            }
          }

          return blockMapper(child);
        })}
      </div>
    </div>
  );
};
