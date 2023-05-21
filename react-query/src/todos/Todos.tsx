import { useRef } from "react";
import { useTodos } from "../hooks/useTodos";

export function Todos() {
  const inputRef = useRef<HTMLInputElement>(null);
  const {query, mutation} = useTodos();

  const onClick = () => {
    if (inputRef?.current?.value) {
      mutation.mutate(inputRef.current.value);
      return inputRef.current.value = '';
    }
    return alert('Todo should have at least 1 char');
  }

  return (
    <div>
      <label> Add todo
        <br />
        <input type="text" ref={inputRef}/>
      </label>
      {(!query.data || query.isLoading || mutation.isLoading) ?
        <div>Loading... </div> :
        <ul>
        {query.data.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>}

      <button
        onClick={onClick}
      >
        Add Todo
      </button>
    </div>
  );
}
