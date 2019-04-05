var lines = [];
var readline = require('readline');
var N; var Q; var T; var D; var S;
var golem;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
})

rl.on('close', function () {
    var tmp = lines.shift().split(" ");
    N = Number(tmp[0]); Q = Number(tmp[1]);
    T = Array(Q); D = Array(Q);

    golem = {};
    S = lines.shift().split("");

    for (var i = 0; i < N; i++) {
        golem[i] = {
            now: i,
            alphabet: S[i],
        }
    }

    for (var i = 0; i < Q; i++) {
        tmp = lines[i].split(" ");
        T[i] = tmp[0]; D[i] = tmp[1];
    }
    // 左から飛び出すゴーレムは左から何番目？
    a = Math.ceil(binary_search(-1, N, "L"));

    // 右から飛び出すゴーレムは左から何番目？
    b = Math.ceil(binary_search(-1, N, "R"));

    // リターンされた値が -1 or Nの場合，落ちるゴーレムは0
    console.log(b - a)


});

function binary_search(left, right, M) {
    var ave = (left + right) / 2;
    var result = ave;

    if (left + 1 < right) {
        ave = Math.floor(ave);

        for (var i = 0; i < Q; i++) {

            if (T[i] === golem[ave].alphabet) {
                if (D[i] === "R") { golem[ave].now++; golem[ave].alphabet = S[golem[ave].now]; }
                else { golem[ave].now--; golem[ave].alphabet = S[golem[ave].now]; }
            }

            // 左から飛び出したら
            if (golem[ave].now < 0) {
                result = binary_search(ave, right, M);
                break;
            }
            // 右からから飛び出したら
            else if (N - 1 < golem[ave].now) {
                result = binary_search(left, ave, M);
                break;
            }
            // 右から飛び出さなかったら
            else if (i === Q - 1 && M === "R") {
                result = binary_search(ave, right, M);
            }
            // 左から飛び出さなかったら
            else if (i === Q - 1 && M === "L") {
                result = binary_search(left, ave, M);
            }
            else {

            }
        }
    }
    return (result);
}