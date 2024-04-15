const btn = document.querySelector("#js-new-quote");
btn.addEventListener('click', getQuote);

const answerBtn = document.querySelector("#js-tweet");
answerBtn.addEventListener('click', getAnswer);

const answerText = document.querySelector("#js-answer-text");

const endpoint = 'https://dog-api.kinduff.com/api/facts';

const endpoint2 = 'https://dog.ceo/api/breeds/image/random';


let image = document.getElementById('image')

async function getQuote(){
    try{
        const response = await fetch(endpoint);
        if (!response.ok){
            throw Error(response.statusText)
        }
        const json = await response.json();
        console.log(json['facts']);
        displayQuote(json['facts']);
        answerText.textContent = '';

    } catch (err){
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(quote){
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

function getAnswer(){
    fetch(endpoint2)  
        .then(res => res.json())
        .then(result => {
        console.log(result)
        image.src = result['message']
    
    })
    .catch(err => console.log(err))
}



getQuote();

getAnswer();