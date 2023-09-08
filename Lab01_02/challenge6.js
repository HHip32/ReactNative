// task 1
var calcTip = (billValue) => {
    return (billValue > 50 && billValue < 300) ? 0.15*billValue : 0.20*billValue;
}
console.log(calcTip(100))
// task 2
var bills = [125, 555, 44]
// task 3
var tips = bills.map(calcTip)
// task 4
var total = bills.map((bill, index) => {
    return bill + tips[index];
});
console.log(bills)
console.log(tips)
console.log(total)