'use strict';

const request = require('request-promise');
const urls = require('./urls');
const parse = require('./parser/search');
const format = require('./formatter/search');

const search = (term) => {
  const SEARCH_URL = urls.search(term);

  return request(SEARCH_URL)
    .then(parse)
    .then(format);
};

module.exports = search;
