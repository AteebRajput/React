import todoContext from "./todocontext";
import todoReducer from "./todoReducer";
import { useReducer } from "react";
import PropTypes from 'prop-types';
import { Add_Task } from "../types";

const TodoList = (props) => {
    const initialState = {
        todos: [
            "This is dummy task 1",
            "This is dummy task 2",
            "This is dummy task 3",
            "This is dummy task 4",
        ],
    }

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addTask = (text) => {
        dispatch({
            type: Add_Task,
            payload: text,
        });
    }

    return (
        <todoContext.Provider value={{
            todos: state.todos, // Add todos to the context value
            addTask: addTask,
        }}>
            {props.children}
        </todoContext.Provider>
    )
}

// Define prop types for validation
TodoList.propTypes = {
    children: PropTypes.node.isRequired,  // Ensuring that `children` is passed
}

export default TodoList;
