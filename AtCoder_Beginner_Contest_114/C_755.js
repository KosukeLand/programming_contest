var line;
var moji;
var result = 0;

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
    if(moji.length<3){console.log(0);}
    else{
        dfs(0,[]);
        console.log(result);
    }
});

function dfs(n,comb){
    if(n === moji.length){calc(comb); return(0);}

    // 入力値と同桁 かつ "7","5","3","0"のみを含む数の全パターン探索
    comb[n]=0; dfs(n+1,comb);
    comb[n]=3; dfs(n+1,comb);
    comb[n]=5; dfs(n+1,comb);
    comb[n]=7; dfs(n+1,comb);
}

function calc(comb){
    var num = "";

    // "7","5","3"の出現回数をカウントするカウンタ
    var counter_3=0;
    var counter_5=0;
    var counter_7=0;
    
    // 357077等、途中桁に0を含む数を除去するためのフラグ
    var flag = false;

    comb.forEach(function(x){num += x;});
    num = Number(num);

    if(num <= Number(line)){
        for(var i=0;i<moji.length;i++){
            if(comb[i]===3){counter_3++; flag=true;}            
            else if(comb[i]===5){counter_5++; flag=true;}            
            else if(comb[i]===7) {counter_7++; flag=true;} 
            else{if(flag===true){counter_3=0;counter_5=0;counter_7=0; break;}}
        }
        //console.log(comb,counter_3,counter_5,counter_7);
        if(counter_3 >=1 && counter_5>=1 && counter_7>=1){result++;}
    }
}  
