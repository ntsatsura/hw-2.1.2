//расчет среднего балла за домашние задания студента по модулям
let nameStudent = "Nastya";
let newNameStudent = nameStudent.slice(0,1);
let surnameStudent = "Tsatsura";

let index = 0;

let moduleIntro = 20;
let moduleGit = 30;
let moduleJs = 30;

let total = moduleIntro + moduleGit + moduleJs;

let averageMark = Math.ceil(total /3);

console.log(`The ${newNameStudent}. ${surnameStudent} average mark is ${averageMark}`);
