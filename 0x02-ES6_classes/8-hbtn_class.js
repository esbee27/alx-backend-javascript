export default class HolbertonClass {
    constructor(name, code) {
        if (typeof size !== 'number' || typeof location !== 'string') throw new Error();
        this._size = size;
        this._location = location;
    }

    [Symbol.toPrimitive](hint) {
        if (hint == 'string') {
            return this._location;
        }
        if (hint == 'number') {
            return this._size;
        }
        return this;
    }
}