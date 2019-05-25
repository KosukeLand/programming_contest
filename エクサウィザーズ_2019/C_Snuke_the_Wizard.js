var lines = [];

var readline = require('readline');
var NQ; var S; var td
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
})

rl.on('close', function () {
    NQ = lines[0].split(" ").map(i => Number(i));
    S = lines[1];

    lines.shift(); lines.shift();

    td = lines.map(i => i.split(" "));

    // ゴーレムが落ちる時は，ゴーレムの座標が-1 or S.length+1のとき
    var x = Math.floor(binary_search(-1, S.length, "L"));
    var y = Math.ceil(binary_search(-1, S.length, "R"));
    
    console.log(NQ[0] - (x + 1) - (NQ[0] - y));
});

// direct : 右から落ちる or 左から落ちる
function binary_search(left, right, direct) {

    var center = (left + right) / 2;

    while (left + 1 < right) {

        var N = NQ[0], Q = NQ[1]
        var flag = false;

        center = Math.floor(center);


        for (var i = 0; i < Q; i++) {
            var t = td[i][0], d = td[i][1];

            // 一致したらcenter座標のゴーレムを動かす
            if (S[center] === t) { d === "L" ? center-- : center++; }

            // 左から落ちる
            if (center === -1) {
                left = Math.floor((left + right) / 2);
                center = (left + right) / 2;
                flag = true; break;
            }

            // 右から落ちる
            if (N === center) {
                right = Math.floor((left + right) / 2);
                center = (left + right) / 2;
                flag = true; break;
            }
        }

        // どちらからも落ちない
        if (flag === false) {
            // 左から落ちるゴーレムを探索したい時
            if (direct === "L") {
                right = Math.floor((left + right) / 2);
                center = (left + right) / 2;
            }

            // 右から落ちるゴーレムを探索したい時
            else {
                left = Math.floor((left + right) / 2);
                center = (left + right) / 2;
            }
        }
    }
    
    return (center)
}