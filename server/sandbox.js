const michelin = require('./michelin');
const maitre = require('./maitre');
const fs = require('fs');

var restaurantsMichelin = null;
var restaurantsMaitre = null;
var searchLink = 'https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/page/'

async function sandboxMichelin(searchLink) {
  try {
    restaurantsMichelin = await michelin.scrapeRestaurant(searchLink);

  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

async function sandboxMaitre (page_nb) {
  try {
    restaurantsMaitre = await maitre.scrapeRestaurant(page_nb);

  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

for(var index = 1; index < 31; index++) { 
  var url = searchLink + `${index}`;
  sandboxMichelin(url);
}

var delayInMilliseconds = 10000;
console.log("Waiting 10 seconds to get all results from michelin.")
setTimeout(function() {
  fs.writeFile(
    './allBib.json',
    JSON.stringify(restaurantsMichelin["res"]),
    function (err) {
        if (err) {
            console.error('Erreur écriture michelin');
        }
    }
);
console.log('Ecriture michelin ok');
}, delayInMilliseconds);

for (var nb_page = 1; nb_page < 150; nb_page++) {
  sandboxMaitre(nb_page);
}

delayInMilliseconds = 20000;
console.log("Waiting 20 seconds to get all results from maitre restaurant.")
setTimeout(function() {
  fs.writeFile(
    './allMaitre.json',
    JSON.stringify(restaurantsMaitre["res"]),
    function (err) {
        if (err) {
            console.error('Erreur écriture maitre');
        }
    }
);
console.log('Ecriture maitre ok');
}, delayInMilliseconds);