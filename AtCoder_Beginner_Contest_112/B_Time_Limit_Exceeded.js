var lines =[];
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout,
});

rl.on('line',function(x){
    lines.push(x);
});

rl.on('close',function(){

    var tmp = lines.shift();
    var N = Number(tmp.split(" ")[0]);
    var T = Number(tmp.split(" ")[1]);
    var c,t;
    var result = Infinity;

    
    for(var i=0;i<N;i++){
        c=Number(lines[i].split(" ")[0]);
        t=Number(lines[i].split(" ")[1]);
        
        if(t<=T && c<result){result = c}
    }
    if(result != Infinity){console.log(result);}
    else{console.log("TLE");}
});