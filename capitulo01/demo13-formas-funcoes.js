function myFunction1(param1) {
  return `Eaeeee`
}

const myFunction2 = function () {
  return `Eaeeee 2`
}

const myFunction3 = () => `Eaeeeee 3`

const obj1 = {
  myFunction: () => `Opaaaa!`
}

obj1.myFunction()

const obj2 = {
  myFunction: (param) => {
    return `Eaeeeee ${param}`
  }
}