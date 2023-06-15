# This repo includes info about react hooks

You can't call hooks conditionally like this(React's hook must be at the top level of component function):

```js
function App() {
  if (true) {
    const [count, setCount] = useState(0)
  }

  return (
    <div>{count}</div>
  )
}
```

React hooks must be called in the exact same order in every component render:

```js
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>{count}</div>
  )
}
```
