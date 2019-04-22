var lines = []; var result = "";
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
    var K = Number(lines[1]);
    var len = s.length;

    var s_code = Array(len).fill(0)
    
    // 文字列   をUTF-16コードに変換
    for (var i = 0; i < len; i++) { s_code[i] = s[i].charCodeAt(0); }

    for (var i = 0; i < len; i++) {
        // 最後の文字なら，残りの変換を全て実施
        if (i === len - 1) {
            K = K % 26;
            // K回変換した結果，"z"以上になってしまった場合，"a"に戻す処理を入れる
            s_code[i] + K > "z".charCodeAt(0) ? s_code[i] = 97 + s_code[i] + K - "z".charCodeAt(0) - 1 : s_code[i] += K;
        }

        // 最後の文字でないなら，当該文字を"a"にできるなら変換．できないなら変換しない
        else {
            if ("z".charCodeAt(0) - s_code[i] + 1 <= K && s_code[i] !== "a".charCodeAt(0)) { K -= "z".charCodeAt(0) - s_code[i] + 1; s_code[i] = "a".charCodeAt(0); }
        }

        // K回変換したら，終了
        if (K <= 0) { break };
    }
    
    // UTF-16から文字へ変換
    for (var i = 0; i < len; i++) { result += String.fromCharCode(s_code[i]); }
    
    console.log(result);
});