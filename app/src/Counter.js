import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  if(count > 5 ){
    style={
      Color: 'red'
    }
  }else{
    style={
      Color: 'green'
    }
  }
  return (
    <div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <h5>{count}</h5>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;