const valueTest = [1, 100];

const value1 = 1;
const value2 = Math.floor(Math.random(valueTest) * 100);

console.log(`This is random number: ${value2}`);

let totalValue = value1 + value2 / 5 + 17;

console.log(`Result of the formula hw-2.1.5 is ${totalValue}`);

//Приоритет операторов определяет порядок, в котором операторы выполняются.Операторы с более высоким приоритетом выполняются первыми. Приоритет операторов можно найти в одной из соответствующих таблиц для JS. В нашей формуле оператор (/ ) - деление имеет более высокий приоритет, чем оператор (+) - сложение, а значит и выполняться будет первым.
