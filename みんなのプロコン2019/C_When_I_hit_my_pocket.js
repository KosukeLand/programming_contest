var lines = [];

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (x) {
  lines.push(x);
});

rl.on('close', function () {
  var k = Number(lines[0].split(" ")[0]);
  var a = Number(lines[0].split(" ")[1]);
  var b = Number(lines[0].split(" ")[2]);
  var biscuit = 1;


  // ビスケット -> コイン -> ビスケットで枚数が増加しないなら，ビスケットを叩き続ける
  if ((a + 2) >= b) { biscuit = biscuit + k; }

  else {
    for (var i=1; i<=k; i++) {

      // K回目の操作時コインを持っていないなら，K回目の操作はビスケットを叩いて増やす
      if (i === k) {
        biscuit = biscuit + 1;
        console.log("end");
      }

      // ビスケットを叩いてビスケットを増やす
      else if (biscuit < a) {
        biscuit = biscuit + a - 1;
        i = i + a - 2;

        //console.log(biscuit, i);
      }

      // ビスケットをコインに交換する -> コインをビスケットに交換する
      else {
        biscuit = biscuit + (b - a);
        i++;
        console.log(biscuit,i);
      }
    }
  }
  console.log(biscuit);
});
