class Numbers {
    constructor(numbers) {
        this.numbers = numbers
    }

    operation(operator) {
        let result = null
        for (let index = 0; index < this.numbers.length; index++) {
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
}

const arrayOfNumbers = [
    new Numbers([1, 2, 3, 4, 5]),
    new Numbers([6, 7, 8, 9, 10]),
    new SameNumbers(2, 10),
]

const mapOfFunctions = [
    sum, product, max, min,
]

arrayOfNumbers.forEach(runAllOperations)

function runAllOperations(item) {
    mapOfFunctions.forEach(functionItem =>
        console.log(item.operation(functionItem))
    )
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

function sum(result, current) {
    if (result === null) result = 0
    return result + current
}

function product(result, current) {
    if (result === null) result = 1
    return result * current
}
