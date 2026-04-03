// Instantiate and assign values to variables
const temperature = 22;
const condition = "breezy";
const sunriseTime = "6:15 AM";
const sunsetTime = "5:44 PM";

//Log each variable to the console
console.log("The temperature in Fahrenheit:", temperature);
console.log("Current weather condition:", condition);
console.log("Sunrise time:", sunriseTime);
console.log("Sunset time:", sunsetTime);

//Combine variables into a sentence using template literals (I created a reusable function here)
function generateWeatherForecast(
  temperature,
  condition,
  sunriseTime,
  sunsetTime,
) {
  return `It's currently ${condition} and ${temperature} degrees. The sun rose this morning at ${sunriseTime} and will set at ${sunsetTime}.`;
}

const weatherForecast = generateWeatherForecast(
  temperature,
  condition,
  sunriseTime,
  sunsetTime,
);

console.log(weatherForecast);
