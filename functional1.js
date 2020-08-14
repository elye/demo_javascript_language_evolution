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

    operation(operator) {
        let result = null
        for (let index = 0;index < this.numbers.length; index++) {
            result = operator(result, this.numbers[index])
        }
        return result
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
    console.log(arrayOfNumbers[index].operation(max))
    console.log(arrayOfNumbers[index].operation(min))
}

function max(result, current) {
    if (result === null) result = Number.MIN_SAFE_INTEGER
    if (result > current) return result
    else return current
}

function min(result, current) {
    if (result === null) result = Number.MAX_SAFE_INTEGER
    if (result < current) return result
    else return current
}


