import { useQuery } from "react-query";

import { getTodos } from "../api/todos";

export const useTodos = () => {
  return useQuery({
    queryKey: ['useTodos'],
    queryFn: getTodos
  });
}
