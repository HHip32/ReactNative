scores = [
    { dolphins: [44, 23, 71], koalas: [65, 54, 49] },
    { dolphins: [85, 54, 41], koalas: [23, 34, 27] }
]

// task 1
var calcAverage = function(score){
    return score.reduce((value, index) => value + index) / score.length;
}

// task 2
var avgOfDophinTeam = calcAverage(scores[0].dolphins)
var avgOfKoalaTeam = calcAverage(scores[0].koalas)
var avgOfDophinTeam1 = calcAverage(scores[1].dolphins)
var avgOfKoalaTeam1 = calcAverage(scores[1].koalas)

// task 3
var checkWinner = (avgDolhins, avgKoalas) => {
    if(avgDolhins > avgKoalas*2){
        console.log(`Dophins win (${avgDolhins} vs. ${avgKoalas})`)
    }else if (avgDolhins*2 < avgKoalas){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`)
    }else{
        console.log(`no team wins!`)
    }
}


checkWinner(avgOfDophinTeam,avgOfKoalaTeam)
checkWinner(avgOfDophinTeam1,avgOfKoalaTeam1)