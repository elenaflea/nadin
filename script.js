
let filters_switch = document.querySelector("#filters_switch");
let filters_container = document.querySelector("#filters_container");
let isActive = true;
let eye = document.querySelector("#eye")



filters_switch.addEventListener("click", showFilters);


function showFilters() {
    
        isActive ?   
        gsap.to("#filters_container", {x:-300, ease: "power1.out", duration: 1}) :
        gsap.to("#filters_container", {x:0, ease: "power1.out", duration: 1}) ;
        isActive = !isActive;
 
}

people = document.querySelectorAll(".people");
animals = document.querySelectorAll(".animals");
abstract = document.querySelectorAll(".abstract");
geometric = document.querySelectorAll(".geometric");
wall = document.querySelectorAll(".wall");
flowers = document.querySelectorAll(".flowers");

black = document.querySelectorAll(".black");
blue = document.querySelectorAll(".blue");
green = document.querySelectorAll(".green");
red = document.querySelectorAll(".red");
white = document.querySelectorAll(".white");
yellow = document.querySelectorAll(".yellow");






// Word term search

const divs = document.querySelectorAll(".divs");

document.querySelector("#all").addEventListener("click", ()=>{
    document.querySelector("#people").style.opacity = "0.4";
    document.querySelector("#animals").style.opacity = "0.4";
    document.querySelector("#abstract").style.opacity = "0.4";
    document.querySelector("#geometric").style.opacity = "0.4";
    document.querySelector("#wall").style.opacity = "0.4";
    document.querySelector("#flowers").style.opacity = "0.4";
    document.querySelector("#all").style.opacity = "1";
    divs.forEach (item => {
        item.style.display = "block";
    })
});

document.querySelector("#people").addEventListener("click", ()=>{
    document.querySelector("#people").style.opacity = "1";
    document.querySelector("#animals").style.opacity = "0.4";
    document.querySelector("#abstract").style.opacity = "0.4";
    document.querySelector("#geometric").style.opacity = "0.4";
    document.querySelector("#wall").style.opacity = "0.4";
    document.querySelector("#flowers").style.opacity = "0.4";
    document.querySelector("#all").style.opacity = "0.4";
    divs.forEach (item => {
        item.querySelector(".hiddenSearch").textContent.toLowerCase().includes("people") ? (item.style.display = "block") : (item.style.display = "none");
    })
});

document.querySelector("#animals").addEventListener("click", ()=>{
    document.querySelector("#people").style.opacity = "0.4";
    document.querySelector("#animals").style.opacity = "1";
    document.querySelector("#abstract").style.opacity = "0.4";
    document.querySelector("#geometric").style.opacity = "0.4";
    document.querySelector("#wall").style.opacity = "0.4";
    document.querySelector("#flowers").style.opacity = "0.4";
    document.querySelector("#all").style.opacity = "0.4";
    divs.forEach (item => {
        item.querySelector(".hiddenSearch").textContent.toLowerCase().includes("animals") ? (item.style.display = "block") : 

        (item.style.display = "none") ;
    })
});

document.querySelector("#flowers").addEventListener("click", ()=>{
    document.querySelector("#people").style.opacity = "0.4";
    document.querySelector("#animals").style.opacity = "0.4";
    document.querySelector("#abstract").style.opacity = "0.4";
    document.querySelector("#geometric").style.opacity = "0.4";
    document.querySelector("#wall").style.opacity = "0.4";
    document.querySelector("#flowers").style.opacity = "1";
    document.querySelector("#all").style.opacity = "0.4";
    divs.forEach (item => {
        item.querySelector(".hiddenSearch").textContent.toLowerCase().includes("flowers") ? (item.style.display = "block") : (item.style.display = "none");
    })
})

document.querySelector("#abstract").addEventListener("click", ()=>{
    document.querySelector("#people").style.opacity = "0.4";
    document.querySelector("#animals").style.opacity = "0.4";
    document.querySelector("#abstract").style.opacity = "1";
    document.querySelector("#geometric").style.opacity = "0.4";
    document.querySelector("#wall").style.opacity = "0.4";
    document.querySelector("#flowers").style.opacity = "0.4";
    document.querySelector("#all").style.opacity = "0.4";
    divs.forEach (item => {
        item.querySelector(".hiddenSearch").textContent.toLowerCase().includes("abstract") ? (item.style.display = "block") + (item.style.marginTop = "0") : (item.style.display = "none");
    })
})

document.querySelector("#geometric").addEventListener("click", ()=>{
    document.querySelector("#people").style.opacity = "0.4";
    document.querySelector("#animals").style.opacity = "0.4";
    document.querySelector("#abstract").style.opacity = "0.4";
    document.querySelector("#geometric").style.opacity = "1";
    document.querySelector("#wall").style.opacity = "0.4";
    document.querySelector("#flowers").style.opacity = "0.4";
    document.querySelector("#all").style.opacity = "0.4";
    divs.forEach (item => {
        item.querySelector(".hiddenSearch").textContent.toLowerCase().includes("geometric") ? (item.style.display = "block") : (item.style.display = "none");
    })
})


document.querySelector("#wall").addEventListener("click", ()=>{
    document.querySelector("#people").style.opacity = "0.4";
    document.querySelector("#animals").style.opacity = "0.4";
    document.querySelector("#abstract").style.opacity = "0.4";
    document.querySelector("#geometric").style.opacity = "0.4";
    document.querySelector("#wall").style.opacity = "0.4";
    document.querySelector("#flowers").style.opacity = "0.4";
    document.querySelector("#all").style.opacity = "1";
    divs.forEach (item => {
        item.querySelector(".hiddenSearch").textContent.toLowerCase().includes("wall") ? (item.style.display = "block") : (item.style.display = "none");
    })
})






// Color search


document.querySelector("#black").addEventListener("click", ()=>{
    
    divs.forEach (item => {
        
        item.querySelector(".hiddenSearch").textContent.includes("black") ? (item.style.display = "block") +  console.log("black") : (item.style.display = "none");
    })
})


document.querySelector("#blue").addEventListener("click", ()=>{
    divs.forEach (item => {
        item.querySelector(".hiddenSearch").textContent.toLowerCase().includes("blue") ? (item.style.display = "block") : (item.style.display = "none");
    })
})

document.querySelector("#green").addEventListener("click", ()=>{
    divs.forEach (item => {
        item.querySelector(".hiddenSearch").textContent.toLowerCase().includes("green") ? (item.style.display = "block") : (item.style.display = "none");
    })
})

document.querySelector("#white").addEventListener("click", ()=>{
    divs.forEach (item => {
        item.querySelector(".hiddenSearch").textContent.toLowerCase().includes("white") ? (item.style.display = "block") : (item.style.display = "none");
    })
})

document.querySelector("#yellow").addEventListener("click", ()=>{
    divs.forEach (item => {
        item.querySelector(".hiddenSearch").textContent.toLowerCase().includes("yellow") ? (item.style.display = "block") : (item.style.display = "none");
    })
})

document.querySelector("#red").addEventListener("click", ()=>{
    divs.forEach (item => {
        item.querySelector(".hiddenSearch").textContent.toLowerCase().includes("red") ? (item.style.display = "block") : (item.style.display = "none");
    })
})

// fill empty place


const gridGap = 6;
const gridCols = 5;

const grid = document.querySelector(".tryContainer");
const cells = Array.prototype.slice.call(
  document.querySelectorAll(".try"),
  0
);
const empty = Array.prototype.slice.call(
  document.querySelectorAll(".empty"),
  0
);

let a = [];
let max = 0;

cells.map(e => {
  let y = e.offsetTop + e.offsetHeight;
  a.push(y);
});

// get bottom-most boxes
a.sort((a, b) => a - b);
a = a.slice(-gridCols);

// set minimum bottom box height
max = a[a.length - 1] + gridGap * 20;

// compute required row span for each filler cell
//for (i = 0; i < gridCols; i++) {
 // const box = document.createElement("div");
 // box.style.gridRowEnd = "span " + Math.round((max - a[i]) / gridGap);
//  box.classList = "try empty";
 // grid.appendChild(box);
//}