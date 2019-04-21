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

    var start = Array(26).fill(-1);
    var goal = Array(26).fill(-1);

    for (var i = 0; i < len; i++) {
        var a = S.charCodeAt(i) - 97;
        var b = T.charCodeAt(i) - 97;
    
        if (start[a] !== -1 || goal[b] !== -1) {
            if (start[a] !== b || goal[b] !== a) {
                console.log("No"); return (0);
            }
        }
        else {
            start[a] = b; goal[b] = a;
        }
    }
    console.log("Yes");
});