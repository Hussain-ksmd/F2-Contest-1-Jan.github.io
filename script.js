/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  people.map(person => {
    if (person.profession === 'developer') {
      console.log(person);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here
  people.forEach(person => {
    if (person.profession === 'developer') {
      console.log(person);
    }
  });
}

function addData() {
  //Write your code here
  const newPerson = {id:4,name:"susan",age:"20",profession:"intern"};
  people.push(newPerson);
  console.log(people);
}

function removeAdmin() {
  //Write your code here
  people = people.filter(person => person.profession !== 'admin');
  console.log(people);
}

function concatenateArray() {
  //Write your code here
  const newPeople = [{id:5,name:"jane",age:"25",profession:"developer"}, {id:6,name:"dave",age:"30",profession:"manager"}, {id:7,name:"sam",age:"35",profession:"designer"}];
  const combined = people.concat(newPeople);
  console.log(combined);
}
/* 

const people = [{id:1,name:"john",age:"18",profession:"developer"},{id:2, name:"jack",age:"20", profession:"developer"},{id:3, name:"karen", age:"19",profession:"admin"}];

function PrintDeveloperbyMap() {
  people.map(person => {
    if (person.profession === 'developer') {
      console.log(person);
    }
  });
}

function PrintDeveloperbyForEach() {
  people.forEach(person => {
    if (person.profession === 'developer') {
      console.log(person);
    }
  });
}

function addData() {
  const newPerson = {id:4,name:"susan",age:"20",profession:"intern"};
  people.push(newPerson);
  console.log(people);
}

function removeAdmin() {
  people = people.filter(person => person.profession !== 'admin');
  console.log(people);
}

function concatenateArray() {
  const newPeople = [{id:5,name:"jane",age:"25",profession:"developer"}, {id:6,name:"dave",age:"30",profession:"manager"}, {id:7,name:"sam",age:"35",profession:"designer"}];
  const combined = people.concat(newPeople);
  console.log(combined);
}


*/