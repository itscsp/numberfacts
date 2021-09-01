var pageCounter = 1;
var btn = document.getElementById('btn');
var animalinfo = document.getElementById('animal-info');

btn.addEventListener("click", function(){
	var ourRequest = new XMLHttpRequest();

	ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');//HERE WE PASSING DYNAMIC DATA INTO "api"
	ourRequest.onload = function() {
		if(ourRequest.status >= 200 && ourRequest.status < 400){
			var data = JSON.parse(ourRequest.responseText);//CONVERTING INTO "JSON" FORMAT
			renderHTML(data);
		} else {
			console.log("We connected to the server, but it return on error.");
		}
	};
	
	ourRequest.onerror = function() {
		console.log("Connection error");
	};

	ourRequest.send();		
	pageCounter++;
	if (pageCounter > 3){
		btn.classList.add("hide-me");
	}
});

//THIS LINE HAS MANY FOR LOOP BECOUSE WE ARE LOOPING INTO "ARRAY OF OBJECT" WHICH HAS "OBJECT OF ARRAY'S"
function renderHTML(data){
	var htmltext = "";
	
	for(i = 0; i < data.length; i++){
		htmltext += "<div class='container'><p>"+data[i].name+" is a "+ data[i].species+" that like to eat"
		
		for(ii = 0; ii < data[i].foods.likes.length; ii++){
			if(ii == 0){
				htmltext += data[i].foods.likes[ii];
			}else {
				htmltext += " and " + data[i].foods.likes[ii];
			}
		}
		
		htmltext += ' and dislikes ';
		
		for(ii = 0; ii < data[i].foods.dislikes.length; ii++){
			if(ii == 0){
				htmltext += data[i].foods.dislikes[ii];
			}else{
				htmltext += " and " + data[i].foods.dislikes[ii];
			}
		}
		
		
		htmltext += '.</p></div>';
	}
	
	animalinfo.insertAdjacentHTML('beforeend', htmltext)
}

/*
//JSON FORMAT

[
  {
    "name": "Meowsy",
    "species" : "cat",
    "foods": {
      "likes": ["tuna", "catnip"],
      "dislikes": ["ham", "zucchini"]
    }
  },
  {
    "name": "Barky",
    "species" : "dog",
    "foods": {
      "likes": ["bones", "carrots"],
      "dislikes": ["tuna"]
    }
  },
  {
    "name": "Purrpaws",
    "species" : "cat",
    "foods": {
      "likes": ["mice"],
      "dislikes": ["cookies"]
    }
  }
]

*/