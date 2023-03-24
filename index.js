const num = document.querySelector(".heading")
const fact = document.querySelector("p")
const btn = document.querySelector("button")

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
	}
};


function randomFact(){
    fetch('https://numbersapi.p.rapidapi.com/random/trivia?fragment=true&json=true', options)
	.then(response => response.json())
	.then(response => {
        // console.log(response)
        num.textContent = response.number
        fact.textContent = response.text
    })
	.catch(err => console.error(err));
    console.log("clicked")
}

btn.addEventListener("click", randomFact)
