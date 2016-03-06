var fs = require('fs'), scripts = [];

var episodes = ['F.C.De.Kampioenen.s11e01.Twaalf.stielen.Nederlands.txt', 'F.C.De.Kampioenen.s11e02.Jonger.dan.je.denkt.Nederlands.txt', 'F.C.De.Kampioenen.s11e03.Te.bed.of.niet.te.bed.Nederlands.txt', 'F.C.De.Kampioenen.s11e04.Vrolijk.kerstfeest.Nederlands.txt', 'F.C.De.Kampioenen.s11e05.Carmen.goes.classic.Nederlands.txt', 'F.C.De.Kampioenen.s11e06.De.kidnapping.Nederlands.txt', 'F.C.De.Kampioenen.s11e07.Succes.verzekerd.Nederlands.txt', 'F.C.De.Kampioenen.s11e08.Eerlijk.duurt.het.langst.Nederlands.txt', 'F.C.De.Kampioenen.s11e09.De.Bomababe.Nederlands.txt', 'F.C.De.Kampioenen.s11e10.Grenzen.verleggen.Nederlands.txt', 'F.C.De.Kampioenen.s11e11.Lief.dagboek.Nederlands.txt', 'F.C.De.Kampioenen.s11e12.Oud.zot.Nederlands.txt', 'F.C.De.Kampioenen.s11e13.Soep.van.duifjes.Nederlands.txt'];
fs.readFile('./fc-de-kampioenen/'+episodes[0], 'utf8', function(err, data){
	scripts.push(data);
	fs.readFile('./fc-de-kampioenen/'+episodes[1], 'utf8', function(err, data){
		scripts.push(data);
		fs.readFile('./fc-de-kampioenen/'+episodes[2], 'utf8', function(err, data){
			scripts.push(data);
			fs.readFile('./fc-de-kampioenen/'+episodes[3], 'utf8', function(err, data){
				scripts.push(data);
				fs.readFile('./fc-de-kampioenen/'+episodes[4], 'utf8', function(err, data){
						scripts.push(data);
						fs.readFile('./fc-de-kampioenen/'+episodes[5], 'utf8', function(err, data){
							scripts.push(data);
							fs.readFile('./fc-de-kampioenen/'+episodes[6], 'utf8', function(err, data){
								scripts.push(data);
								fs.readFile('./fc-de-kampioenen/'+episodes[7], 'utf8', function(err, data){
									scripts.push(data);
									fs.readFile('./fc-de-kampioenen/'+episodes[8], 'utf8', function(err, data){
										scripts.push(data);
										fs.readFile('./fc-de-kampioenen/'+episodes[9], 'utf8', function(err, data){
											scripts.push(data);
											fs.readFile('./fc-de-kampioenen/'+episodes[10], 'utf8', function(err, data){
												scripts.push(data);
												fs.readFile('./fc-de-kampioenen/'+episodes[11], 'utf8', function(err, data){
													scripts.push(data);
													fs.readFile('./fc-de-kampioenen/'+episodes[12], 'utf8', function(err, data){
														scripts.push(data);
														scripts.join(' ');
														var dictionary = {};
														for (var i = 0; i < scripts.length; i++){
															var wordBank = scripts[i].split(' ');
															for (var j = 0; j < wordBank.length; j++){
																if (dictionary[wordBank[j]] == undefined) {
																	dictionary[wordBank[j]] = 1;
																}
																else dictionary[wordBank[j]] += 1;
															}
														}
														var shortlist = highPass(dictionary, 10);
														//console.log(shortlist);
														var count = 0;
														for (var y in shortlist){
															count++;
															console.log(y);
														}
														console.log(count);
													})
												})
											})
										})
									})
								})
							})
						})
					})
				})
			})
		})	
	})



var test = {'name': 2,
						'word': 4,
						'test': 0,
						'this': 1,
						'last': 3};
function highPass(obj, limit){
	var shortlist = {};
	for (var x in obj){
		if (obj[x] >= limit){
			shortlist[x] = obj[x];
		}
	}
	return shortlist;
}

