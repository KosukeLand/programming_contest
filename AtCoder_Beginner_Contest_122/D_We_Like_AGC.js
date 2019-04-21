var lines = [];
var dp = Array(101).fill(0);

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
    var MOD = Math.pow(10, 9) + 7;
    // A = 0, C = 1, G = 2, T = 3
    // ????....? N個の?が存在
    // AGC(021), ACG(012), GAC(201), A?GC(0?21), AG?C(02?1) はNG

    dp = dp.map(function (value, index, array) {
        array[index] = Array(4).fill(0);
        array[index].map(function (value, index, array) {

            array[index] = Array(4).fill(0);
            array[index].map(function (value, index, array) {

                array[index] = Array(4).fill(0);
                return (array[index]);
            });
            return (array[index]);
        });
        return (array[index]);
    });


    dp[0][3][3][3] = 1;

    // 文字数
    for (var len = 0; len < N; len++) {
        // 最後から3文字目
        for (var x = 0; x < 4; x++) {
            // 最後から2文字目
            for (var y = 0; y < 4; y++) {
                // 最後から1文字目
                for (var z = 0; z < 4; z++) {

                    for (var i = 0; i < 4; i++) {
                        if (y === 0 && z === 2 && i === 1) { continue; }
                        if (y === 0 && z === 1 && i === 2) { continue; }
                        if (y === 2 && z === 0 && i === 1) { continue; }
                        if (x === 0 && z === 2 && i === 1) { continue; }
                        if (x === 0 && y === 2 && i === 1) { continue; }

                        dp[len + 1][y][z][i] += dp[len][x][y][z];
                        dp[len + 1][y][z][i] %= MOD;
                    }
                }
            }
        }
    }
    var ans = 0;

    // 最後から3文字目
    for (var x = 0; x < 4; x++) {
        // 最後から2文字目
        for (var y = 0; y < 4; y++) {
            // 最後から1文字目
            for (var z = 0; z < 4; z++) {
                ans += dp[N][x][y][z];
                ans %= MOD;
                console.log(ans);
            };
        };
    };

    console.log(ans);
});