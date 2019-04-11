// Your code goes here
//mouseover and out

let navLogo = document.querySelector('.logo-heading');
navLogo.addEventListener("mouseover", (event) => event.target.style.transform = "scale(2)");
navLogo.addEventListener("mouseout", (event) => event.target.style.transform = "scale(1)");

//dblclick

let navTag = document.querySelector('.nav');
navTag.addEventListener('dblclick', (event) => {
   if(event.target.style.backgroundColor == 'yellow'){
       event.target.removeAttribute('style')
   }else{
    event.target.style.backgroundColor = 'yellow'
   }
  
});
navTag.addEventListener('click', (event) => {event.preventDefault();
  console.log("clicked on navlink");}
  );


//keydown and up

let body = document.querySelector('body');
body.addEventListener('keydown', (event) => event.target.style.backgroundColor = 'grey');
body.addEventListener('keyup', (event) => event.target.style.backgroundColor = 'white');

//wheel

body.addEventListener('wheel', function alertMeOnce(){
    alert("SCROLING!!!!!");
    body.removeEventListener('wheel', alertMeOnce);
  });

// drag

let BusBanner = document.querySelector(".intro > img" );
BusBanner.addEventListener('drag' ,(event) => {
    if(event.target.style.transform == 'scale(0.75)'){
        event.target.removeAttribute('style')
    }else{
        event.target.style.transform = 'scale(0.75)'}   
 });



//mouseover

let header2 = document.querySelectorAll('.home .text-content h2');

for (i = 0; i < header2.length; i++) {
    header2[i].addEventListener('mouseover', function(event) {
        event.target.style.color = 'red';
    })
    header2[i].addEventListener('mouseout', function(event) {
      event.target.style.color = 'black';
    })        
}

//click
let buttons = document.querySelectorAll('.btn');

for (i=0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
    event.target.style.background = 'red';
    event.target.style.color = 'green';
    body.classList.toggle('container-background');
    event.stopPropagation()
    });
}

//resize
  
window.addEventListener('resize', function alertMeOnce(){
 alert("resizing the screen")
window.removeEventListener('resize', alertMeOnce)
});

//load

window.addEventListener('load', function alertMeOnce() {
    alert('Page is fully loaded')
    window.removeEventListener('load', alertMeOnce);
});




