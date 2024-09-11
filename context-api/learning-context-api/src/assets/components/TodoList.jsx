import { useContext } from "react";
import todoContext from "../../context/Todo/todocontext";

const TodoLists = () => {
  const { todos } = useContext(todoContext);
  
  return (
    <div>
      <h1>Todo List</h1>
      {todos && todos.length > 0 ? (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li> 
          ))}
        </ul>
      ) : (
        <p>No todos available</p>
      )}
    </div>
  );
};

export default TodoLists;
