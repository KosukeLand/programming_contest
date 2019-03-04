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

    par = Array(N + 1);
    tree = Array(N + 1);

    var a, b;
    var result = Array(M);
    result[M - 1] = (N * (N - 1)) / 2;

    init();

    for (var i = M - 1; i >= 1; i--) {
        tmp = lines[i].split(" ");

        a = Number(tmp[0]);
        b = Number(tmp[1]);

        if (!same(a, b)) {
            var ra = root(a);
            var rb = root(b);
            var y = tree[ra] * tree[rb];

            unit(a, b);

            result[i - 1] = result[i] - y;
        }
        else {
            result[i - 1] = result[i];
        }
    }

    for (var i = 0; i < M; i++) {
        console.log(result[i]);
    }
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
    x = root(x);
    y = root(y);

    if (x !== y) {
        par[x] = y;
        tree[y] = tree[y] + tree[x];
        tree[x] = 0;
    }
}

function same(x, y) {
    if (root(x) === root(y)) { return (true); }
    return (false);
}