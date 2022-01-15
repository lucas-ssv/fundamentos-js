const hero = {
  name: 'Flash',
  age: 100,
  gender: 'Male'
}

// console.log('herói', hero.name)
// console.log('idade', hero.age)
// console.log('gender', hero.gender)
// console.log('teste', hero.teste)

// hero.id = 0001
// console.log(hero)
// console.log(Object.keys(hero))
// console.log(Object.values(hero))
const person = {
  size: '2 metros'
}

console.log(Object.assign(hero, person))
delete hero.age
console.log(hero)