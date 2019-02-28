var lines = [];

var N, A, B, C;
var l, f
var result = Infinity;

var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (x) {
  lines.push(x);
});

rl.on('close', function () {

  var tmp = lines.shift();
  N = Number(tmp.split(" ")[0]);
  A = Number(tmp.split(" ")[1]);
  B = Number(tmp.split(" ")[2]);
  C = Number(tmp.split(" ")[3]);

  l = Array(N);
  f = Array(N);
  f.fill(Infinity);

  for (var i = 0; i < N; i++) { l[i] = Number(lines[i]); }

  console.log(dfs(0, 0, 0, 0));
});



function dfs(n, a, b, c) {
  if (n === N) {
    if (a === 0 || b === 0 || c === 0) { return (Infinity); }
    else {
      return(Math.abs(a - A) + Math.abs(b - B) + Math.abs(c - C));
    }
  }
  if(f[n]!==Infinity){
  //   console.log("f[n]",n,f[n]);    
  }
  var res_a = dfs(n + 1, a + l[n], b, c) + (a != 0 ? 10 : 0);    // l[i]をAに加える
  // console.log("res_a",n,a,b,c,res_a);    
  
  var res_b = dfs(n + 1, a, b + l[n], c) + (b != 0 ? 10 : 0);    // l[i]をBに加える
  // console.log("res_b",n,a,b,c,res_b);    
  
  var res_c = dfs(n + 1, a, b, c + l[n]) + (c != 0 ? 10 : 0);    // l[i]をCに加える
  // console.log("res_c",n,a,b,c,res_c); 

  var res_x = dfs(n + 1, a, b, c);                               // l[i]加えない
  // console.log("res_x",n,a,b,c,res_x); 


  f[n] = Math.min(res_a, res_b, res_c, res_x);
  // console.log(res_a, res_b, res_c, res_x,f[n]);
  return (f[n]);
}