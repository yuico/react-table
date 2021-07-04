import React, { useEffect, useState } from 'react';
import TableList from './TableList';

const fetchURL = (id) =>
  `https://jsonplaceholder.typicode.com/posts/${id}/comments`;

export default function Table() {
  const [data, setData] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(false);

  useEffect(() => {
    fetch(fetchURL(currentIdx + 1))
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [currentIdx]);

  useEffect(() => {
    if (currentIdx === 0) {
      setIsFirst(true);
      setIsLast(false);
    } else if (currentIdx > 2) {
      setIsFirst(false);
      setIsLast(true);
    } else {
      setIsFirst(false);
      setIsLast(false);
    }
  }, [currentIdx]);

  const handleClickNext = () => {
    setCurrentIdx((prev) => prev + 1);
  };

  const handleClickPrev = () => {
    setCurrentIdx((prev) => prev - 1);
  };

  return (
    <div>
      <TableList data={data} />
      <button disabled={isLast} onClick={handleClickNext}>
        NEXT
      </button>
      <button disabled={isFirst} onClick={handleClickPrev}>
        PREV
      </button>
      <button onClick={() => setCurrentIdx(0)}>FIRST</button>
      <button onClick={() => setCurrentIdx(3)}>LAST</button>
    </div>
  );
}
