let findTipPercent = function (total , tipPercent = .2) {
    return total * tipPercent
}

// adding a new line and removing the previous print

let tip = findTipPercent(20, .10)
console.log(tip)