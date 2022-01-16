class Hero {
  attack() {
    console.log('Atacouu!!')
  }

  protect() {
    console.log('Defendeuu!!')
  }
}

const hero1 = new Hero()
hero1.attack()
hero1.protect()

class Hero2 {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  attack() {
    console.log(`${this.name} atacou!!`)
  }
}

const hero2 = new Hero2('Homem Aranha', 50)
hero2.attack()

class Hero3 {
  static getBirthYear() {
    return 2022 - 22
  }
}

const birthYear = Hero3.getBirthYear()
console.log(birthYear)