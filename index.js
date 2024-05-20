function bubble() {

    var bubble = "";

    for (let i = 0; i < 252; i++) {
        var ran = Math.floor(Math.random() * 10)
        bubble += `<div id="bub">${ran}</div>`;
        document.querySelector("#bottom").innerHTML = bubble;

    }
}

var timer = 60;
var ranHitVal = 0;
var score = 0;
function runTimer() {

    setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        } else {
            document.querySelector("#bottom").innerHTML = "";
            clearInterval(timer);
        }
    }, 1000)
}
function hitval() {
    ranHitVal = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = ranHitVal;
}

function hitScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


document.querySelector("#bottom").addEventListener("click", function (dets) {
    var num = Number(dets.target.textContent)
    if (num === ranHitVal) {
        hitScore();
        bubble();
        hitval();
    }
    else {
        if(score > 0) {

            score -= 10;
            document.querySelector("#scoreval").textContent = score;
        } 
        else
        {
            score = 0;
            document.querySelector("#scoreval").textContent = score;
        }
    }

})

bubble();
runTimer();
hitval();