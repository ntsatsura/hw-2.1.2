//расчет среднего балла за домашние задания студента по модулям
let nameStudent = "Nastya";
let newNameStudent = nameStudent.slice(0,1);
let surnameStudent = "Tsatsura";

let moduleIntro = 20;
let moduleGit = 30;
let moduleJs = 30;

let averageMark = Math.ceil((moduleIntro + moduleGit + moduleJs) / 3);

console.log(`The ${newNameStudent}. ${surnameStudent} average mark is ${averageMark}`);
