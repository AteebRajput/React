import React from "react";
import Counter from "./components/counter/counter";
import Navbar from "./components/common/navbar";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showCounter1 : true,
      showCounter2 : true,
    }
  }

  toggleControl01 = () =>{
    this.setState({
      ...this.state, showCounter1: !this.state.showCounter1
    })
  }
  toggleControl02 = () =>{
    this.setState({
      ...this.state, showCounter2: !this.state.showCounter2
    })
  }

  render(){
    return (
      <div className="container">
      <Navbar />
      <div className="navigation">
        <button onClick={this.toggleControl01}>
          {
            this.state.showCounter1 ? "hide counter 01" : "show counter 01"
          }
        </button>
        <button onClick={this.toggleControl02}>
          {
            this.state.showCounter2 ? "hide counter 02" : "show counter 02"
          }
        </button>
      </div>
      <main>
        {
          this.state.showCounter1 && <Counter appNo="01" start={10} incrementAmount={10} />
        }
      
        {
          this.state.showCounter2 && <Counter appNo="02" start={10} incrementAmount={5} />
        }
      
      </main>
    </div>
    )
  }
}


export default App;
