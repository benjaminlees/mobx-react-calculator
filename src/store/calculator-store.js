import { observable, computed } from 'mobx';

export default class CalculatorStore {
  @observable number = 0;
  add(val) {
    this.number = this.number + parseInt(val, 10)
  };
}

