const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
];

// Regular
console.log('Regular console');
console.log('hello');
console.log('');

// Table
console.log('Table console');
console.table(dogs);
console.log('');

// Interpolated
console.log('Console with Interpolated');
console.log('Hello I am a %s string! And I am a %d number!\n', '😀', 123);
console.log('');

// Styled
console.log('Console with style');
console.log(
  '%c I am some great text',
  'font-size: 20px; background: red; text-shadow: 5px 3px 0 blue;',
);
console.log('');

// warning!
console.log('Warning console');
console.warn('Warn!!!');
console.log('');

// Error :|
console.log('Error console');
console.error('Error!!!');
console.log('');

// Info
console.log('Info console');
console.info('Crocodiles eat 3-4 people per year');
console.log('');

// Testing
const p = document.querySelector('p');

console.log('Assert console');
console.log('<p> classlist contain "ouch"?');
console.assert(p.classList.contains('ouch'), 'That is wrong!');
console.log('');

// clearing
console.log('Also have Clear console. But I comment it');
// console.clear();
console.log('');

// Viewing DOM Elements
console.log('Viewing DOM elements');
console.log('Log console');
console.log(p);
console.log('Dir console. View DOM elements like object.');
console.dir(p);
console.log('');

// Grouping together
console.log('Group console');
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});
console.log('');

// counting
console.log('Count console');
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.log('');

// timing
console.log('Time console');
console.time('fetching data');
fetch('https://api.github.com/users/igor-zima')
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd('fetching data');
    console.log(data);
  });
