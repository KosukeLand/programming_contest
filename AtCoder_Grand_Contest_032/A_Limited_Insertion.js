var lines = [];
var N; var b = [];

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    N = Number(lines[0]);
    b = lines[1].split(" ").map(value => Number(value));
    var result = [];
    
    // 数列の要素数回ループする
    for (var i = 0; i < N; i++) {
        var target = -1;
        
        // 数列を検索し，削除する要素を決定する
        // 削除可能な要素は，b[j-1] === j となるb[j-1]
        for (var j = 1; j <= b.length; j++) {
            if (b[j - 1] === j) { target = j; }
        }
        
        //削除可能な要素があれば，b[j-1]を削除
        if (target !== -1) result.unshift(b.splice(target - 1, 1));
        
        // 削除可能な要素が無ければ，-1
        else { console.log(-1); return (0) }
    }
    // 結果表示
    for (var i = 0; i < result.length; i++)
        console.log(result[i].toString());
});