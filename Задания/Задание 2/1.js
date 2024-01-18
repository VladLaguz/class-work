const fruits = ['kiwi', 'apple', 'orange', 'kiwi', 'apple', 'kiwi']
const fruitsUnique = Array.from(new Set(fruits))

console.log(fruitsUnique)

const myFruits = ['kiwi', 'apple', 'orange', 'kiwi', 'apple', 'kiwi']
const unique = {}

myFruits.forEach((item) => {
    unique [item] = true
})

console.log(unique)

const uniqueArray = Object.keys(unique)
console.log(uniqueArray)