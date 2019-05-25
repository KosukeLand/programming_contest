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
    var s = lines[0].split("");
    var t = lines[1].split("");

    s.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    t.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));

    for (var i = 0; i < Math.min(s.length, t.length); i++) {
        if (s[i].charCodeAt(0) > t[i].charCodeAt(0)) { console.log("No"); return (0) }
        if (s[i].charCodeAt(0) < t[i].charCodeAt(0)) { console.log("Yes"); return (0) }
    }
    if (s.length < t.length) { console.log("Yes"); }
    else { console.log("No"); }
});