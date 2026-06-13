const pages = document.querySelectorAll(".page");

let currentPage = 1;
const totalPages = 28;

/* LOADER */

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1800);

});

/* PAGE NAVIGATION */

function nextPage(pageNumber){

pages.forEach(page=>{

page.classList.remove("active");

});

document
.getElementById("page"+pageNumber)
.classList.add("active");

currentPage = pageNumber;

updateProgress();

window.scrollTo({
top:0,
behavior:"smooth"
});

}

/* PROGRESS */

function updateProgress(){

const percent =
(currentPage/totalPages)*100;

document.getElementById(
"progressBar"
).style.width = percent + "%";

document.getElementById(
"pageCounter"
).innerHTML =
"Page " + currentPage + " / " + totalPages;

}

updateProgress();

/* FLOATING HEARTS */

function createHeart(){

const heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "💖";

heart.style.left =
Math.random()*100 + "vw";

heart.style.bottom = "-30px";

heart.style.fontSize =
(15 + Math.random()*25)+"px";

document
.getElementById("hearts")
.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

}

setInterval(createHeart,700);

/* CARD ANIMATION */

document.addEventListener(
"click",
function(e){

if(e.target.classList.contains("card")){

e.target.style.transform =
"scale(1.08)";

setTimeout(()=>{

e.target.style.transform="";

},200);

}

}
);
/* OPEN POEMS */

function openPoem(number){

const poem =
document.getElementById(
"poem"+number
);

poem.classList.remove("hidden");

}
/* SCRATCH MEMORIES */

const scratchCanvases =
document.querySelectorAll(".scratchCanvas");

scratchCanvases.forEach(canvas=>{

const ctx =
canvas.getContext("2d");

canvas.width =
canvas.offsetWidth;

canvas.height =
canvas.offsetHeight;

ctx.fillStyle="#c77dff";

ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);

ctx.fillStyle="white";

ctx.font="24px Poppins";

ctx.textAlign="center";

ctx.fillText(
"Scratch Me ✨",
canvas.width/2,
canvas.height/2
);

let scratching=false;

function scratch(e){

if(!scratching) return;

const rect =
canvas.getBoundingClientRect();

const x =
(e.touches ?
e.touches[0].clientX :
e.clientX)
- rect.left;

const y =
(e.touches ?
e.touches[0].clientY :
e.clientY)
- rect.top;

ctx.globalCompositeOperation =
"destination-out";

ctx.beginPath();

ctx.arc(
x,
y,
25,
0,
Math.PI*2
);

ctx.fill();

}

canvas.addEventListener(
"mousedown",
()=> scratching=true
);

canvas.addEventListener(
"mouseup",
()=> scratching=false
);

canvas.addEventListener(
"mousemove",
scratch
);

canvas.addEventListener(
"touchstart",
()=> scratching=true
);

canvas.addEventListener(
"touchend",
()=> scratching=false
);

canvas.addEventListener(
"touchmove",
scratch
);

});
/* SAVE ANSWERS */

const answerBoxes =
document.querySelectorAll(".answerBox");

answerBoxes.forEach((box,index)=>{

const saved =
localStorage.getItem(
"answer"+index
);

if(saved){

box.value = saved;

}

box.addEventListener(
"input",
()=>{

localStorage.setItem(
"answer"+index,
box.value
);

}
);

});
/* COMPATIBILITY WHEEL */

const wheelResults = [

"❤️ Soulmate Energy",

"👑 Golden Pair",

"✨ Main Characters",

"😂 Chaos Duo",

"🌸 Best Duo"

];

function spinWheel(){

const wheel =
document.getElementById("wheel");

const rotation =
3600 + Math.random()*2000;

wheel.style.transform =
`rotate(${rotation}deg)`;

setTimeout(()=>{

const result =
wheelResults[
Math.floor(
Math.random()*wheelResults.length
)
];

document.getElementById(
"wheelResult"
).innerHTML = result;

},4000);

}
