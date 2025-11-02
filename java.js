let c = document.querySelector("#typing"); // only the span
let text = "Fast & Tasty Menu"; // text to type
let n = 0;
let isDeleting = false;

function typing() {
    if (!isDeleting && n < text.length) {
        c.textContent = text.substring(0, n + 1);
        n++;
        setTimeout(typing, 120);
    } 
    else if (isDeleting && n > 0) {
        c.textContent = text.substring(0, n - 1);
        n--;
        setTimeout(typing, 80);
    } 
    else {
        isDeleting = !isDeleting;
        setTimeout(typing, 600);
    }
}

typing(); // <-- start it here

const circles = document.querySelectorAll('.c');
const movingDiv = document.getElementById('a');

const moveAmount = 100;

circles.forEach((circle, index) => {
  circle.addEventListener('click', () => {
    // move in X direction depending on which circle is clicked
    const x = (index + 1) * moveAmount;

    // move the div
    movingDiv.style.transform = `translateX(${x}px)`;
    movingDiv.style.transition = 'transform 0.4s ease';

    // reset all circle colors first
    circles.forEach(c => c.style.backgroundColor = '');

    // then set the clicked one to pink
    circle.style.backgroundColor = '#DC5902';
  });
});

// 
const navbar = document.querySelector('nav');
const section1 = document.getElementById('heros'); // remove the #
window.addEventListener("scroll",function(){
  if(window.scrollY>100){
    navbar.style.backgroundColor="black";
  }else{
     navbar.style.backgroundColor="transparent";
  }
})

