'use strict'
let Temp_cel = window.prompt('Введите температуру в градусах Цельсия, при не целых значениях используйте точку');
let Temp_far = (9 / 5) * Temp_cel + 32;
window.alert("температура в градусах Фаренгейта составляет: " + Temp_far)