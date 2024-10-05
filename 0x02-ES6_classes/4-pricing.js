import Currency from './3-currency';

export default class Pricing {
    constructor(amount, currency) {
      this.amount = amount;
      this.currency = currency;
    }
  
    //getter for name
    get name() {
      return this._name;
    }
    //set name
    set name(value) {
      this.name = value;
    }

    //getter for code
    get code() {
        return this._code;
    }
    //set code
    set code(value) {
        this.code = value;
    }
  

    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}  