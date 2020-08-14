const arrayOfNumbers = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    Array(10).fill(2)
]

const mapOfFunctions = [
    sum, product, max, min,
]

arrayOfNumbers
    .map(it => mapOfFunctions
        .map(functionItem =>
            it.reduce(functionItem)))
    .flatMap(it => console.log(it))
    .forEach(it => console.log(it))

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
