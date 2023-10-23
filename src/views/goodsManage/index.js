import { useEffect, useState } from 'react';
const GoodList = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('useEffect' + count);
  }, [count]);
  function handle() {
    console.log('click商品管理');
  }
  return (
    <div>
      <div>商品管理{count}</div>
      <button onClick={handle}>click me</button>
      <button onClick={() => setCount(count + 1)}>count +1</button>
    </div>
  );
};
export default GoodList;
