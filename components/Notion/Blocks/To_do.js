import { blockMapper } from '../../../lib/notion/blockMapper';
import { RichText } from '../Common/RichText';
import { colors } from '../Common/color';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';

export const To_do = ({ to_do, children }) => {
  const { rich_text, color, checked } = to_do;
  return (
    <div
      // FIXME: Fix this layout.
      className={` break-words grid grid-cols-[2em_minmax(auto,full)] grid-flow-row align-top mt-2 ${colors.default} ${colors[color]}`}>
      <div className='self-baseline'>
        <div className=' h-[1.5em] w-[1.5em]'>
          {checked ? <MdCheckBox size='1.5em' /> : <MdCheckBoxOutlineBlank size='1.5em'/>}
        </div>
      </div>
      <div className='self-baseline break-words max-w-full'>
        {rich_text.map((i, index) => (
          <RichText rich_text={i} key={index} />
        ))}
      </div>
      <div className=' col-start-2 col-end-3'>
        {children?.map((child) => {
          return blockMapper(child);
        })}{' '}
      </div>
    </div>
  );
};
