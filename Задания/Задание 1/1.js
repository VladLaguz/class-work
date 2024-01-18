const fruits = ['kiwi', 'apple', 'orange', 'kiwi', 'apple', 'kiwi']
const count = {}

fruits.forEach((f) => {
    if(!count[f]){
        count[f] = 1
    } else{
        count[f] ++
    }
})

console.log(count)