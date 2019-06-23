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
    var tmp_1 = lines.shift().split(" ");
    var N = Number(tmp_1[0]);
    var K = Number(tmp_1[1]);

    var v = lines[0].split("");

    var Nums = [];
    var now = 1;
    var cnt = 0;

    // 1-0-1-0-1
    for (var i = 0; i < N; i++) {
        if (v[i] === now.toString()) { cnt++; }
        else {
            Nums.push(cnt);
            now = 1 - now; // 0-1反転
            cnt = 1;
        }
    }

    // cntが0でなければ，配列に加える
    if (cnt != 0) { Nums.push(cnt); }

    // 1-0-1-0-...-1のような配列を用意する
    if (Nums.length % 2 === 0) { Nums.push(0); }



    var sum = Array(Nums.length + 1).fill(0);
    for (var i = 0; i <= Nums.length; i++) {
        if (i === 0) { sum[i] = 0; }
        else {
            sum[i] += sum[i - 1] + Nums[i - 1];
        }
    }
    console.log(Nums)
    console.log(sum)
    var cnt = 0; var max = 1;

    if (sum.length - 2 * K > 0) {
        for (var i = 0; i < sum.length - 2 * K; i = i + 2) {
            cnt = sum[i + 2 * K + 1] - sum[i];

            if (max < cnt + 1) { max = cnt; }
        }
    }
    else {
        max = sum[sum.length - 1];
    }
    console.log(max);
});
