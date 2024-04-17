const number = [14, 56, 55, 12, 33, 34, 10, 90, 45]
let par = []
let impar = []

for (let index = 0; index < number.length; index += 1) {
    const item = number[index]

    if (item % 2 === 0) {
        par.push(item * 10)

    } else {
        impar.push(item * 2)
    }
}
console.log(par)
console.log(impar)