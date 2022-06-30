const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const navLink = document.querySelectorAll(".nav-link");
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");


const textArray = ["CS Student", "Coder", "Enthusiast", "Learner"];
const typingDelay = 100;
const erasingDelay = 90;
const newTextDelay = 500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

const open1=document.getElementById('open1');
const modal_container1 =document.getElementById("modal_container1");
const close1=document.getElementById('close1');

const open2=document.getElementById('open2');
const modal_container2 =document.getElementById("modal_container2");
const close2=document.getElementById('close2');
const ope3=document.getElementById('open3');
const modal_container3 =document.getElementById("modal_container3");
const close3=document.getElementById('close3');

function toggle(){
  var blur=document.getElementById('blur');

  blur.classList.toggle('active')

}

open1.addEventListener('click',()=>{
    modal_container1.classList.add("show");
});
 
close1.addEventListener('click',() =>{
    modal_container1.classList.remove('show');
});
open2.addEventListener('click',()=>{
    modal_container2.classList.add("show");
});
 
close2.addEventListener('click',() =>{
    modal_container2.classList.remove('show');
});
open3.addEventListener('click',()=>{
    modal_container3.classList.add("show");
});
 
close3.addEventListener('click',() =>{
    modal_container3.classList.remove('show');
});
   

burger.addEventListener("click", ()=> {
    ul.classList.toggle("show");
  });

  navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);  

function popuToggle(){
  const popup= document.getElementById("popup");
  popup.classList.toggle("active")
}

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 50);
});

//js for swipe animation(trial)

const swiper = new Swiper(".projects", {
  loop:true,
  slidesPerView: "auto",
  speed: 07000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true
  
})

