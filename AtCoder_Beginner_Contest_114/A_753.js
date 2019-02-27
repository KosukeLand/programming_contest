var line;
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line',function(x){
    line = x;
});

rl.on('close',function(){
    if(Number(line) === 7 || Number(line) === 5 || Number(line) === 3){
        console.log("YES");
    }
    else{
        console.log("NO");
    }
})
