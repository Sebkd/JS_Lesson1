'use strict'
/*
10 + 10 + "10";
10 + "10" + 10;
10 + 10 + +"10";
(обратите внимание на пробелы, пишите также)
10 / -""; 
10 / +"2,5"; (да здесь запятая, это не опечатка)*/
console.log(10 + 10 + "10"); //2010 10 + 10 = 20 +конкатенация (как прибавление к строке) строки "10"
console.log(10 + "10" + 10); //101010 все превратилось в строку и простая конкатенация сложила строки 
console.log(10 + 10 + +"10"); //30 +"10" унарный плюс изменил строку в число
console.log(10 / -""); //-Infinity "" - означает ноль, унарный - изменил на -0, деление на ноль дает бесконечность, в данном случае с отрицательным знаком
console.log(10 / +"2,5"); //NaN здесь 2,5 не является вещественным числом, должно быть 2.5, поэтому +"2,5" дает тип данных NaN
/*
2010
101010
30
-Infinity
NaN
*/