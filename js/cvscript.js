
// Age counter
var myBirthday = new Date(1987, 2, 5);
var msecBD = Date.parse(myBirthday);
var currentDate = new Date();
var msecCD = Date.parse(currentDate)
var msecDiff = msecCD - msecBD
var countDate = new Date(msecDiff)
var zeroDate = new Date(0)
var myAge = countDate.getFullYear() - zeroDate.getFullYear()
document.getElementById('fullage').innerHTML = myAge;
// Changing photos
function switchPhoto1_2 () {
    document.getElementById("ph1").style.display = 'none',
    document.getElementById("ph2").style.display = '',
    document.getElementById("ph2").style.height = "",
    document.getElementById("ph2").style.borderRadius = ""
}
function switchPhoto2_3 () {
    document.getElementById("ph2").style.display = 'none',
    document.getElementById("ph3").style.display = '',
    document.getElementById("ph3").style.height = "",
    document.getElementById("ph3").style.borderRadius = ""   
}
function switchPhoto3_1 () {
    document.getElementById("ph3").style.display = 'none',
    document.getElementById("ph1").style.display = '',
    document.getElementById("ph1").style.height = "",
    document.getElementById("ph1").style.borderRadius = ""   
}
// Resizing photos onmouseon
var s = "";
if (window.innerWidth > 600) { 
    s = 121
} else { 
    s = 100
};

function bigPhoto1 () {
    var elem = document.getElementById("ph1");
    var size = s;
    var int = setInterval(frame, 1);
    function frame() {
        if (size == s*2) {
            clearInterval(int);
        } else {
            size++;
            elem.style.height = size + "%";
            elem.style.borderRadius = size + "px";
        }
    }
}
function littlePhoto1 () {
    var elem = document.getElementById("ph1");
    var size = s*2;
    var int = setInterval(frame, 1);
    function frame() {
        if (size == s) {
            clearInterval(int);
        } else {
            size--;
            elem.style.height = size + "%";
            elem.style.borderRadius = size + "px";
        }
    }
}
function bigPhoto2 () {
    var elem = document.getElementById("ph2");
    var size = s;
    var int = setInterval(frame, 1);
    function frame() {
        if (size == s*2) {
            clearInterval(int);
        } else {
            size++;
            elem.style.height = size + "%";
            elem.style.borderRadius = size + "px";
        }
    }
}
function littlePhoto2 () {
    var elem = document.getElementById("ph2");
    var size = s*2;
    var int = setInterval(frame, 1);
    function frame() {
        if (size == s) {
            clearInterval(int);
        } else {
            size--;
            elem.style.height = size + "%";
            elem.style.borderRadius = size + "px";
        }
    }
}
function bigPhoto3 () {
    var elem = document.getElementById("ph3");
    var size = s;
    var int = setInterval(frame, 1);
    function frame() {
        if (size == s*2) {
            clearInterval(int);
        } else {
            size++;
            elem.style.height = size + "%";
            elem.style.borderRadius = size + "px";
        }
    }
}
function littlePhoto3 () {
    var elem = document.getElementById("ph3");
    var size = s*2;
    var int = setInterval(frame, 1);
    function frame() {
        if (size == s) {
            clearInterval(int);
        } else {
            size--;
            elem.style.height = size + "%";
            elem.style.borderRadius = size + "px";
        }
    }
}

// Call the annotation
function annotationCall() {
    document.getElementById("annotation").style.display = "";
}
function annotationCallBack() {
    document.getElementById("annotation").style.display = "none";
}

