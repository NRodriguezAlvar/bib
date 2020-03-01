const fs = require('fs') 

var jsonBib = JSON.parse(fs.readFileSync('./allBib.json').toString());
var jsonMaitre = JSON.parse(fs.readFileSync('./allMaitre.json').toString());

var listeBibMaitre = [];

for(var i = 0; i < jsonBib.length; i++){
    for(var j = 0; j < jsonMaitre.length; j++) {
        if(jsonMaitre[j]['Name'].toLowerCase().replace(/ *\([^)]*\) */g, "") == (jsonBib[i]['Name'].toLowerCase())) {
			var estDedans = false;
            for(var k = 0; k < listeBibMaitre.length; k++) {
				var string = '{\"Name\":\"'+jsonBib[i]['Name']+'\",\"Lieu\":\"'+jsonBib[i]['Lieu']+'\"}'
				if(JSON.stringify(listeBibMaitre[k]) == string) 
				{
					estDedans = true;
				}
			}
			if(estDedans == false) listeBibMaitre.push({'Name':jsonBib[i]['Name'], 'Lieu':jsonBib[i]['Lieu']});
        }
    }
}

/*var count = 1;
listeBibMaitre.forEach(element => {
    console.log(count + ": " + element['Name']);
    count++;
});*/

fs.writeFile(
    './allBibMaitre.json',
    JSON.stringify(listeBibMaitre),
    function (err) {
        if (err) {
            console.error('Erreur écriture allBibMaitre');
        }
    }
);


