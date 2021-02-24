//a remplacer par les données de la db
let afaire = {'A' : {'nom' : 'Jean', 'prix' : 38 }, 'B' : {'nom' : 'Vincent', 'prix' : 12 }, 'C' : {'nom' : 'Marie', 'prix' : 72 }} ;
let encours = {'D' : {'nom' : 'Pierre', 'prix' : 10 }, 'E' : {'nom' : 'Jeanne', 'prix' : 12 }, 'F' : {'nom' : 'Clem', 'prix' : 64 }} ;
let envoye = {'G' : {'nom' : 'Richard', 'prix' : 8 }, 'H' : {'nom' : 'Louise', 'prix' : 96 }, 'I' : {'nom' : 'Tom', 'prix' : 3 }} ;

function init() {
	let fiche1 = "<table>" ;
	let fiche2 = "<table>" ;
	let fiche3 = "<table>" ;
	
	for (val in afaire) {
		//console.log(val, " : ",  afaire[val]);
		fiche1 += '<tr> <td id="' + val + '" width=72px>' + afaire[val]['nom'] + '</td> <td width=72px>' + afaire[val]['prix'] + '</td> <td><button onclick="envoi_etape1(\'' + val + '\')">suivant</button></td> </tr>'
	}
	fiche1 += "</table>";
	document.getElementById('cadre_afaire').innerHTML = fiche1;
	
	for (val in encours) {
		//console.log(val, " : ",  afaire[val]);
		fiche2 += '<tr> <td id="' + val + '" width=72px>' + encours[val]['nom'] + '</td> <td width=72px>' + encours[val]['prix'] + '</td> <td><button onclick="envoi_etape2(\'' + val + '\')">suivant</button></td> </tr>'
	}
	fiche2 += "</table>";
	document.getElementById('cadre_encours').innerHTML = fiche2;
	
	for (val in envoye) {
		//console.log(val, " : ",  afaire[val]);
		fiche3 += '<tr> <td id="' + val + '" width=72px>' + envoye[val]['nom'] + '</td> <td width=72px>' + envoye[val]['prix'] + '</td> <td><button onclick="envoi_etape3(\'' + val + '\')">suivant</button></td> </tr>'
	}
	fiche3 += "</table>";
	document.getElementById('cadre_envoye').innerHTML = fiche3;
}
//<button class="bouton_afaire" type ="button" onclick="javascript:clem()">envoyer</button>


function envoi_etape1(ligne) {
	encours[ligne] = { ...afaire[ligne]};
	delete afaire[ligne];
	init();
}

function envoi_etape2(ligne) {
	envoye[ligne] = { ...encours[ligne]};
	delete encours[ligne];
	init();
}

function envoi_etape3(ligne) {
	delete envoye[ligne];
	init();
}
