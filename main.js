// Create variables ==========================
var dictionary = [], options = [], wordCount = 25, counter = 0;

// Pull in the DOM elements ==================
var mainBox = document.getElementById('mainBox');
var getWord = document.getElementById('getWord');
var addWords = document.getElementById('add');
var subWords = document.getElementById('subtract');
var total = document.getElementById('total');
total.innerHTML = 'Total: ' + wordCount;

// Build the dictionary ======================
for (var i in VOCAB){
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


// Functions =================================
function getPair(){
	console.log(options.length)
	var index = Math.floor(Math.random() * (options.length - 1));
	var flemish = Object.keys(options[index])[0];
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