/*
Problem: Convert  To Single Object (Advanced)

Conditions:

1. Here is an array and it has to be modified in a single object like below:
{
  ID01: 'abul vai',
  ID02: 'babul vai',
  ID03: 'habul vai',
  ID04: 'jabul vai'
}
*/
const persons = [
  { id: "ID01", name: "abul vai", age: 23 },
  { id: "ID02", name: "babul vai", age: 43 },
  { id: "ID03", name: "habul vai", age: 54 },
  { id: "ID04", name: "jabul vai", age: 29 },
];

/*
const info = {};
info["name"] = "arafat";
info["age"] = 23;
console.log(info);
*/

// multi line arrow function
const info = {};
persons.map((p) => {
  const id = p.id;
  const value = p.name;

  info[id] = value;
});
console.log(info);
