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

  // second way, pass callback function, it's going to run only first time(useful for hard calculations of state)
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

  const [state, setState] = useState({count: 4, theme: 'blue'});

  function decrementStateCount() {
    // setState(prev => ({count: prev.count - 1})); // useState hook, require entire state object, in that case state would be changed to {count: 3}, instead expected {count: 3, theme: 'blue}
    setState(prev => ({...prev, count: prev.count - 1}));
  }

  function incrementStateCount() {
    setState(prev => ({...prev, count: prev.count + 1}));
  }

  return (
    <div>
      <h1>Count</h1>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>

      <br />
      <br />

      <h1>State</h1>
      <button onClick={decrementStateCount}>-</button>
      <span>{state.theme}{state.count}</span>
      <button onClick={incrementStateCount}>+</button>

    </div>
  )
}

export default App
