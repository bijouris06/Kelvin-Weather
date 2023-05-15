const kelvin = 0; // kelvin의 기본 값
let celcius = kelvin - 273 // celcius의 기본 값
let fahrenheit = celcius* (9/5) + 32 // fahrenheit의 기본 값
fahrenheit= Math.floor(fahrenheit) // fahrenheit 소수점 없음
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)

let newton = celcius * (33/100)
newton= Math.floor(newton)
console.log(`The temperature is ${newton} degrees Newton`)