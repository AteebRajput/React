import todoContext from "./todocontext";
import todoReducer from "./todoReducer";
import { useReducer } from "react";
import { Add_Task } from "../types";


const TodoList = (props) =>{

    const initialState = {
        todos: [],
    }

    const [state , dispatch] = useReducer(todoReducer,initialState)

    const addTask = () =>{
        dispatch({
            type: Add_Task,
            payload: "This is task 1"
        })
    }

    return(
        <todoContext.Provider >
            {props.children}
        </todoContext.Provider>
    )







}

export default TodoList



