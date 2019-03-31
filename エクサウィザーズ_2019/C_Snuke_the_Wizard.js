var lines = [];
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
})

rl.on('close', function () {
    var tmp = lines.shift().split(" ");
    var N = Number(tmp[0]);
    var Q = Number(tmp[1]);
    var T = Array(Q); var D = Array(Q);
    var result = N;

    var golem = {};

    var S = lines.shift().split("");
    for (var i = 0; i < N; i++) {
        golem[i] = {
            now: i,
            alphabet: S[i],
        }
    }

    for (var i = 0; i < Q; i++) {
        tmp = lines[i].split(" ");
        T[i] = tmp[0];
        D[i] = tmp[1];
    }
    
    // ゴーレムを移動
    for (var i = 0; i < Q; i++) {
        if (D[i] === "L") {
            // T[i]上のゴーレムを全て左へ移動
            for (var j = 0; j < N; j++) {
                if (golem[j].alphabet === T[i]) { golem[j].now--; golem[j].alphabet = S[golem[j].now]; }
                // ゴーレムがマスよりも左側に移動した場合，ゴーレムは消滅
                if (golem[j].now < 0) { golem[j].now = NaN; result--; }
            }
        }
        else {
            // T[i]上のゴーレムを全て右へ動かす
            for (var j = 0; j < N; j++) {
                if (golem[j].alphabet === T[i]) { golem[j].now++; golem[j].alphabet = S[golem[j].now]; }
                // ゴーレムがマスよりも右側に移動した場合，ゴーレムは消滅
                if (N - 1 < golem[j].now) { golem[j].now = NaN; result--; }
            }
        }
    }

    console.log(result);
});