var lines = [];

var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var tmp = lines.shift();
    var n = Number(tmp.split(" ")[0]);
    var m = Number(tmp.split(" ")[1]);

    var city = Array(m);
    var result = "";

    for (var i = 0; i < m; i++) {
        tmp = lines[i].split(" ");
        city[i] = {
            "i": i,
            "P": Number(tmp[0]),
            "Y": Number(tmp[1]),
            "KenNum": "",
            "ShiNum": "",
        }
    }

    city.sort(function (a, b) {
        if (a.P < b.P) return -1;
        if (a.P > b.P) return 1;
        if (a.Y < b.Y) return -1;
        if (a.Y > b.Y) return 1;
        return 0;
    });

    var ken  = 1;
    var shi  = 1;
    var loop = 0;
    
    for (var i=0;i<m;i++) {
        if(ken === city[i].P) {
            city[i].KenNum = ken.toString();
            loop = 6 - ken.toString().length;

            for (var k = 0; k < loop; k++) { city[i].KenNum = "0" + city[i].KenNum; }

            city[i].ShiNum = shi.toString();
            loop = 6 - shi.toString().length;

            for (var k = 0; k < loop; k++) { city[i].ShiNum = "0" + city[i].ShiNum; }
            shi++;
        }
        else{ken++; shi=1; i--;}
    }
    city.sort(function(a,b){return(a.i-b.i)});
    for (var i=0;i<m;i++) {
        console.log(city[i].KenNum+city[i].ShiNum);
    }
});