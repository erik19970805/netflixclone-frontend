import useList from '@src/hooks/useList';
import ListItem from './ListItem';

const List = () => {
  const { listRef, handleClink, isMoved } = useList();
  return (
    <div className="list">
      <span className="list-title">Continue to watch</span>
      <div className="wrapper">
        <div className={`slider-arrow left ${isMoved[0] && 'moved'}`} onClick={() => handleClink('left')} aria-hidden>
          <i className="bx bx-chevron-left" />
        </div>
        <div className="container" ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
        </div>
        <div className={`slider-arrow right ${isMoved[1] && 'moved'}`} onClick={() => handleClink('right')} aria-hidden>
          <i className="bx bx-chevron-right " />
        </div>
      </div>
    </div>
  );
};

export default List;
