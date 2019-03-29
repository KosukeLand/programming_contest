var line;
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    line = x;
})

rl.on('close', function () {
    var lines = line.split("");
    var right = 0; var left = 0;
    var len = lines.length;

    // しゃくとり法
    for (var left = 0; left < len; left++) {
        // "W"が出現したら
        if (lines[left] === "W") {
            // "W"の出現がなくなるまで，rightをカウントアップ
            while (lines[right + 1] === "W") { right++; }
            right++;

            // "W"の後に"A"が出現した場合，"WWW...WA" ==> "ACC...CC"に書き換え
            if (lines[right] === "A") {
                lines[left] = "A";
                for (var j = left + 1; j <= right; j++) { lines[j] = "C"; }
            }
            // left === rightの状態に
            left = right - 1;
        }
        // "W"が出現していない
        else { right++; }
    }

    console.log(lines.join(""));
});