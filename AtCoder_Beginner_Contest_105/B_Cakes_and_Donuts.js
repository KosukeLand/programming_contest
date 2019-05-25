var lines = []; var result = 0;
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
})

rl.on('close', function () {

    var N = Number(lines[0].split(" ")[0])

    for (var i = 0; i < 100; i++) {
        for (var j = 0; j < 100; j++) {
            var ans = 4 * i + 7 * j;
            if (ans === N) { console.log("Yes"); return (0) }
        }
    }
    console.log("No")

});