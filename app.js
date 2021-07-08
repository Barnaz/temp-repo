// FREECODECAMP NODEJS COURSE (By John Smilga)

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flatMapDeep(items);
console.log(newItems);