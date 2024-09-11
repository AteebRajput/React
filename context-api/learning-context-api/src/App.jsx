
import Form from './assets/components/Form'
import TodoLists from './assets/components/TodoList'

import TodoList from './context/Todo/TodoState'

function App() {
  

  return (
    <>
    <TodoList>

      <Form/>
      <TodoLists/>
    </TodoList>
    </>
  )
}

export default App
