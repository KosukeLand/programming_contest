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
    var regexStart = "^A[a-z]"
    var regexMiddle = "[a-z]*C[a-z]*"
    var regexEnd = "[a-z]$"
    
    var regex = new RegExp(`${regexStart}${regexMiddle}${regexEnd}`)
    // var regex = new RegExp('^A[a-z][a-z]*C[a-z]*[a-z]$')

    var S = lines[0]
    console.log(regex.test(S) ? "AC" : "WA");
});