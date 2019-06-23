var lines = [];
var A, B; var memo;
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    A = Number(lines[0].split(" ")[0]) - 1; A = A.toString().split("").map(i => Number(i));
    B = Number(lines[0].split(" ")[1]);     B = B.toString().split("").map(i => Number(i));


    // 方針：Bの禁止された数字の個数と(A-1)の禁止された個数をそれぞれ調べて， B - (A - 1)
    // ただし，javascriptの扱える整数以上の値を利用して計算する必要があるため，WAとなる．
    memo = Array(100).fill(0).map(i => i = Array(2).fill(0).map(i => i = Array(2).fill(0)));
    var a = dfs(0, 1, 0, A);

    memo = Array(100).fill(0).map(i => i = Array(2).fill(0).map(i => i = Array(2).fill(0)));
    var b = dfs(0, 1, 0, B);
    
    console.log(b - a);

});

// 桁DP
function dfs(k, tight, flag, x) {

    // メモ化
    if (memo[k][tight][flag]) { return (memo[k][tight][flag]) }

    // 一回でも4 or 9が出現していたら1，していなければ0
    if (x.length === k) { return (flag ? 1 : 0) }
    else {
        var res = 0;
        var r = (tight ? x[k] : 9);

        for (var i = 0; i <= r; i++) {
            if (i === 4 || i === 9) { res += dfs(k + 1, (tight && r === i ? 1 : 0), 1, x) }
            else { res += dfs(k + 1, (tight && r === i ? 1 : 0), flag, x) }
        }
    }
    memo[k][tight][flag] = res;
    return (memo[k][tight][flag])
}