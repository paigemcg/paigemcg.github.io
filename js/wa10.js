
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}



const storyText = "It was 94 fahrenheit outside in Boulder, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: is 300 pounds had never actually met a CU student before, and it was a hot day.";

const insertX = ["Philip DiStephano", "Coach Prime", "Raphie"]

const insertY = ["Pearl Street", "The Creek", "a frat house"]

const insertZ = ["sobbed uncontrollably", "posted a pic of the 'flatties in Boco'", "was hit by a B-Cycle"]


randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    var newStory = newStory.replace(':insertx:', xItem);
    var newStory = newStory.replace(':insertx:', xItem);
    var newStory = newStory.replace(':inserty:', yItem);
    var newStory = newStory.replace(':insertz:', zItem);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Paige', name);
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300 * 0.0714) + ' stone';
        const temperature =  Math.round((94-32)*(5/9)) + ' centigrade';
        var newStory = newStory.replace('94 farenheit', temperature);
        var newStory = newStory.replace('300 pounds', weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}