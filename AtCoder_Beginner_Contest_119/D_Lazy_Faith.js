var lines = [];
var a, b, q, s, t, x;

var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var A = Number(lines[0].split(" ")[0]);
    var B = Number(lines[0].split(" ")[1]);
    var Q = Number(lines[0].split(" ")[2]);
    var S = []; var T = []; var X = [];

    for (var i = 1; i < A + 1; i++) { S[i - 1] = Number(lines[i]); }
    for (var i = A + 1; i < B + A + 1; i++) { T[i - (A + 1)] = Number(lines[i]); }
    for (var i = B + A + 1; i < B + A + 1 + Q; i++) { X[i - (B + A + 1)] = Number(lines[i]); }

    var ans = Infinity;

    /* ------ 処理 ------ */


    // 全てのスタート地点に対して探索
    for (var i = 0; i < Q; i++) {

        for (var j = 0; j < 2; j++) {
            if (j === 0) { a = S, b = T } // 神社に行った後，寺院に行く
            else { a = T, b = S }         // 寺院に行った後，神社に行く

            // 2(左 or 右) * 2(神社 * 寺院)の4通り探索
            for (var k = 0; k < 2; k++) {

                var a_pos = binary_search(a, X[i]) + k; // 一番近くの神社 or 寺院を探索  / binary_searchはx地点の左側を返す．x地点の右側も探索したいので+k
                var ax = a[a_pos];　                    // 一番近くの神社 or 寺院の座標をセット

                if (ax === undefined) { break; }

                for (var l = 0; l < 2; l++) {
                
                    var b_pos = binary_search(b, ax) + l;// 一番近くの神社 or 寺院を探索  / binary_searchはx地点の左側を返す．x地点の右側も探索したいので+l
                    var bx = b[b_pos]                    // 一番近くの神社 or 寺院の座標をセット

                    if (bx === undefined) { break; }

                    var distance = Math.abs(X[i] - ax) + Math.abs(ax - bx);
                    ans = Math.min(ans, distance)

                }
            }
        }
        console.log(ans);
        ans = Infinity
    }

});

// 地点xの左隣にある神社，寺院を探索
function binary_search(v, x) {
    var ok = 0;
    var ng = v.length;

    while (1 < Math.abs(ok - ng)) {
        var mid = Math.floor((ok + ng) / 2);
        if (v[mid] <= x) ok = mid;
        else { ng = mid }
    }

    // 地点xの左隣を返す
    return (ok);
}
