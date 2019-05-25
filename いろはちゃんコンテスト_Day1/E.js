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
    var N = Number(lines[0].split(" ")[0])
    var A = Number(lines[0].split(" ")[1])
    var B = Number(lines[0].split(" ")[2])

    if (B <= 0) { console.log(Math.floor(N - N / A)); }
    else {
        var D = lines[1].split(" ").map(i => Number(i));
        D.sort((a, b) => a - b)

        var day = 0; var date_i = 0;
        var ans = 0;

        while (day < N) {

            // 記念日デート
            if (D[date_i] - day <= A) { ans++; day = D[date_i]; date_i++; }

            // デートからA日後にデートする
            else if (day + A <= N) { ans++; day += A }

            // デートできなくなったら，終了
            else { break; }
            console.log(day)
        }
        console.log(N - ans)
    }
});