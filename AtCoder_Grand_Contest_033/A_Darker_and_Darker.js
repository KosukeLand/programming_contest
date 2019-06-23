function Main(lines) {
    lines = lines.split("\n");

    var tmp = lines[0].split(" ");
    var H = Number(tmp[0]);
    var W = Number(tmp[1]);

    var q = []; 
    var l = Array(H).map(i => i = Array(W))

    for (var i = 1; i <= H; i++) {
        l[i - 1] = lines[i].split("");
        for (var j = 0; j < W; j++) {
            if (l[i - 1][j] === "#") { q.push([i - 1, j]); }
        }
    }
    
    var ans = 0;

    while (q.length) {
        ans++;
        var len = q.length;

        for (var i = 0; i < len; i++) {
            var a = q.shift();
            var y = a[0], x = a[1];

            if (0 <= y + 1 && y + 1 < H) { if (l[y + 1][x] === ".") { l[y + 1][x] = "#"; q.push([y + 1, x]); } }
            if (0 <= y - 1 && y - 1 < H) { if (l[y - 1][x] === ".") { l[y - 1][x] = "#"; q.push([y - 1, x]); } }
            if (0 <= x + 1 && x + 1 < W) { if (l[y][x + 1] === ".") { l[y][x + 1] = "#"; q.push([y, x + 1]); } }
            if (0 <= x - 1 && x - 1 < W) { if (l[y][x - 1] === ".") { l[y][x - 1] = "#"; q.push([y, x - 1]); } }

        }
    }
    console.log(ans - 1);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
