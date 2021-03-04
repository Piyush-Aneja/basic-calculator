console.log("start");

function ResultClick() {
    var str = document.getElementById("res").value;
    console.log("exp=", str);
    document.getElementById("res").value += "=" + eval(str);
    console.log(eval(str));
}

function Reset() {
    document.getElementById("res").value = "";
}

function Clear() {
    exp = document.getElementById("res").value.slice(0, -1);
    console.log("clear:", document.getElementById("res").value);
    document.getElementById("res").value = exp;
}


function getVal(e) {
    res.value += e
}


