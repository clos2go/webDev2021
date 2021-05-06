console.log("sup");

const testScores = {
  marlon: 72,
  dwayne: 77,
  nadia: 83,
  elvira: 97,
  diedre: 81,
  vonnie: 60,
};

for (let person in testScores) {
  console.log(`${person} scored ${testScores[person]}`);
}

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
  total += score;
}

let avg = Math.floor(total / scores.length);

console.log(`This is the average of the test scores: ${avg}`);

// console.log(Math.floor(total / Object.values(testScores).length));
