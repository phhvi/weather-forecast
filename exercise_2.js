const highTemperatures = [55, 57, 53, 47, 56, 50];
const lowTemperatures = [33, 30, 29, 35, 31, 32];

function findHighestTemperature(temperatures) {
  if (temperatures.length === 0) throw new Error("Invalid arguments!");
  let highestTemperature = temperatures[0];
  for (const temperature of temperatures) {
    if (temperature > highestTemperature) {
      highestTemperature = temperature;
    }
  }
  return highestTemperature;
}

function findLowestTemperature(temperatures) {
  if (temperatures.length === 0) throw new Error("Invalid arguments!");
  let lowestTemperature = temperatures[0];
  for (const temperature of temperatures) {
    if (temperature < lowestTemperature) {
      lowestTemperature = temperature;
    }
  }
  return lowestTemperature;
}

function calculateAverageTemperature(temperatures) {
  if (temperatures.length === 0) throw new Error("Invalid arguments!");
  let sum = 0;
  for (const temperature of temperatures) {
    sum += temperature;
  }
  return Math.floor(sum / temperatures.length);
}

function findMedianTemperature(temperatures) {
  const len = temperatures.length;
  if (len === 0) throw new Error("Invalid arguments!");
  const copiedTemperaturesList = new Array.from(temperatures).sort(
    (a, b) => a - b,
  );

  if (len % 2 === 0) {
    // if the length is even, median is average of the 2 middle elements
    return Math.floor(
      (copiedTemperaturesList[len / 2 - 1] + copiedTemperaturesList[len / 2]) /
        2,
    );
  } else {
    return copiedTemperaturesList[Math.floor(len / 2)];
  }
}

// 1. Print the highest temperature to the console.
const theHighest = findHighestTemperature(highTemperatures);
console.log(
  "The highest temperature in high temperatures array is:",
  theHighest,
);

// 2. Print the lowest temperature to the console.
const theLowest = findLowestTemperature(lowTemperatures);
console.log("The lowest temperature in low temperatures array is:", theLowest);

// 3. What is the average high temperature from the data set?
const averageHigh = calculateAverageTemperature(highTemperatures);
console.log("The average high temperature from the data set:", averageHigh);

// 4. What is the average low temperature from the data set?
const averageLow = calculateAverageTemperature(lowTemperatures);
console.log("The average low temperature from the data set:", averageLow);

// 5. What is the median high temperature from the data set?
const medianHigh = findMedianTemperature(highTemperatures);
console.log("The median high temperature from the data set:", medianHigh);

// 6. What is the median low temperature from the data set?
const medianLow = findMedianTemperature(lowTemperatures);
console.log("The median low temperature from the data set:", medianLow);
