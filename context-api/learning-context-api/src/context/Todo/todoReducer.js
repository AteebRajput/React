import { Add_Task } from "../types"

const todoReducer = ( state, action ) => {
    switch(action.type){

        case Add_Task:
            return{
                ...state,
                todos: [...state.todos ,action.payload],

            }



        default:
            return{
                ...state,
            }
    }
}

export default todoReducer