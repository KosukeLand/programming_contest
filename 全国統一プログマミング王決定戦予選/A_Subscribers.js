lines = [];
readline = require("readline");

rl = readline.createInterface({
  input: process.stdin,
  output:process.stdout
});

rl.on('line',function(x){
  lines.push(x);
})

rl.on('close',function(){
  var n = Number(lines[0].split(" ")[0]);
  var a = Number(lines[0].split(" ")[1]);
  var b = Number(lines[0].split(" ")[2]);

  var max = (a < b)? a : b;
  var min = (n < (a+b))? a+b-n : 0;

  console.log(max,min);

})
