const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;
    
function display(){
      const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

      fetch(requestURL)
      .then(response => response.text())
      .then(text => displayCatInfo(text))
}

function displayCatInfo(catString) {
      let total = 0;
      let male = 0;
      let mothers = 0;

      // Add your code here
      const cats = JSON.parse(catString);
      const sec2Last = (cats.length - 1);

      for (const cat of cats){
        mothers++;
        for (const kitten of cat.kittens){
          total++;
          if (kitten.gender==='m'){
            male++;
          }
        }
        if (mothers <= sec2Last){
          motherInfo += `${cat.name},`;
        }else{
          motherInfo += `and ${cat.name}.`;
        }
      }

      kittenInfo = `These cat mothers have ${ total } kittens in total, ${ male } males and ${ total - male } females.`;
      // Don't edit the code below here!

      para1.textContent = motherInfo;
      para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);

display();