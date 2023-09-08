var printForecast = (arr) => {
    const lenArr = arr.length
    var res = "";
    for(var i = 0; i < lenArr; i++){
        res += `... ${arr[i]}oC in ${i+1}days `
    }
    console.log(res + '...')
}
var data1 = [17, 21, 23]
var data2 = [12, 5, -5, 0, 4]
// task 1
printForecast(data1)
printForecast(data2)

// task 2
var printForecast2 = (arr) => {
    const lenArr = arr.length
    var res = "";
    for(var i = 0; i < lenArr; i++){
        const temp = arr[i];
        const days = i+1;
        const temString = `... ${temp}oC in ${days}days `;
        res += temString
    }
    console.log(res + '...')
}
printForecast2(data1)
printForecast2(data2)