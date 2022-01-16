const person = {
  _name: '',
  get name () {
    return this._name
  },
  set name (name) {
    this._name = name.toUpperCase()
  },
  _age: 20,
  get canDrive() {
    return this._age >= 18
  },
  get age() {
    return this._age
  },
  set age(age) {
    this._age = age
  }
}

person.name = 'lucas'
console.log(person.name)
person.age = 17
console.log(person.canDrive)
console.log(person.age)