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
data1 = datasets[0];
data2 = datasets[1];


function calculateBMI(weight, height) {
  return weight / (height * height);
}

var markBMI = calculateBMI(data1.Mark.weight, data1.Mark.height);
var johnBMI = calculateBMI(data1.John.weight, data1.John.height);

var markBMI1 = calculateBMI(data2.Mark.weight, data2.Mark.height);
var johnBMI1 = calculateBMI(data2.John.weight, data2.John.height);
var markHigherBMI = markBMI > johnBMI;
var markHigherBMI1 = markBMI1 > johnBMI1;

console.log(`Data 1: ${markHigherBMI}`);

console.log(`Data 2: ${markHigherBMI1}`);