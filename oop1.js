class Numbers {
    constructor(numbers) {
        this.numbers = numbers
    }

    sumOf() {
        let sumOfNumbers = 0
        for (let index = 0;index < this.numbers.length; index++) {
            sumOfNumbers += this.numbers[index]
        }
        return sumOfNumbers
    }

    productOf() {
        let productOfNumbers = 1
        for (let index = 0;index < this.numbers.length; index++) {
            productOfNumbers *= this.numbers[index]
        }
        return productOfNumbers
    }
}

const numbers1 = new Numbers([1, 2, 3, 4, 5])
console.log(numbers1.sumOf())
console.log(numbers1.productOf())
const numbers2 = new Numbers([6, 7, 8, 9, 10])
console.log(numbers2.sumOf())
console.log(numbers2.productOf())
