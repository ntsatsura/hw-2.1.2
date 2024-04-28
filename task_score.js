//расчет среднего балла за домашние задания студента по модулям
let nameStudent = "Nastya";
let newNameStudent = nameStudent.slice(0,1);
let surnameStudent = "Tsatsura";

const introScore = 105;
const gitScore = 177;
const jsScore = 180;

let averageMark = (introScore + gitScore + jsScore) / 3;

console.log(`The ${newNameStudent}. ${surnameStudent} average mark is ${averageMark}`);
