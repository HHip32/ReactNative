scores = [
    { dolphins: [96, 108, 89], koalas: [88, 91, 110] },
    { dolphins: [97, 112, 101], koalas: [109, 95, 123] },
    { dolphins: [97, 112, 101], koalas: [109, 95, 106] }
]
var score1 = scores[0];
var score2 = scores[1];
var score3 = scores[2];

var dolphinScrore1 = score1.dolphins;
var koalasScrore1 = score1.koalas;

var dolphinScrore2 = score2.dolphins;
var koalasScrore2 = score2.koalas;

var dolphinScrore3 = score3.dolphins;
var koalasScrore3 = score3.koalas;

function calAverage(score) {
    let sum = score.reduce((a, b) => a + b, 0);
    return sum / score.length;
}
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas && avgDolphins >= 100) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >avgDolphins && avgKoalas >= 100) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else if (avgDolphins === avgKoalas) {
        console.log(`It's a draw (${avgDolphins} vs. ${avgKoalas})`);
    } else {
        console.log(`No team wins`);
    }
}
var avgDolphins = calAverage(dolphinScrore3).toFixed(2);
var avgKoalas = calAverage(koalasScrore3).toFixed(2);
console.log(checkWinner(avgDolphins, avgKoalas));