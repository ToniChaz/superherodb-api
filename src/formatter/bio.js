'use strict';

const _ = require('lodash');

const formatStats = (stats) => {
  return _.zip(stats[0].skill, stats[0].val);
};

const formatBio = (bio) => {
  return _(bio).map(data => {
    return _.zip(data.label, data.val);
  }).flatten();
};

module.exports = (searchResult) => {
  console.log('result', searchResult);

  return {
    name: searchResult.name,
    realName: searchResult.real,
    level: searchResult.level,
    bio: formatBio(searchResult.bio),
    stats: formatStats(searchResult.stats)
  };
};
