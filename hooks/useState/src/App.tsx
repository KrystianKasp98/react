import { useState } from 'react'

function countInitial() {
  console.log('it will calculate on each re-render');
  return 4;
}

function App() {
  // each state update re-renders component
  // useState has 2 ways to pass initial state

  // first just pass value it's going to run every time when it's re-rendered
  const [count, setCount] = useState(countInitial());

  // second way, pass callback function, it's going to run only first time(usefull for hard calculations of state)
  // const [count, setCount] = useState(() => {
  //   console.log('run complex function');

  //   return 4;
  // });


  function decrementCount() {
    setCount(prev => prev - 1); // just use callback it's more safely due to below problems
    // avoid use setCount(count - 1), because in that case we reffer to count state instead prevState count
    // e.g. use setCount(count - 1) twice reduce count only by 1 instead of 2
  }

  function incrementCount() {
    setCount(prev => prev + 1);
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default App
