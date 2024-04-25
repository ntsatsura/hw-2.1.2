//расчет среднего балла за домашние задания студента по модулям
let nameStudent = "Nastya";
let surnameStudent = "Tsatsura";
let fullNameStudent = nameStudent + " " + surnameStudent

let moduleIntro = 20
let moduleGit = 30
let moduleJs = 30

let total = moduleIntro + moduleGit + moduleJs

let averageMark = Math.ceil(total /3);

console.log(`The ${fullNameStudent} average mark is ${averageMark}`)
