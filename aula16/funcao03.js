let v = function(x) {
    return x*2
}

console.log(v(5))

function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
         fat *= c
    }
    return fat
}

console.log(fatorial(5))


function fatorialr(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorialr(n-1)
    }
}

console.log(fatorialr(5))