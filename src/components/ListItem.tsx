import { useState } from 'react';

interface IProps {
  index: number;
}

const ListItem = ({ index }: IProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = 'https://static.vecteezy.com/system/resources/previews/002/496/614/mp4/sticks-and-drums-free-video.mp4';
  return (
    <div
      className="listItem"
      style={{ left: isHovered ? index * 255 - 50 + index * 2.5 : '' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://image.shutterstock.com/z/stock-vector-happy-new-year-holiday-vector-illustration-of-golden-metallic-numbers-and-sparkling-2034093419.jpg"
        alt="img-2022"
      />
      {isHovered && (
        <>
          <video autoPlay loop>
            <source src={trailer} type="video/mp4" />
            <track kind="captions" />
          </video>
          <div className="item-info">
            <div className="icons">
              <i className="bx bx-play" />
              <i className="bx bx-plus" />
              <i className="bx bx-like" />
              <i className="bx bx-dislike" />
            </div>
          </div>
          <div className="item-info-top">
            <span>1 hour 14 mins</span>
            <span className="limit">+16</span>
            <span>1999</span>
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui a pariatur ut repudiandae excepturi illo saepe
            sapiente doloribus suscipit itaque?
          </div>
          <div className="genre">Action</div>
        </>)
      }
    </div >
  );
};

export default ListItem;
