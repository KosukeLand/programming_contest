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

    var A = Number(lines[0].split(" ")[0]);
    var B = Number(lines[0].split(" ")[1]);

    if (A <= 8 && B <= 8) {
        console.log("Yay!");
    }
    else{
        console.log(":(");
    }

})