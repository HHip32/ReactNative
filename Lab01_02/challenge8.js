// task 1
var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

// task 2
var tips = []
var totals = []

// task 3
var calcTip = (billValue) => {
    return (billValue > 50 && billValue < 300) ? 0.15*billValue : 0.20*billValue;
}
for (var bill of bills) {
    var tip = calcTip(bill);
    tips.push(tip);
    totals.push(tip + bill);
}
// console.log(bills)
// console.log(tips)
// console.log(totals)

var calcAverage = (arr) => {
    return arr.reduce((acc, value) => {
        return (acc + value) / arr.length
    })
}
var result = calcAverage(totals);
console.log(result.toFixed(2))