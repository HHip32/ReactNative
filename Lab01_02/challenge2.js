datasets = [
  {
    Mark :{ weight:78, height:1.69 },
    John :{ weight:92, height:1.95 }
  },
  {
    Mark :{ weight:95, height:1.88 },
    John :{ weight:85, height:1.76 }
  }

]
// data test 1
data1 = datasets[0];
// data test 2
data2 = datasets[1];
function calculateBMI(weight, height) {
  return weight / (height * height);
}
// calculate BMI for data test 1
var markBMI = calculateBMI(data2.Mark.weight, data2.Mark.height).toFixed(1);
var johnBMI = calculateBMI(data2.John.weight, data2.John.height).toFixed(1);
// compare BMI
var markHigherBMI = markBMI > johnBMI;
// print result
if(markHigherBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
}else{
    console.log(`John's BMI (${johnBMI} is higher than Mark's (${markBMI})!`);
}