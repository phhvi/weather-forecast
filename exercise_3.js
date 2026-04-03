// 1. Create an object that represents the current weather
const currentWeather = {
  condition: "breezy",
  temperature: 22,
};

// 2. Log the current temperature to the console.
console.log("Current temperature:", currentWeather.temperature);

// 3. Use string template literals to log a sentence about the weather console.
console.log(
  `It's ${currentWeather?.temperature} degrees F and ${currentWeather?.condition}`,
);
