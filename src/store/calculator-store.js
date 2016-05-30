import { observable, computed } from 'mobx';

export default class CalculatorStore {
  @observable currentNumber = 0;
  @observable calculation = '';
  @computed get currentCalculation() {
    return `${this.currentNumber} ${this.calculation}`
  }

  calculate() {
    this.currentNumber = eval(this.calculation);
    this.calculation = '';
  };

  updateCalculation(val) {
    this.calculation = this.calculation + val;
  };
}

