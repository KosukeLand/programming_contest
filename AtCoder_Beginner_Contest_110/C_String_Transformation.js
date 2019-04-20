var lines = [];
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var S = lines[0]; var T = lines[1];
    var len = S.length;
    
    var alphabet = {}

    for (var i = 0; i < len; i++) {
        if (alphabet[S[i]] === undefined) {
            alphabet[S[i]] = { end: T[i] };
            alphabet[T[i]] = { end: S[i] };
        }
        else {
            if (alphabet[S[i]].end !== T[i]) {
                // console.log(alphabet);
                console.log("No"); return (0);
            }
        }
    }
    // console.log(alphabet);
    console.log("Yes");
});