let amount = 1717

let numberOfTwenies = Math.floor(amount/20)
amount = amount- numberOfTwenies*20
let numberOfTens = Math.floor(amount/10)
amount = amount- numberOfTens*10
let numberOfFives  = Math.floor(amount/5)
amount = amount- numberOfFives*5
let numberOfOnes = Math.floor(amount/1)

let results = [numberOfTwenies,numberOfTens,numberOfFives,numberOfOnes]

console.log (numberOfTwenies)
console.log (numberOfTens)
console.log (numberOfFives)
console.log (numberOfOnes)
console.log (results)
