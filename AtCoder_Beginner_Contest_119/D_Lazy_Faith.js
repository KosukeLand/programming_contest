var lines = [];
var a,b,q,s,t,x;

var readline=require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout,
});

rl.on('line',function(x){
    lines.push(x);
});

rl.on('close',function(){
    var tmp = lines.shift();
    a = Number(tmp.split(" ")[0]);
    b = Number(tmp.split(" ")[1]);
    q = Number(tmp.split(" ")[2]);

    s = Array(a);
    t = Array(b);
    x = Array(q);

    for(var i=0;i<a;i++){
        s[i] = lines.shift();
        s[i] = Number(s[i]);
    }
    s.sort(function(a,b){return(a-b);});
    
    for(var i=0;i<b;i++){
        t[i] = lines.shift();
        t[i] = Number(t[i]);
    }
    t.sort(function(a,b){return(a-b);});

    for(var i=0;i<q;i++){
        x[i] = lines.shift();
        x[i] = {
           start_location: Number(x[i]),
           minimum:Infinity,
        }
    }

    dfs(0,[]);
    for(var i=0;i<q;i++){console.log(x[i].minimum);}
});

function dfs(n,comb){
    if(2 === n){calc(comb);return(0);}
    
    var finish = a>b?finish=a:finish=b;
    for(var i=0;i<finish;i++){
        comb[n]=i;
        dfs(n+1,comb);
    }
}

function calc(comb){
    if(s[comb[0]] !== undefined && t[comb[1]] !== undefined){
        for(var i=0;i<q;i++){
            
            s_comb = Math.abs(x[i].start_location - s[comb[0]]);
            t_comb = Math.abs(x[i].start_location - t[comb[1]]);

            if((s[comb[0]] < x[i].start_location && x[i].start_location < t[comb[1]]) || t[comb[1]] < x[i] && x[i] < s[comb[0]]){
                if(s_comb < t_comb){result = s_comb*2 + t_comb;}
                else{result = s_comb + t_comb*2;}
            }
            else{s_comb > t_comb ? result = s_comb : result = t_comb;}
            
            if(result < x[i].minimum){x[i].minimum = result;}
        }
    }
}
