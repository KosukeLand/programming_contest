var lines = [];
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var S = lines[0].split("")
    var T = lines[1].split("")

    var len = S.length;
    var strategy_S = {};
    var strategy_T = {};

    // chokudai
    // redcoder

    // c <--> r  h <--> e  o <--> d  k <--> c  u <--> o  u <--> d
    // rhokudai  reokudai  redkuoai  redcuoai  redcouai  reucodai


    for (var i = 0; i < len; i++) {
        if (strategy_S[S[i]] !== undefined || strategy_T[T[i]] !== undefined) {
            if (strategy_S[S[i]] !== T[i] || strategy_T[T[i]] !== S[i]){
                console.log("No");
                return(0);
            }
        }
        else {
            strategy_S[S[i]] =T[i];
            strategy_T[T[i]] =S[i];
        }
    }
    console.log("Yes");
});