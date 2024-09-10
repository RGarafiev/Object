//Zadacha 1

const pet = {
    name: "Бобик",
    type: "пес",
    sound: "гав",
  
   
    say: function(text) {
      
      if (text) {
        return `${this.type} ${this.name} говорит ${text}`;
      }
      
      return `${this.type} ${this.name} говорит ${this.sound}`;
    }
  };


  console.log(pet.say('Мяу'))



//Zadacha 2

const products = {
    "potato": "овощи",
    "carrot": "овощи",
    "banana": "фрукты",
    "orange": "фрукты",
    "apple": "фрукты",
    "strawberry": "ягоды",
    "tomato": "овощи",
    "melon": "фрукты",
    "lemon": "фрукты"
  };

  const productCounts = {};

for (const product in products) {
  const type = products[product];
  
  if (productCounts[type]) {
    productCounts[type]++;
  } else {
    productCounts[type] = 1;
  }
}

console.log(productCounts);


//Zadacha 3

const cars = {
  "Toyota": { color: "Red", country: "Japan", year: 2022 },
  "Ford": { color: "Blue", country: "USA", year: 2019 },
  "BMW": { color: "Black", country: "Germany", year: 2021 },
  "Hyundai": { color: "White", country: "South Korea", year: 2018 },
  "Audi": { color: "Silver", country: "Germany", year: 2020 },
  "Chevrolet": { color: "Green", country: "USA", year: 2017 },
  "Nissan": { color: "Yellow", country: "Japan", year: 2023 },
  "Volkswagen": { color: "Gray", country: "Germany", year: 2016 },
  "Honda": { color: "Orange", country: "Japan", year: 2022 },
  "Kia": { color: "Purple", country: "South Korea", year: 2021 }
};

function sortCarsByYear(cars, ascending = true) {
  const carEntries = Object.entries(cars);
  carEntries.sort((a, b) => ascending ? a[1].year - b[1].year : b[1].year - a[1].year);
  return carEntries;
}

function printCarInfo(cars) {
  const sortedCars = sortCarsByYear(cars, false);
  const newestCars = sortedCars.slice(0, 3); 

  console.log("Three newest cars:");
  newestCars.forEach(([brand, info]) => {
    console.log(`${brand}: Color: ${info.color}, Country: ${info.country}, Year: ${info.year}`);
  });

  const oldestCars = sortCarsByYear(cars, true).slice(0, 3); 

  console.log("\nThree oldest cars:");
  oldestCars.forEach(([brand, info]) => {
    console.log(`${brand}: Color: ${info.color}, Country: ${info.country}, Year: ${info.year}`);
  });
}

printCarInfo(cars);