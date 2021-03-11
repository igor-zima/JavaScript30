const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

console.log('People Array');
console.table(people);
console.log('');

const isAdult = people.some((person) => new Date().getFullYear() - person.year >= 19);
console.log('Is at least one person 19 or older?', isAdult);
console.log('');

const isEveryAdult = people.every((person) => new Date().getFullYear() - person.year >= 19);
console.log('Is everyone 19 or older?', isEveryAdult);
console.log('');

console.log('Comments Array');
console.table(comments);
console.log('');

const findId = comments.find((comment) => comment.id === 823423);
console.log('Find the comment with the ID of 823423', findId);
console.log('');

const findIndex = comments.findIndex((comment) => comment.id === 823423);
console.log('Find the comment index with the ID of 823423', findIndex);
console.log('');

console.log('Delete the comment with the ID of 823423');
delete comments[findIndex];
console.log('');

console.log('Result comments Array');
console.table(comments);
