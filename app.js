const fs = require('fs');
const gender = ['M', 'F'];
const maleNames = ['Tom', 'Marcus', 'Mike', 'Michael', 'Max', 'Martin', 'Andy', 'Toby', 'Alfred', 'George']
const femaleNames = ['Kate', 'Alice', 'Jane', 'Dua', 'Stephanie', 'Margo', 'Natalie', 'Elizabeth', 'Diana', 'Monica'];
const lastNames = ['Willis', 'Marks', 'White', 'Brown', 'Green', 'Hawking', 'Cooper', 'Parker', 'Oneil', 'Hanks', 'Crowe'];
const people = [];

function randChoice(arr) {
  return arr[Math.floor(arr.length * Math.random())];
}

for (let i = 1; i <= 20; i++) {
  const person = {};
  (person.gender = randChoice(gender)) === 'M' 
  ?
    person.name = randChoice(maleNames)
  :
    person.name = randChoice(femaleNames);
  person.lastName = randChoice(lastNames);
  person.age = Math.floor(Math.random() * (78 - 18) + 18);
  person.email = person.name.toLowerCase() + '.' + person.lastName.toLowerCase() + '@gmail.com';
  people.push(person);
}

fs.writeFile('people.json', JSON.stringify(people,null,2), (err) => {
  if (err) throw err;
  console.log('File has been saved!');
})