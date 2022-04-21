import { blockMapper } from '../../../lib/notion/blockMapper';
import { RichText } from '../Common/RichText';
import { colors } from '../Common/color';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';

export const To_do = ({ to_do, children }) => {
  const { rich_text, color, checked } = to_do;
  return (
    <div className={`flex ${colors[color]} items-start mt-2 `}>
      <div className=' flex-grow-0 flex-shrink-0 flex items-center justify-start w-8 h-6'>
        {checked ? (
          <MdCheckBox size='1.5em' />
        ) : (
          <MdCheckBoxOutlineBlank size='1.5em' />
        )}
      </div>
      {/* <div className='flex'> */}
        <div className='flex-1 break-words max-w-full'>
          {rich_text.map((i, index) => (
            <RichText rich_text={i} key={index} />
          ))}
          {children?.map((child) => {
            return blockMapper(child);
          })}{' '}
        </div>
      {/* </div> */}
    </div>
  );
};
