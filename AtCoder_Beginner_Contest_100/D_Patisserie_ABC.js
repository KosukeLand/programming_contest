var lines = [];
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (x) => {
    lines.push(x);
});

rl.on('close', () => {
    var N = Number(lines[0].split(" ")[0]);
    var M = Number(lines[0].split(" ")[1]);

    lines.shift();

    var xyz = lines.map(i => i.split(" ").map(i => Number(i)));
    var ans = 0; 

    // 0:プラス側に最大,  1:マイナス側に最大
    for (var i = 0; i < 2; i++) {

        for (var j = 0; j < 2; j++) {

            for (var k = 0; k < 2; k++) {
                var cake = Array(N).fill(0);
                for (var index = 0; index < N; index++) {
                    var x = (i === 0 ? xyz[index][0] : xyz[index][0] * (- 1));
                    var y = (j === 0 ? xyz[index][1] : xyz[index][1] * (- 1));
                    var z = (k === 0 ? xyz[index][2] : xyz[index][2] * (- 1));

                    cake[index] += x + y + z;
                }
                cake.sort((a, b) => b - a)

                var result = 0;
                for (var index = 0; index < M; index++) { result += cake[index] }
                ans = Math.max(ans, result);
            }
        }
    }
    console.log(ans)
});