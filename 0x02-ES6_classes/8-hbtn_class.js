// Implement a class named HolbertonClass:

// Constructor attributes:
// size (Number)
// location (String)
// Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
// When the class is cast into a Number, it should return the size.
// When the class is cast into a String, it should return the location.

export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a Number');
    }

    if (typeof location !== 'string') {
      throw new TypeError('Location must be a String');
    }

    this._size = size;
    this._location = location;
  }

  // When Cast to number return size
  valueOf() {
    return this._size;
  }

  // When Cast to string return location
  toString() {
    return this._location;
  }
}
