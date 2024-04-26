//расчет среднего балла за домашние задания студента по модулям
let nameStudent = "Nastya";
let newNameStudent = nameStudent.slice(0,1);
let surnameStudent = "Tsatsura";

const introScore = 105;
const gitScore = 177;
const jsScore = 180;

let total = introScore + gitScore + jsScore;

let averageMark = Math.ceil(total /3);

console.log(`The ${newNameStudent}. ${surnameStudent} average mark is ${averageMark}`);
