
let filters_switch = document.querySelector("#filters_switch");
let filters_container = document.querySelector("#filters_container");
let isActive = true;
let eye = document.querySelector("#eye");
let isZoom = true;



filters_switch.addEventListener("click", showFilters);


function showFilters() {
    
    if (window.innerWidth <= 1020) {
        isActive ?   
        document.querySelector("#filters_container").style.display = "block" :
        document.querySelector("#filters_container").style.display = "none" ;
        isActive = !isActive;
    }
    else if (window.innerWidth > 1021) {
        isActive ?   
        gsap.to("#filters_container", {x:-300, ease: "power1.out", duration: 1}) :
        gsap.to("#filters_container", {x:0, ease: "power1.out", duration: 1}) ;
        isActive = !isActive;
    }
        
 
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
    
   document.querySelector("#jump").classList.add("specialMarge");
   document.querySelector("#jumpTwo").classList.add("specialMargeTwo");
    
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
});


document.querySelector("#blue").addEventListener("click", ()=>{
    divs.forEach (item => {
        item.querySelector(".hiddenSearch").textContent.toLowerCase().includes("blue") ? (item.style.display = "block") : (item.style.display = "none");
    })
});

document.querySelector("#green").addEventListener("click", ()=>{
    divs.forEach (item => {
        item.querySelector(".hiddenSearch").textContent.toLowerCase().includes("green") ? (item.style.display = "block") : (item.style.display = "none");
    })
});

document.querySelector("#white").addEventListener("click", ()=>{
    divs.forEach (item => {
        item.querySelector(".hiddenSearch").textContent.toLowerCase().includes("white") ? (item.style.display = "block") : (item.style.display = "none");
    })
});

document.querySelector("#yellow").addEventListener("click", ()=>{
    divs.forEach (item => {
        item.querySelector(".hiddenSearch").textContent.toLowerCase().includes("yellow") ? (item.style.display = "block") : (item.style.display = "none");
    })
});

document.querySelector("#red").addEventListener("click", ()=>{
    divs.forEach (item => {
        item.querySelector(".hiddenSearch").textContent.toLowerCase().includes("red") ? (item.style.display = "block") : (item.style.display = "none");
    })
});





function resizeImg() {  

    if (window.innerWidth <= 1020) {
        document.querySelector(".myPhoto").style.overflow = "hidden";

        isZoom ?
        document.querySelector("#pictures").style.transform = "scale(1.7)":
        document.querySelector("#pictures").style.transform = "scale(1.0)";
        isZoom = !isZoom;
    }
    else {
        isZoom ?
        document.querySelector("#pictures").style.transform = "scale(1.7)":
        document.querySelector("#pictures").style.transform = "scale(1.0)";
        isZoom = !isZoom;
    }
    
}


