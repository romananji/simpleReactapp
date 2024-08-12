import {Component} from "react"
import "./App.css"

class App extends Component{
  state={counter:0}

  onIncrease=()=>{
    this.setState(previousState=>(
      {counter:previousState.counter+1}
    ))
  }

  onDecrease=()=>{
    this.setState(previousState=>(
      {counter:previousState.counter-1}
    ))
  }

  render(){
    const {counter}=this.state
    return(
      <div className="bg-container">
        <h1 className="counter">Counter</h1>
        <p className="count">{counter}</p>
        <div>
        <button type="button" className="button" onClick={this.onIncrease}>Increase</button>
        <button type="button" className="button" onClick={this.onDecrease}>Decrease</button>
        </div>
      </div>
    )
  }
}
export default App