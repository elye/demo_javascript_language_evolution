const numbers1 = [1, 2, 3, 4, 5]
console.log(sumOfNumbers(numbers1))
console.log(productOfNumbers(numbers1))
const numbers2 = [6, 7, 8, 9, 10]
console.log(sumOfNumbers(numbers2))
console.log(productOfNumbers(numbers2))

function sumOfNumbers(numbers) {
    let sumOfNumbers = 0
    for (let index = 0;index < numbers.length; index++) {
        sumOfNumbers += numbers[index]
    }
    return sumOfNumbers
}

function productOfNumbers(numbers) {
    let productOfNumbers = 1
    for (let index = 0;index < numbers.length; index++) {
        productOfNumbers *= numbers[index]
    }
    return productOfNumbers
}

