export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  //getter for name
  get name() {
    return this._name;
  }

  //set name
  set name(value) {
    if (typeof value !== 'string') {
        throw new TypeError('Name must be a string');
    }
    this.name = value;
  }

  //getter for length
  get length() {
    return this._length;
  }

  //set length
  set length(value) {
    if (typeof value !== 'number') { 
	throw new TypeError('Length must be a number');
    }
    this.length = value;
  }

  //getter for students
  get students() {
    return this._students;
  }

  //set students
  set students(value) {
    value.forEach9(element => {
        if (typeof element !== 'string') {
            throw new TypeError('Name must be an array of strings');
        }
    });
    this._students = value;
  }
}
