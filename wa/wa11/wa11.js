var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */


const alts = ['a beach at sunset with a pier in the distance.', 'a black and white cat laying in the floor.', 'two bunches of daisies.', 'a river running through Utah.', 'a sunset in a neighborhood.'];

/* img loop access */
function thumbnailLoop() {
var i;
for (i = 0; i < 5; i++) {
var newImage = document.createElement('img');
newImage.setAttribute('src', "/img/pic" + (i+1) + ".png");
newImage.setAttribute('alt',alts[i]);
thumbBar.appendChild(newImage);
}
}

thumbnailLoop();

/* click thumbnail --> main img */
 
thumbBar.addEventListener('click', (e) => {
  if(e.target && e.target.nodeName == "IMG") {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
}
}); 

/* darken/lighten button */
btn.addEventListener('click', (e) => {
  if (e.target.className == 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
 } 

 else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
 }
});

