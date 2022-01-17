let num = [3,6,8,4,9,2]
num[6] = 7
num.push(10)


console.log(`${num}`)
console.log(num.length)

num.sort()
console.log(`${num}`)


for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}

console.log("teste for in")
for (let pos in num) {
    console.log(num[pos])
}

let pos = num.indexOf(8)
console.log(pos)