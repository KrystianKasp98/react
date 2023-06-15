import { useRef } from "react";
import { useTodos } from "../hooks/useTodos";
import { useAddTodo } from "../hooks/useAddTodo";

export function Todos() {
  const inputRef = useRef<HTMLInputElement>(null);
  const todoQuery = useTodos();
  const todoMutation = useAddTodo();

  const onClick = () => {
    if (inputRef?.current?.value) {
      todoMutation.mutate({
        text: inputRef.current.value,
        id: new Date().getTime()
      });

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
      {(!todoQuery.data || todoQuery.isLoading || todoMutation.isLoading) ?
        <div>Loading... </div> :
        <ul>
        {todoQuery.data.map(todo => (
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
