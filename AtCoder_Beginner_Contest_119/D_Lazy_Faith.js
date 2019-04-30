var lines = [];
var a, b, q, s, t, x;

var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var A = Number(lines[0].split(" ")[0]);
    var B = Number(lines[0].split(" ")[1]);
    var Q = Number(lines[0].split(" ")[2]);
    var s = []; var t = []; var x = [];
    for (var i = 1; i < A + 1; i++) { s[i - 1] = Number(lines[i]); }
    for (var i = A + 1; i < B + A + 1; i++) { t[i - (A + 1)] = Number(lines[i]); }
    for (var i = B + A + 1; i < B + A + 1 + Q; i++) { x[i - (B + A + 1)] = Number(lines[i]); }

    s.sort((a, b) => a - b)
    t.sort((a, b) => a - b)

    console.log("---");


    for (var i = 0; i < x.length; i++) {

        // Binary-Search-1
        // 西と東の神社を検索
        var left = 0; var right = s.length - 1
        while (1) {

            var now_s = Math.floor((left + right) / 2);
            if (s[now_s] <= x[i] && x[i] <= s[now_s + 1]) { break; } // x[i]の両隣に寺院があるケース
            if (x[i] <= s[left]) { now_s = left; break } // x[i]の西にのみ神社があるケース
            if (s[right] <= x[i]) { now_s = right; break } // x[i]の東にのみ神社があるケース

            // 現在地よりも神社が西にあれば，，s[now_s]より東の神社を検索
            if (s[now_s] <= x[i]) { left = now_s; }
            // 現在地よりも神社が東にあれば，，s[now_s]より西の神社を検索
            else { right = now_s; }

        }

        // Binary-Search-2
        // 西と東の寺院を探索
        var left = 0; var right = t.length - 1
        while (1) {
            var now_t = Math.floor((left + right) / 2);
            if (t[now_t] <= x[i] && x[i] <= t[now_t + 1]) { break; } // x[i]の両隣に寺院があるケース
            if (x[i] <= t[left]) { now_t = left; break } // x[i]の西にのみ寺院あるケース
            if (t[right] <= x[i]) { now_t = right; break } // x[i]の東にのみ寺院があるケース

            // 現在地よりも神社が西にあれば，，s[now_s]より東の神社を検索
            if (t[now_t] <= x[i]) { left = now_t; }
            // 現在地よりも神社が東にあれば，，s[now_s]より西の神社を検索
            else { right = now_t; }

        }

        // x -> 西の神社 -> 西の寺院
        var a = Math.min((x[i] - s[now_s]) + (s[now_s] - t[now_t]), x[i] - s[now_s]);

        // x -> 西の神社 -> 東の寺院       
        var b = (x[i] - s[now_s]) + (t[now_t + 1] - s[now_s]);

        // x -> 西の寺院 -> 西の神社
        var c = Math.min((x[i] - t[now_t]) + (t[now_t] - s[now_s]), x[i] - t[now_t]);

        // x -> 西の寺院 -> 東の神社
        var d = (x[i] - t[now_t]) + (s[now_s + 1] - t[now_t]);

        // x -> 東の神社 -> 東の寺院
        var e = Math.min((s[now_s + 1] - x[i]) + (t[now_t + 1] - s[now_s + 1]), s[now_s + 1] - x[i]);

        // x -> 東の神社 -> 西の寺院
        var f = (s[now_s + 1] - x[i]) + (s[now_s + 1] - t[now_t]);

        // x -> 東の寺院 -> 東の神社
        var g = Math.min((t[now_t + 1] - x[i]) + (s[now_s + 1] - t[now_t + 1]), t[now_t + 1] - x[i]);

        // x -> 東の寺院 -> 西の神社
        var h = (t[now_t + 1] - x[i]) + (t[now_t + 1] - s[now_s]);
        console.log(a, b, c, d, e, f, g);
        console.log(Math.min(a, b, c, d, e, f, g));
    }
})
