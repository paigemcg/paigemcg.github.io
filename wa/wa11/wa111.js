const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['pic1.png', 'pic2.png', 'pic3.png', 'pic4.png', 'pic5.png'];



/* Declaring the alternative text for each image file */

const alts = {
    'pic1.png' : 'a beach at sunset with a pier in the distance.',
    'pic2.png' : 'a black and white cat laying in the floor.',
    'pic3.png' : 'two bunches of daisies',
    'pic4.png' : 'a river running through Utah.',
    'pic5.png' : 'a sunset in a neighborhood.' 
}

/* Looping through images */


for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "/img/pic" + (i+1) + ".png");
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    
    thumbBar.addEventListener('click', (e) => {
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
    } 
    else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});