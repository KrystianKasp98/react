import { useMutation } from "react-query";

import { postTodo } from "../api/todos";
import { queryClient } from "../providers/QueryProvider";

// https://tanstack.com/query/v4/docs/react/guides/optimistic-updates#updating-a-single-todo

export const useAddTodo = () => {

  // optimistic update
  return useMutation(postTodo, {
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: ['useTodos', newTodo.id] })

      const previousTodo = queryClient.getQueryData(['useTodos', newTodo.id])

      queryClient.setQueryData(['useTodos', newTodo.id], newTodo)

      return { previousTodo, newTodo }
    },

    onError: (err, newTodo, context) => {
      queryClient.setQueryData(
        ['useTodos', context?.newTodo],
        context?.previousTodo,
      )
    },

    onSettled: (newTodo) => {
      queryClient.invalidateQueries({ queryKey: ['useTodos', newTodo] })
    },
  });
}
