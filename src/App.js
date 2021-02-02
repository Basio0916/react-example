import React, {useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0);  // 初期値0でcountを初期化 & state更新用関数setCountを定義
  return (
    <React.Fragment>
      <p>Count : {count}</p>
      <button onClick={()=>{setCount(count + 1)}}>
        Count Up
      </button>
    </React.Fragment>
  );
}

export default Counter;
