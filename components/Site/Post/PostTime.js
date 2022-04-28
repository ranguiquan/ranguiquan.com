const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const PostTime = ({ date }) => {
  return (
    <span>{`${date.toLocaleString('en-US', {
      month: 'short',
    })} ${date.getDate()}, ${date.getFullYear()} `}</span>
  );
};
