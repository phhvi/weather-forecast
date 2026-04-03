let todaysWeather = {
  temperature: {
    high: 55,
    low: 32,
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "7:43 AM",
    sunset: "5:09 PM",
  },
};

// 1. Log today's high temperature to the console.
console.log("Today's high temperature:", todaysWeather.temperature.high);

// 2. Log today's low temperature to the console.
console.log("Today's low temperature:", todaysWeather.temperature.low);

// 3. Log today's conditions to the console.
console.log("Today's weather condition:", todaysWeather.conditions);

// 4. Log today's sunrise time to the console.
console.log("Today's sunrise time:", todaysWeather.astronomy.sunrise);

// 5. Use string template literals to create a more detailed description of today's weather.
console.log(
  `It's gonna be a ${todaysWeather.conditions} day today. With highest temperature is ${todaysWeather.temperature.high} F degree and lowest temperature is ${todaysWeather.temperature.low} F degree. The sun will rise at ${todaysWeather.astronomy.sunrise} and set at ${todaysWeather.astronomy.sunset}`,
);
