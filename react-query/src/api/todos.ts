type Todo = {
  id: number,
  text: string
}

const todos: Todo[] = [
  {id: 1, text: 'todo1'},
  {id: 2, text: 'todo2'},
  {id: 3, text: 'todo3'},
  {id: 4, text: 'todo4'},
  {id: 5, text: 'todo5'},
];

export function getTodos(): Promise<Todo[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(todos)
    }, 2000);
  });
}

export function postTodo(text: string): Promise<unknown> {
  return new Promise((resolve, reject) => {
    if (!text.length) {
      reject('Text should have at least 1 char');
    }
    setTimeout(() => {
      todos.push({id: new Date().getTime(), text});
      resolve(1);
    }, 1500);
  });
}
