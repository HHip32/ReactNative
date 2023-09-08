var calTip = (money) => {return (money > 50 && money < 300) ? money * 0.15 : money * 0.2};
var bills = [125, 555, 44];
var tip = calTip(bills[0]);
console.log(`“The bill was ${bills[0]}, the tip was ${tip}, and the total value ${bills[0] + tip}`);