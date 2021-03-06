// Allergies Warmup
// An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).
//
// The list of items (and their value) that were tested are:
//
// eggs (1)
// peanuts (2)
// shellfish (4)
// strawberries (8)
// tomatoes (16)
// chocolate (32)
// pollen (64)
// cats (128)
// So if Tom is allergic to peanuts and chocolate, he gets a score of 34.
//
// Now, given just that score of 34, your program should be able to say:
//
// Whether Tom is allergic to any one of those allergens listed above.
// All the allergens Tom is allergic to.

// const allergies = {
//   cats: 128,
//   pollen: 64,
//   chocolate: 32,
//   tomatoes: 16,
//   strawberries: 8,
//   shellfish: 4,
//   peanuts: 2,
//   eggs: 1,
//
//   calculator: function (score) {
//     if (score >= this.cats) {
//       score -= this.cats;
//       console.log(score);
//       console.log(`Norbit is allergic to cats.`);
//     } if (score >= this.pollen) {
//       score -= this.pollen;
//       console.log(score);
//       console.log(`Norbit is allergic to Pollen.`);
//     } if (score >= this.chocolate) {
//       score -= this.chocolate;
//       console.log(`Norbit is allergic to chocolate.`);
//     } if (score >= this.tomatoes) {
//       score -= this.tomatoes;
//       console.log(`Norbit is allergic to tomatoes.`);
//     } if (score >= this.strawberries) {
//       score -= strawberries;
//       console.log(`Norbit is allergic to strawberries.`);
//     } if (score >= this.shellfish) {
//       score -= this.shellfish;
//       console.log(`Norbit is allergic to shellfish.`);
//     } if (score >= this.peanuts) {
//       score -= this.peanuts;
//       console.log(`Norbit is allergic to peanuts.`);
//     } if (score >= this.eggs) {
//       score -= this.eggs;
//       console.log(`Norbit is allergic to eggs.`);
//     } else if (score === 0) {
//       console.log("Norbit has no allergies");
//     }
//   },
//
// };
//
// allergies.calculator(0);



///////////////////////////////////////////////////////
//////// YANNI'S ANSWER //////////////////////////////
//////// YANNI'S ANSWER //////////////////////////////
//////// YANNI'S ANSWER //////////////////////////////
///////////////////////////////////////////////////////


const allergens = {
  scorecard: {
    1: "eggs",
    2: "peanuts",
    4: "shellfish",
    8: "strawberries",
    16: "tomatoes",
    32: "chocolate",
    64: "pollen",
    128: "cats"
  },

  getKeys: function() {
    const allergyKeys = Object.keys(this.scorecard).map(Number).reverse();

    // console.log(allergyKeys);

    return allergyKeys;
  },

  getList: function(score) {
    const keys = this.getKeys();

    let allergies = [];

    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      // console.log(`key: ${key}, score: ${score}`);

      if (score >= key) {
        allergies.push(this.scorecard[key])

        // console.log((`${this.scorecard[key]} has been pushed to allergies array`));

        score -= key;
      }
    }
    console.log(allergies);

    return allergies;
  },

  diagnosis: function(score) {
    const allergyList = this.getList(score);

    // console.log(allergyList);
    if(allergyList.length > 0) {
      console.log(`You are allergic to ${allergyList.join(', ')}`);
    } else {
      console.log("You are healthy.");
    }
  },
}
//
// allergens.diagnosis(1000);
// allergens.diagnosis(0);


///////////////////////////////////////////////////////
//////// YANNI'S ANSWER //////////////////////////////
//////// YANNI'S ANSWER //////////////////////////////
//////// YANNI'S ANSWER //////////////////////////////
///////////////////////////////////////////////////////


const allergens = {
  scorecard: {
    "cats": 128,
    "pollen": 64,
    "chocolate": 32,
    "tomatoes": 16,
    "strawberries": 8,
    "shellfish": 4,
    "peanuts": 2,
    "eggs": 1
  }
};

allergiesList = [];

number = 121;

Object.keys(allergens).forEach(function(key) {
  if (number % allergens[key] < number) {
    console.log(`${number} % ${allergens[key]} is ${number % allergens[key]}`);

    allergiesList.push(key);
    number = number % allergies[key]
    console.log(`new number: ${number}`);
  }
});

if (allergiesList.length > 0) {
  console.log(`You are allergic to ${allergiesList.join(', ')}`);
} else {
  console.log("You are perfectly Healthy");
};
