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
    var tmp = lines.shift().split(" ");
    var N = Number(tmp[0]);
    var D = Number(tmp[1]);
    var K = Number(tmp[2]);

    var L = Array(D); var R = Array(D);
    var S = Array(K); var T = Array(K);

    for (var i = 0; i < D; i++) {
        tmp = lines.shift().split(" ");
        L[i] = Number(tmp[0]);
        R[i] = Number(tmp[1]);
    }
    for (var i = 0; i < K; i++) {
        tmp = lines.shift().split(" ");
        S[i] = Number(tmp[0]);
        T[i] = Number(tmp[1]);
    }
    
    // 民族数分だけループ
    for (var i = 0; i < K; i++) {
        // スタート位置をセット
        var now = S[i];

        // 移動日数分だけループ
        for (var j = 0; j < D; j++) {
            // 移動可能なら，最大限遠くへ移動すること
            // スタート街のインデックスと，ゴール街のインデックスを比較して，移動すべき方向を決定する
            if (L[j] <= now && now <= R[j]) { S[i] < T[i] ? now = R[j] : now = L[j]; }
            
            // 終了判定：移動距離(S[i]-T[i])よりも長距離移動した場合，移動完了とみなせる
            if (Math.abs(S[i] - T[i]) <= Math.abs(now - S[i])) { console.log(j + 1); break; }
        }
    }

});