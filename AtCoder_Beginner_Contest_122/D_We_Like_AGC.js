var lines = [];
var MOD = Math.pow(10, 9) + 7


var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", function (x) {
    lines.push(x);
});

rl.on("close", function () {
    var N = Number(lines[0]);

    // AGC, ACG, GAC, A?GC, AG?C はNG
    // 0: A, 1: C, 2: G, 3: T
    var dp = Array(N + 1).fill(0).map(value => value = Array(4).fill(0).map(value => value = Array(4).fill(0).map(value => value = Array(4).fill(0))));
    
    
    dp[0][3][3][3] = 1;

    for (var i = 0; i < N; i++) {
        for (var w = 0; w < 4; w++) {
            for (var x = 0; x < 4; x++) {
                for (var y = 0; y < 4; y++) {

                    for (var z = 0; z < 4; z++) {
                        if (x === 0 && y === 2 && z === 1) { continue }
                        if (x === 0 && y === 1 && z === 2) { continue }
                        if (x === 2 && y === 0 && z === 1) { continue }
                        if (w === 0 && y === 2 && z === 1) { continue }
                        if (w === 0 && x === 2 && z === 1) { continue }

                        dp[i + 1][x][y][z] += dp[i][w][x][y];
                        dp[i + 1][x][y][z] %= MOD;
                    }
                }
            }
        }
    }

    var result = 0;
    for (var w = 0; w < 4; w++) {
        for (var x = 0; x < 4; x++) {
            for (var y = 0; y < 4; y++) {
                result += dp[N][w][x][y];
                result %= MOD
            }
        }
    }
    console.log(result);
});