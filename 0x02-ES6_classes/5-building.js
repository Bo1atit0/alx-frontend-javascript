export default class Building {
  constructor(sqft) {
    // if (new.target === Building) {
    //     throw new Error('Cannot Instantiate this Class directly')
    // }

    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }

    this._sqft = sqft;

    if (this.constructor !== Building && this.evacuationWarningMessage
        === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Abstract Method(Use comments to disable eslint error)
  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    // This is meant to be overridden by child classes
  }

  // Getter
  get sqft() {
    return this._sqft;
  }

  // Setter
  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = value;
  }
}
