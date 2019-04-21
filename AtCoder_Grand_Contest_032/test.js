const startTime = Date.now(); // 開始時間

var A = Math.pow(10, 310);
var result = 0;

for (var i = 0; i < Math.log(A); i++) {
        result++;
    }

const endTime = Date.now(); // 終了時間

console.log((endTime - startTime)/1000+"s");