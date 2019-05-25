var lines = [];

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on('line', function (x) {
    lines.push(x);
});

rl.on("close", function () {
    var N = Number(lines[0]);
    var V = lines[1].split(" ").map(i => Number(i));

    var even = {}; var odd = {}; var ans = 0;

    for (var i = 0; i < N; i++) {
        if (i % 2 === 0) { even[V[i]] === undefined ? even[V[i]] = 1 : even[V[i]]++ }
        else { odd[V[i]] === undefined ? odd[V[i]] = 1 : odd[V[i]]++ }
    }

    if (Object.keys(even).length === 1 && Object.keys(odd).length === 1 && V[0] === V[1]) { console.log(even[V[0]]) }
    else {
        var max_1 = [0];
        if (1 < Object.keys(even).length) {
            Object.keys(even).forEach((value) => {
                if (even[value] < max_1[0]) { ans += even[value] }
                else { ans += max_1[0]; max_1.unshift(even[value]); }
            })
        }

        var max_2 = [0];
        if (1 < Object.keys(odd).length) {
            Object.keys(odd).forEach((value) => {
                if (odd[value] < max_2[0]) { ans += odd[value] }
                else { ans += max_2[0]; max_2.unshift(odd[value]); }
            })
        }

        max_1.sort((a, b) => b - a)
        max_2.sort((a, b) => b - a)
        
        if (max_1[] === max_2) {

        }

        console.log(ans)
    }
});