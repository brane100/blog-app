import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

export const App=()=> {
  return (
    <>
    {/* <h1>Thank you Janko</h1> */}
    <h1>Todo List</h1>
    <AddTodo />
    <Todos />
    </>
  );
}
