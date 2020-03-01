const axios = require('axios');
const cheerio = require('cheerio');

var links = [];
var res = [];
const parse = data => {
  const $ = cheerio.load(data);
  var item = [];
  var item2 = [];
  var item3 = [];

  $('.card__menu-image a').each((i, element) =>
  {
    item.push($(element).attr('aria-label').substring(5));
  });
  $('.card__menu-footer--price').each((i, element) =>
  {
    item2.push($(element).text().trim());
  });
  $('.card__menu-footer--location').each((i, element) =>
  {
    item3.push($(element).text().trim());
  });
  for(var index = 0; index < item.length; index++)  {
    res.push({'Name':item[index], 'Cuisine':item2[index], 'Lieu':item3[index]})
  }
  return {res};
};

module.exports.scrapeRestaurant = async url => {
  const response = await axios(url);
  const {data, status} = response;

  if (status >= 200 && status < 300) {
    return parse(data);
  }

  console.error(status);

  return null;
};

module.exports.get = () => {
  return [];
};
