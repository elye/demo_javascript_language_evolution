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

class SameNumbers extends Numbers {
    constructor(value, times) {
        super(Array(times).fill(value));
        this.value = value
        this.times = times
    }

    sumOf() {
        return this.value * this.times
    }

    productOf() {
        return Math.pow(this.value, this.times)
    }
}

const arrayOfNumbers = [
    new Numbers([1, 2, 3, 4, 5]),
    new Numbers([6, 7, 8, 9, 10]),
    new SameNumbers(2, 10),
]

for (let index = 0; index < arrayOfNumbers.length; index++) {
    console.log(arrayOfNumbers[index].sumOf())
    console.log(arrayOfNumbers[index].productOf())
}
