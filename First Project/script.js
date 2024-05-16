var timer = 60;
var score = 0;
var hitrn = 0;

function getNewHit(){
   hitrn = Math.floor(Math.random() *10);
   document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
    var clutter = "";

for(var i=1; i<208; i++){
    var rn =Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runtimer(){
    var timerint = setInterval(function(){
        if (timer > 0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = "<h1>Game Over!!!</h1>";
        }
    }, 1000);
}

function incresescore(){
    score += 10 ;       
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm")
.addEventListener("click", function(dets){ 
    var Clickednum = Number(dets.traget.textContent);
    if(Clickednum === hitrn){
        incresescore();
        makeBubble(); 
        getNewHit();
    }
});

makeBubble();
runtimer();
getNewHit();