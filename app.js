function selectedItem(value) {
    if (value === "disable") {
        document.querySelector(".title").style.display = "none";
    } else if (value === "enable") {
        document.querySelector(".title").style.display = "block";
    }
}

function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
    document.getElementById("myText").value = '';
}

var counter = 0;
var takeNumber = document.getElementById("submitBtn");
takeNumber.addEventListener("click", function() {
    if (document.getElementById("number").value === '') {
        counter = 0;
    } else {
        counter = parseInt(document.getElementById("number").value);
        document.getElementById("counter").innerHTML = counter;
    }
});

var addition = document.getElementById("add");
addition.addEventListener("click", function() {
    counter = counter + 1;
    document.getElementById("counter").innerHTML = counter;
});

var subtract = document.getElementById("subtract");
subtract.addEventListener("click", function() {
    if (counter >= 1) {
        counter = counter - 1;
        document.getElementById("counter").innerHTML = counter;
    }
});