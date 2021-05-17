import getClasses from './getClasses'

console.log("ran from index.js")
console.log("calling getClasses method")
getClasses()

const obj = { a: 'alpha', b: 'bravo' }
const newObj = { ...obj, c: 'charlie' }
console.log(newObj)