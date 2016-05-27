import React from 'react'
import ReactDOM from 'react-dom'
import { observer } from "mobx-react"
import CalculatorStore from '../src/store/calculator-store.js'

@observer
class Calculator extends React.Component {
  render() {
   const { calculator } = this.props
   return (
    <div>
      <div>{ calculator.number }</div>
      <input ref="num"></input>
      <button onClick={() => calculator.add(this.refs.num.value)} >add</button>
    </div>
   )
  }
}
const store = new CalculatorStore()
const node = document.getElementById('main')
ReactDOM.render(<Calculator calculator={ store } />, node);
