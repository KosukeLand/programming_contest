var line;
var moji;
var result = Infinity;

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line',function(x){
    line = x;
});

rl.on('close',function(){
    
    moji=line.split("");
    for (var i=0;i<moji.length-2;i++){
        tmp = Number(moji[i]+moji[i+1]+moji[i+2]);
        tmp = Math.abs(tmp - 753);
        if(result>tmp){result = tmp;}
    }
    //dfs(0,[]);
    console.log(result);
});
