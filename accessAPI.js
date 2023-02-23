/*
Problem: API Array Access (Advance)

Condition: 

1. Output will be:

My Name is abul.
My age is 17.
My gender is Male
My subjects are: bangla,english,math

*/

const students = [
  {
    student1: {
      name: "abul",
      age: "17",
      isMale: true,
      education: {
        class: 7,
        subjects: ["bangla", "english", "math"],
        school: "durgapur high school",
      },
    },
    student2: {
      name: "jarina",
      age: "19",
      isMale: false,
      education: {
        class: 6,
        subjects: ["bangla", "english", "math"],
        school: "Rajshahi high school",
      },
    },
    student3: {
      name: "habul",
      age: "15",
      isMale: true,
      education: {
        class: 9,
        subjects: ["bangla", "english", "arabic"],
        school: "Dhaka high school",
      },
    },
  },
];

/*Before solve it: if we want to get only property name from an object we can use "for...in" loop. Because, "for...of" for object and "for...in" for object. Example: 

const a = {
  name: "arafat",
  age: 25,
  address: "Barishal",
};

for (let i in a) {
  console.log(i);
}

Output: name
        age
        address
*/
students.map((student) => {
  for (let i in student) {
    const { name, age, isMale, education } = student[i];
    const { subjects } = education;
    //using template string
    const information = `
    My Name is ${name}.
    My age is ${age}.
    My gender is ${isMale === true ? "Male" : "Female"}
    My subjects are: ${subjects}
    `;
    console.log(information);
  }
});
