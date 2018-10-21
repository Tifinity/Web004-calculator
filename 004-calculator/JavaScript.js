/*
    File: JavaScript.js
    Name: Tifinity/田皓
    ID: 17343105
    Mail: 1139390530@qq.com
*/

var result = "";
var last = "";
var inc1 = /^[\*|\/].+/;
var inc2 = /.+[\*|\/|\+|\-]$/;
var inc3 = /^[\+|\-|\*|\/|\.]*$/;
var re = /\.(\d*?)(9|0)\2{5,}(\d{1,5})$/;

function init() {
    document.getElementById('show').value = "0";
}

function show(num) {
    if(num.match(inc3) && last.match(inc3)) return;
    if(result[0] == '0' && result[1] != '.' && num != '.' ) return;
    result += num;
    last = num;
    document.getElementById('show').value = result;
}

function equal() {
    if(result.match(inc1) || result.match(inc2) || result.match(inc3)) {
        alert("·~· Input error ·~·");
        return;
    }
    result = eval(result);
    var match = string.match(re);
    if(match != null){
        result = result.toFixed(match[1].length);
    }
    if (result.length == 20) {
        alert("·~· Too long to show ·~·");
        return;
    }
    document.getElementById('show').value = result;
}

function clean(){
    result = "";
    document.getElementById('show').value = "0";
}

function del() {
    result = result.substr(0, result.length-1);
    document.getElementById('show').value = result;
    if(result == ""){
        document.getElementById('show').value = "0";
    }
}

