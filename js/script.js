//CREATING SOME VARIBLES
let fact = document.getElementById('fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput');

//adding event listner to form tags
numberInput.addEventListener('input', () =>{
	let number = numberInput.value;
	/*
	//write ajax methods
	let xhr = new XMLHttpRequest();
	//GET API ADDRESS
	xhr.open('GET', 'http://numbersapi.com/'+number);
	
	xhr.onload = function() {
		if(this.status == 200 && number != ''){
			fact.style.display = 'block';
			factText.innerText = this.responseText;
		}
	}
	
	xhr.send();
	
	*/
	
	//GETING DATA WITH FETCH method
	fetch('http://numbersapi.com/'+number)
		.then(response => response.text())
		.then(data => {
			if(number != ''){
				fact.style.display = 'block';
				factText.innerText = data;
			}
		})
		.catch(err => console.log(err));
	
});




 