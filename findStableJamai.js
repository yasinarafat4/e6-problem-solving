/*
Problem: Find 'Stable Jamai' using Filter Method.

Conditions
1. Find 'sorkari' job.
2. Salary has to be 20000 or more into them.
3. But if person is 'beorkari', salary has to be 40000.
*/

const persons = [
  { Name: "Abul", job: "sorkari", salary: 17000 },
  { Name: "Babul", job: "besorkari", salary: 25000 },
  { Name: "Kabul", job: "sorkari", salary: 21000 },
  { Name: "Habul", job: "besorkari", salary: 47000 },
  { Name: "Jabul", job: "sorkari", salary: 23000 },
  { Name: "Mabul", job: "besorkari", salary: 55000 },
];

const jamais = persons.filter(
  (person) =>
    (person.job === "sorkari" && person.salary >= 20000) ||
    (person.job === "besorkari" && person.salary >= 40000)
);

/*
Now no need to find one person because choosing one jamai into them is the duty of a girl and nobody knows whats going on intu a womans brain. So, this problem is solved. 
*/

console.log(jamais);
