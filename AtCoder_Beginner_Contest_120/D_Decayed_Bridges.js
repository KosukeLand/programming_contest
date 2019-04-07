var lines = [];

var N, M;
var par, tree;

var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var tmp = lines.shift();
    N = Number(tmp.split(" ")[0]);
    M = Number(tmp.split(" ")[1]);

    // 根
    par = Array(N + 1);

    // 木のノード数(同一グループの島数)
    tree = Array(N + 1);

    var a, b;
    var result = Array(M);

    // 橋をかける可能性があるパターン
    result[M - 1] = (N * (N - 1)) / 2;

    // 木の初期化
    init();

    for (var i = M - 1; i >= 1; i--) {
        tmp = lines[i].split(" ");

        a = Number(tmp[0]) - 1;
        b = Number(tmp[1]) - 1;

        // 島aと島bが同一グループでないなら
        if (!same(a, b)) {
            // 根を調査
            var ra = root(a); var rb = root(b);

            // 橋があることで，行き来できる島の数を計算
            var y = tree[ra] * tree[rb];

            // 島を同一グループ化する
            unit(a, b);

            // 不便さを記録
            result[i - 1] = result[i] - y;
        }
        // 島aと島bが同一グループなら，橋を構築しても「不便さ」は変化しない
        else { result[i - 1] = result[i]; }
    }

    // 結果表示
    for (var i = 0; i < M; i++) { console.log(result[i]); }

});

function init() {
    for (var i = 0; i <= N; i++) { par[i] = i; tree[i] = 1; }
}

function root(x) {
    if (par[x] === x) { return (x) }

    par[x] = root(par[x]);
    return (par[x]);
}

function unit(x, y) {
    x = root(x); y = root(y);

    if (x !== y) {
        // ノードxの木の根をyとする
        par[x] = y;

        // 根がyの木のノード数は，木y と 木xの合計
        tree[y] = tree[y] + tree[x];

        //xを根とする木は消滅
        tree[x] = 0;
    }
}

function same(x, y) {
    if (root(x) === root(y)) { return (true); }
    return (false);
}