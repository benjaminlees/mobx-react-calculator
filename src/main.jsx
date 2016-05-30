import React from 'react'
import ReactDOM from 'react-dom'
import { observer } from "mobx-react"
import CalculatorStore from '../src/store/calculator-store.js'
const styles = require('./styles.css');

@observer
class Calculator extends React.Component {
  render() {
   const { calculator } = this.props
   const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
   return (
    <div className={ styles.mainContainer }>
      <div className={ styles.buttonContainer }>
        <div className={styles.center}>{ calculator.currentCalculation }</div>
        { numbers.map((val, i) => <button className={ styles.button } key={i} onClick={ () => calculator.updateCalculation(val) }>{val}</button>)}
        <button className={ styles.button } onClick={() => calculator.updateCalculation('+')} >+</button>
        <button className={ styles.button } onClick={() => calculator.updateCalculation('-')} >-</button>
        <button className={ styles.button } onClick={() => calculator.updateCalculation('/')} >/</button>
        <button className={ styles.button } onClick={ () => { calculator.calculate() } } >Ext</button>
      </div>
    </div>
   )
  }
}
const store = new CalculatorStore()
const node = document.getElementById('main')
ReactDOM.render(<Calculator calculator={ store } />, node);
