// const
const name = 'Gatuk'
console.log(name)
// name = 'other'

// let
let age = 20
if (age === 20) {
  let age = 25
  let newAge = 25
  console.log(newAge)
}
console.log(age)
// console.log(newAge)

// Arrow function
// function increase(number) {
//   return number + 1
// }

const increase = (number) => {
  return number + 1
}

const result = increase(3)
console.log(result)

// String interpolation
// const text = 'Hello, ' + name + '!'
const text = `Hello, ${name}!`
console.log(text)

// Array destructuring assignment
const numbers = [1, 2, 3]
// console.log(numbers[0])
// console.log(numbers[1])
// console.log(numbers[2])
const [a, b, c] = numbers
console.log(a)
console.log(b)
console.log(c)

// Object destructuring assignment
const person = { nickname: 'John', fullname: 'John Doe' }
const { nickname, fullname } = person
console.log(nickname)
console.log(fullname)
console.log(person.nickname)
console.log(person.fullname)

// higher order function
// function ที่รับ function เป็น argument หรือ function ที่ return function
const add = (number1, number2) => {
  return number1 + number2
}
add(2, 1)
add(3, 1)
add(4, 1)
const add1 = (number) => {
  return add(number, 1)
}
console.log(add1(3))