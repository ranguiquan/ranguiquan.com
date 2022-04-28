function scrollToID(id) {
  window.scrollTo({left: 0, top: findPosition(document.getElementById(id)) ,behavior: 'smooth'});
}
function findPosition(obj) {
  let currenttop = 0;
  if (obj.offsetParent) {
    do {
      currenttop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    // 64 is the height of head bar
    return currenttop-64;
  }
}
export const ContentTable = ({ pageContent }) => {
  const handleAnchorClick = (e) => {
    e.preventDefault();
    scrollToID(e.target.hash.substring(1));
  };
  return (
    <div
      className='sticky hidden xl:block top-[64px] w-[256px]
   dark:bg-black
     bg-[#fafafa] dark:card-shadow-dark
     rounded-3xl p-4 space-y-2'>
      {pageContent?.map((item) => {
        switch (item.type) {
          case 'heading_1':
            return (
              <a
                href={`#${item.id}`}
                className='block break-words hover:underline'
                key={item.id}
                onClick={handleAnchorClick}>
                {item.heading_1.rich_text
                  ?.map((rich) => rich.plain_text)
                  .join(' ')}
              </a>
            );
          case 'heading_2':
            return (
              <a
                href={`#${item.id}`}
                className='block ml-4 break-words hover:underline'
                key={item.id}
                onClick={handleAnchorClick}>
                {item.heading_2.rich_text
                  ?.map((rich) => rich.plain_text)
                  .join(' ')}
              </a>
            );
          case 'heading_3':
            return (
              <a
                href={`#${item.id}`}
                className='block ml-8 break-words hover:underline'
                key={item.id}
                onClick={handleAnchorClick}>
                {item.heading_3.rich_text
                  ?.map((rich) => rich.plain_text)
                  .join(' ')}
              </a>
            );
          default:
            return;
        }
      })}
    </div>
  );
};
