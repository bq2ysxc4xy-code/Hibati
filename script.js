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
