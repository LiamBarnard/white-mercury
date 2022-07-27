//Kelvin temperature constant 293
const kelvin = 0;
//Celsius is 273 degrees less than Kelvin
let celsius = kelvin - 273
//Fahrenheit is Celsius * (9/5) + 32 (Math.floor included to ensure integer)
let fahrenheit = Math.floor(celsius * (9 / 5) + 32)

console.log(`The temperature is ${kelvin} degrees Kelvin, ${celsius} degrees Celsius, and ${fahrenheit} degrees Fahrenheit`)