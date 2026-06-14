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
/* WHY HIBA */

const reasons = [

"Because your smile feels genuine.",

"Because you make conversations easy.",

"Because I like talking to you.",

"Because you're always yourself.",

"Because your voice is comforting.",

"Because you make ordinary moments better.",

"Because I enjoy hearing about your day.",

"Because your energy is different.",

"Because you make me smile.",

"Because you're you."

];

function showReason(){

const randomReason =

reasons[
Math.floor(
Math.random()*reasons.length
)
];

document.getElementById(
"reasonBox"
).innerHTML = randomReason;

}
/* CAPSULES */

const capsules = {

1:`I know you're already smiling while opening this.

But honestly, seeing you happy is one of my favorite things.

Keep smiling.

The world already has enough serious people.

And by the way...

your smile is still undefeated.`,

2:`If you're opening this because you miss me...

Good.

Because that means I'm living rent free in your head.

Just remember one thing:

No matter how far we are,
you're still one of the first people I think about every day.

So until we talk again...

consider this a virtual hug.`,

3:`Hey.

I know not every day is easy.

And I know sometimes things feel heavier than they should.

But you've already survived every bad day you've had.

You'll survive this one too.

Drink water.

Rest.

And don't be too hard on yourself.

You deserve kindness too (ziad loves u btw).`,

4:`I don't know what the future looks like.

But I know one thing.

Out of all the people I could've met...

I'm happy I met you.

And sometimes the simplest truths
are the most important ones.`,

5:`Just in case your brain is overthinking again...

No.

I didn't forget you.

No.

I don't find you annoying.

No.

You're not bothering me.

And yes.

I still care about you more than you think.`,

6:`Congratulations.

You unlocked a secret message.

Reward:

1 hug

3 forehead kisses

17 hours of talking.

No refunds.

Official rules.`

};

function openCapsule(id){

document.getElementById(
"capsuleContent"
).innerText = capsules[id];

}
/* VOICE MESSAGE */

function playVoice(){

document
.getElementById(
"hiddenVideo"
)
.play();

}
const memories = [

"Remember when we talked for hours and didn't notice the time? 😭",

"One random message from you can change my whole mood.",

"The first time we started talking felt unexpectedly easy.",

"I still remember random details you probably forgot telling me.",

"Some conversations with you live rent free in my head."

];

function randomMemory(){

const random =
Math.floor(
Math.random()*memories.length
);

document.getElementById(
"memoryText"
).innerText =
memories[random];

}
