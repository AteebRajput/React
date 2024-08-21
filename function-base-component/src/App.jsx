import Navbar from './component/common/navbar'
import Counter from './component/counter/counter'
import  {useState} from 'react'
import './App.css'

function App() {
  
  const [showCounter1, setShowCounter1] = useState(true)
  const [showCounter2, setShowCounter2] = useState(true)


  const  toggleControl01 = () =>{
    setShowCounter1(!showCounter1)
  }

  const  toggleControl02 = () =>{
    setShowCounter2(!showCounter2)
  }
  
  return (
      <div className="container">
      <Navbar />
      <div className="navigation">
        <button onClick={toggleControl01}>
          {
            showCounter1 ? "hide counter 01" : "show counter 01"
          }
        </button>
        <button onClick={toggleControl02}>
          {
            showCounter2 ? "hide counter 02" : "show counter 02"
          }
        </button>
      </div>
      <main>
        {
          showCounter1 && <Counter appNo="01" start={10} incrementAmount={10} />
        }
      
        {
          showCounter2 && <Counter appNo="02" start={10} incrementAmount={5} />
        }
      </main>
    </div>
    )
  
}

export default App

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       showCounter1 : true,
//       showCounter2 : true,
//     }
//   }

//   toggleControl01 = () =>{
//     this.setState({
//       ...this.state, showCounter1: !this.state.showCounter1
//     })
//   }
//   toggleControl02 = () =>{
//     this.setState({
//       ...this.state, showCounter2: !this.state.showCounter2
//     })
//   }

//   render(){

//   }
// }