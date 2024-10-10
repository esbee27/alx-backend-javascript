import Currency from './3-currency';

export default class Pricing {

   constructor(amount, currency) {
      this.amount = amount;
      this.currency = currency;
    }
  
    //getter for amoumt
    get amoumt() {
      return this._amount;
    }
    //set amount
    set amount(value) {
      this._amount = value;
    }

    //getter for currency
    get currency() {
        return this._currency;
    }
    //set currency
    set currency(value) {
        this._currency = value;
    }

    displayFullPrice() {
        return `${this._amount} ${this.currency.displayFullCurrency()}`;
    }

    static convertPrice(amount, conversionRate) {
	    return amount * conversionRate;
    }
}
