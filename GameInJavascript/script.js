let hit = 0;
function gethit(){
    hit = Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent = hit
    
}

let score = 0;
function increaseScore(){
  score+=10;
 document.querySelector("#scoreVal").textContent = score;
}

function l() {
  let clutter = "";

  for (let i = 1; i <= 216; i++) {
    const c = Math.floor(Math.random() * 50);
    clutter += `<div class="bubble">${c}</div>`;
  }
  document.querySelector("#ptm").innerHTML = clutter;
}

let timer = 60;
function runtime() {
  setInterval(function() {
    if(timer > 0){
      timer--;
    document.querySelector("#timerval").textContent = timer;
    }else{
      clearInterval(runtime);
      document.querySelector("#ptm").innerHTML =`<h1>Game Over</h1>`;
    }
    
  }, 1000);
}

document.querySelector("#ptm")
.addEventListener("click", function(det){
  let clickNumber = (Number(det.target.textContent));
  if(clickNumber === hit){
    increaseScore();
    runtime();
    l();
    gethit();



  }
})
runtime();
l();
gethit();









