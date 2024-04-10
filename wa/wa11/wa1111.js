const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['pic1.png', `pic2.png`, `pic3.png`, `pic4.png`, `pic5.png`];


/* Declaring the alternative text for each image file */

const alts = ['a beach at sunset with a pier in the distance.', 'a black and white cat laying in the floor.', 'two bunches of daisies.', 'a river running through Utah.', 'a sunset in a neighborhood.'];

/* Looping through images */

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `/img/${image}`);
    newImage.setAttribute('alt', alts[image]);
    
    thumbBar.appendChild(newImage);
    
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });

}    

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});