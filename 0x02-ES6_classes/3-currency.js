export default class Currency {

    constructor(code, name) {
      this.code = code;
      this.name = name;
    }
  
    //getter for name
    get name() {
      return this._name;
    }
    //set name
    set name(value) {
      this._name = value;
    }

    //getter for code
    get code() {
        return this._code;
    }
    //set code
    set code(value) {
        this._code = value;
    }
  
    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}  
