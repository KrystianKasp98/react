import { useMutation, useQuery } from "react-query";

import { getTodos, postTodo, } from "../api/todos";
import { queryClient } from "../providers/QueryProvider";

export const useTodos = () => {
  const query = useQuery('todos', getTodos);

  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    }
  });

  return {
    query,
    mutation
  }
}
