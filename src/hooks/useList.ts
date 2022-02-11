import { useRef, useState } from 'react';

const useList = () => {
  const [isMoved, setIsMoved] = useState([true, false]);
  const [sliderNumber, setSliderNumber] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const handleClink = (direction: string) => {
    if (!listRef.current) return;
    const distance = listRef.current.getBoundingClientRect().x - 50;
    let result = sliderNumber;
    let style = '';
    if (direction === 'left' && sliderNumber > 0) {
      result -= 1;
      setIsMoved([result === 0, result === 5]);
      style = `translateX(${230 + distance}px)`;
    }
    if (direction === 'right' && sliderNumber < 5) {
      result += 1;
      setIsMoved([result === 0, result === 5]);
      style = `translateX(${-230 + distance}px)`;
    }
    setSliderNumber(result);
    listRef.current.style.transform = style;
  };
  return { listRef, handleClink, isMoved };
};

export default useList;
