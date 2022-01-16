function myFunction() {
  // code block
}

function whatDayIsToday() {
  return new Date()
}

function sum(num1, num2) {
  return num1 + num2
}

console.log(whatDayIsToday())

const num1 = 10
const num2 = 25
console.log(sum(num1, num2))

const employee1 = {
  name: 'Zezinho',
  discount: 0.2,
  totalSalary: 2000,
  liquidSalary: 0
}

const employee2 = {
  name: 'Mariazinha',
  discount: 0.1,
  totalSalary: 2000,
  liquidSalary: 0
}

// const employeeDiscount1 = employee1.totalSalary - (employee1.totalSalary * employee1.discount)
// console.log(employeeDiscount1)

// const employeeDiscount2 = employee2.totalSalary - (employee2.totalSalary * employee2.discount)
// console.log(employeeDiscount2)

function calculateDiscount(salary, discount) {
  return salary - (salary * discount)
}

employee1.liquidSalary = calculateDiscount(employee1.totalSalary, employee1.discount)
console.log(employee1.liquidSalary)

employee2.liquidSalary = calculateDiscount(employee2.totalSalary, employee2.discount)
console.log(employee2.liquidSalary)