/*Problem: Find 'SCIC' student using Filter

SCIC conditions:

1. Average marks has to be 50 or more
2. Marks has to be at list 50%
*/

const students = [
  {
    name: "Yasin Arafat",
    email: "yasin@gamil.com",
    avg: 56,
    fiftyPercent: true,
  },
  { name: "Ratul", email: "ratul@gamil.com", avg: 57, fiftyPercent: false },
  { name: "Jobaer", email: "jobaer@gamil.com", avg: 42, fiftyPercent: false },
  { name: "Hasib", email: "hasib@gamil.com", avg: 52, fiftyPercent: true },
  { name: "Tanvir", email: "ta@gamil.com", avg: 32, fiftyPercent: false },
  { name: "Jeri", email: "jeri@gamil.com", avg: 57, fiftyPercent: true },
  { name: "Sayma", email: "sayma@gamil.com", avg: 37, fiftyPercent: true },
];

const scic = students.filter((x) => x.avg >= 50 && x.fiftyPercent === true);
// console.log(scic);

/*now I get full array those who fill the conditions, but I need only name. So, to get a single value inside an object and return, I have to use map.*/
const getChance = scic.map((students) => students.name);
console.log(getChance);
