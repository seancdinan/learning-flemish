var options = [];
counter = 0;
for (var i in VOCAB){
	if (VOCAB[i] != undefined && VOCAB[i] != '') {
		var result = new Object;
		result[i] = VOCAB[i];
		options[counter] = result;
		counter++;
	}
}
var mainBox = document.getElementById('mainBox');

function getPair(){
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
}

var getWord = document.getElementById('getWord');
getWord.addEventListener('click', newWord);

newWord();