'use strict';

const axios = require("axios");

const getallBib = taille => {
	return new Promise(async(resolve,reject)=>{
		try{
			const restaurants = await axios.get(
				"http://apir.viamichelin.com/apir/2/findPoi.json2/RESTAURANT/fra",
				{
					params : {
						authKey:"RESTGP20200121150114563832572207",
						center:"2.35:48.85",
						nb: taille,
						dist:200000,
						source:"RESGR",
						filter:"bib_gourmand eq 1",
						charset:"UTF-8",
						ie:"UTF-8",
						field:"name"
					}
				});
				const restaurants2 = await axios.get(
				"http://apir.viamichelin.com/apir/2/findPoi.json2/RESTAURANT/fra",
				{
					params : {
						authKey:"RESTGP20200121150114563832572207",
						center:"2.35:48.85",
						nb: taille,
						sidx:100,
						dist:200000,
						source:"RESGR",
						filter:"bib_gourmand eq 1",
						charset:"UTF-8",
						ie:"UTF-8",
						field:"name"
					}
				});
			const restaurants3 = [];
			for(let i = 0; i< 100; i++)
			{
				restaurants3[i] = restaurants.data.poiList[i].datasheets[0].name;
			}
			for(let i = 0; i< 23; i++)
			{
				restaurants3[i+100] = restaurants2.data.poiList[i].datasheets[0].name;
			}
			resolve(restaurants3);
		}
		catch(error){
			reject(error);
		}
	});
}

module.exports = getallBib ;