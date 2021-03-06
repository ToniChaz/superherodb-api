'use strict';

const request = require('request-promise');
const urls = require('./urls');
const parser = require('./parser');
const formatter = require('./formatter');

const fetch = (heroPath) => {
  const heroUrls = urls.heroUrls(heroPath);

  const promises = Object.keys(heroUrls).map(type => {
    console.log(`Fetching ${type} from ${heroUrls[type]}`);
    return request(heroUrls[type]).then(parser[type]).then(formatter[type]);
  });

  return Promise.all(promises);
};

module.exports = fetch;
