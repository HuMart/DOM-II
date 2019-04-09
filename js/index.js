// Your code goes here
//mouseover and out

let navLogo = document.querySelector('.logo-heading');
navLogo.addEventListener("mouseover", (event) => event.target.style.transform = "scale(2)");
navLogo.addEventListener("mouseout", (event) => event.target.style.transform = "scale(1)");


//dblclick

let navTag = document.querySelector('.nav');
navTag.addEventListener('dblclick', (event) => event.target.style.backgroundColor = 'yellow');

//keydown and up

let body = document.querySelector('body');
body.addEventListener('keydown', (event) => event.target.style.backgroundColor = 'red');
body.addEventListener('keyup', (event) => event.target.style.backgroundColor = 'white');

//wheel

body.addEventListener('wheel', function alertMeOnce(){
    alert("SCROLING!!!!!");
    body.removeEventListener('wheel', alertMeOnce);
  });

// drag

let BusBanner = document.querySelector(".intro > img" );
BusBanner.addEventListener('drag' ,(event) => {
    event.target.style.transform = 'scale(0.75)'
})

let header2 = document.querySelectorAll('.home .text-content h2');
let buttons = document.querySelectorAll('.btn');

for (i = 0; i < header2.length; i++) {
    header2[i].addEventListener('select', function(e) {
        e.target.style.color = 'red';
        });
    }
 
for (i=0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
    event.target.style.background = 'red';
    event.target.style.color = 'green';
    body.classList.toggle('container-background');
    });
}
  


