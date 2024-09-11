import { useState } from "react"
import { useContext } from "react"
import todoContext from "../../context/Todo/todocontext"


const Form = () => {
  
  const [task , setTask] = useState("")
  const {addTask} = useContext(todoContext)
  
  const onChange = e => setTask(e.target.value)
  
  const onSubmit = (e) =>{
    e.preventDefault()
    if(task == ""){
      alert("Please add description")
    }
    else{
      addTask(task)
      setTask("")

    }
  }
  
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={task}/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default Form
