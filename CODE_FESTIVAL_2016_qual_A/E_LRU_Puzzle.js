var lines = [];
var result = "";
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var NM = lines[0].split(" ").map(value => Number(value));
    var Q = Number(lines[1]);
    var a = lines[2].split(" ").map(value => Number(value));

    var array = Array(NM[0]).fill(0).map((value, index) => { return (index + 1) });;

    var counter = Array(Q).fill(0);
    for (var i = 0; i < Q; i++) { counter[a[i]]++; }
    for (var i = 0; i < Q; i++) {
        if ((counter[a[i]] % NM[0] !== 0 && a[i] !== 1) || ) {
            console.log("No"); return (0);
        }
    }


});