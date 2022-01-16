const persons = [
  {
    name: 'Lucas',
    age: 22
  },
  {
    name: 'Caio',
    age: 18
  },
  {
    name: 'Carlos',
    age: 42
  }
]

for (let index in persons) {
  console.log(persons[index].name)
}

for (let person of persons) {
  console.log(person.age)
}