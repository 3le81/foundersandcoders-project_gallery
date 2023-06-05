function documt() {
    document.getElementById("document").innerHTML = "This page was created for showing my Document Page on CSS";
}

function landing() {
    document.getElementById("landing").innerHTML = "This page was created for showing my historic page about Julius Caesar";
}

function historic() {
    document.getElementById("historic").innerHTML = "This page was created for showing my historic page about Julius Caesar";
}
function restaurant() {
    document.getElementById("restaurant").innerHTML = "This page was created for showing my project for an italian restaurant";
}
function hobby() {
    document.getElementById("hobby").innerHTML = "This Hobby page is one of my projects for Founders and Coders";
};

function game() {
    document.getElementById("game").innerHTML = "This page is my project for a toddlers game";
}


function about_me() {
    var x = document.getElementById("myself");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};