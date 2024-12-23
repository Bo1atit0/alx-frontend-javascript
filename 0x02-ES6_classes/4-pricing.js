import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be an instance of the Currency Class');
    }
    this._amount = amount;
    this._currency = currency;
  }

  // Method
  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  // Static Method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  // Getter
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }
}
