// Create variables ==========================
var dictionary = [], options = [], wordCount = 25, counter = 0;
var top10000 = document.createElement('p');
top10000.innerHTML = 'Top 10000';
var topVerbs = document.createElement('p');
topVerbs.innerHTML = 'Top 300 Verbs';
var fcdekamp = document.createElement('p');
fcdekamp.innerHTML = 'F.C. de Kampionen';

// Pull in the DOM elements ==================
var mainBox = document.getElementById('mainBox');
var getWord = document.getElementById('getWord');
var addWords = document.getElementById('add');
var subWords = document.getElementById('subtract');
var total = document.getElementById('total');
total.innerHTML = 'Total: ' + wordCount;
var pickDeck = document.getElementById('pickDeck');
var choices = document.createElement('div');
choices.id = 'choices';

// Build the dictionary ======================
// Pick the library
var vocab = VOCAB;
for (var i in vocab){
	if (VOCAB[i] != undefined && VOCAB[i] != '') {
		var result = new Object;
		result[i] = VOCAB[i];
		dictionary[counter] = result;
		counter++;
	}
}
options = dictionary.slice(0, wordCount);

// Button Event Listeners ====================
getWord.addEventListener('click', newWord);

addWords.addEventListener('click', function(){
	wordCount += 25;
	if (wordCount <= dictionary.length + 1){
		options = dictionary.slice(0, wordCount);
		total.innerHTML = 'Total: ' + wordCount;
	}
	else {
		wordCount -= 25;
	}
});

subWords.addEventListener('click', function(){
	wordCount -= 25;
	if (wordCount >= 0) {
		options = dictionary.slice(0, wordCount);
		total.innerHTML = 'Total: ' + wordCount;
	}
	else wordCount = 0;
})

pickDeck.addEventListener('click', function(){
	choices.style.top = 0.35 * window.innerHeight + 'px';
	choices.style.left = 0.46 * window.innerWidth + 'px';

	choices.appendChild(top10000);
	choices.appendChild(topVerbs);
	choices.appendChild(fcdekamp);

	document.body.appendChild(choices);
})

choices.addEventListener('click', function(event){
	// Get the vocab deck
	if (event.target.innerHTML == 'Top 10000'){
		vocab = VOCAB;}
	else if (event.target.innerHTML == 'Top 300 Verbs'){
		vocab = VERBS;}
	else if (event.target.innerHTML == 'F.C. de Kampionen'){
		vocab = TVTALK;}

	// Empty the dictionary
	wordCount = 25;
	total.innerHTML = 'Total: ' + wordCount;
	dictionary = []; 
	counter = 0;

	// Refill the dictionary
	for (var i in vocab){
		if (vocab[i] != undefined && vocab[i] != '') {
			var result = new Object;
			result[i] = vocab[i];
			dictionary[counter] = result;
			counter++;
		}
	}

	// Empty and Refill options
	options = [];
	options = dictionary.slice(0, wordCount);

	choices.removeChild(top10000);
	choices.removeChild(topVerbs);
	choices.removeChild(fcdekamp);
	document.body.removeChild(choices);
})


// Functions =================================
function getPair(){
	var index = Math.floor(Math.random() * (options.length - 1));
	console.log(index);
	// var flemish = Object.keys(options[index])[0];
	var flemish = Object.keys(options[index]);
	var english = options[index][flemish];
	return [flemish, english];
}

function newWord(){
	var pick = getPair();
	var flem = true;
	mainBox.textContent = pick[0];
	mainBox.addEventListener('click', function(){
		if (flem === true){
			mainBox.textContent = pick[1];
			flem = false;
		}
		else {
			mainBox.textContent = pick[0];	
			flem = true;
		} 
	})
window.addEventListener('keypress', function(e){
	if (e.key == 'ArrowRight'){
		if (flem == true){
			mainBox.textContent = pick[1];
			flem = false;
		}
		else {
			mainBox.textContent = pick[0];
			flem = true;
		}}
	});
window.addEventListener('keypress', function(e){
	if (e.key == 'ArrowDown'){
		return newWord();
	}
})

}


newWord();