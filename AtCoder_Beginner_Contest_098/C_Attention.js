var lines = []; var ans = Infinity;
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
})

rl.on('close', function () {
    var N = Number(lines[0]);
    var S = lines[1].split("");

    // 一番左端の人がリーダだったケースを考える
    // 東向いている人は，全員西向きにする
    var result = 0;
    for (var string of S) { result += (string === "E" ? 1 : 0) }

    // リーダを変えて考える．リーダを東向きに一人ずつずらしていく
    for (var i = 0; i < N; i++) {
        // 一つ前のリーダが西を向いていたら，方向を変える人が1人増える
        result += (S[i - 1] === "W" ? 1 : 0)

        // 現在のリーダーがが東を向いていたら，方向を変える人間が1人減る
        result -= (S[i] === "E" ? 1 : 0)

        ans = Math.min(ans, result);
    }

    console.log(ans);

});