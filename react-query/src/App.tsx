import { QueryProvider } from "./providers/QueryProvider";
import { Todos } from "./todos/Todos";

function App() {
  return (
    <QueryProvider>
      <Todos />
    </QueryProvider>
  );
}

export default App;
