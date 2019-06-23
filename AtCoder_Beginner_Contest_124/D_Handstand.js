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
    var N = Number(lines[0].split(" ")[0]);
    var K = Number(lines[0].split(" ")[1]);
    var S = lines[1].split("");

    // 配列圧縮(0-1-0-1-...-0)して，それぞれの数を計算
    var arr = []; var now = "0";

    if (S[0] !== now) { arr.push(0); }

    for (var i = 0; i < N; i++) {
        if (S[i] === now) { var t = arr.pop(); t === undefined ? t = 1 : t++; arr.push(t); }
        else {
            now = (1 - Number(now)).toString();
            arr.push(1);
        }
    }
    if (now === "1") { arr.push(0) }

    console.log(arr)

    var sum = []; sum.push(arr[0]);
    for (var i = 1; i < arr.length; i++) {
        var t = sum[sum.length - 1]; t += arr[i]; sum.push(t);
    }
    if (sum[0] !== 0) { sum.unshift(0) }
    console.log(sum)

    var ans = 0;

    if (sum.length - 2 * K < 0) { console.log(sum[sum.length - 1]) }
    else {
        for (var i = 0; i + 2 * K < sum.length; i++) {
            // 0から始まる
            if (i % 2 === 0) { var t = sum[i + 2 * K - 1] - sum[i] + 1 }
            // 1から始まる
            else { var t = sum[i + 2 * K] - sum[i] + 1 }

            ans = Math.max(ans, t);
            console.log(t)
        }
        console.log(ans);
    }
}); 
