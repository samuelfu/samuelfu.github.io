function generateAlgebraQuestion() {
  const randomType = Math.floor(Math.random() * 5);
  switch (randomType) {
      case 0: // Linear equations
          const a = Math.floor(Math.random() * 10) + 1;
          const b = Math.floor(Math.random() * 10) + 1;
          return {
              question: `If 3(x - ${a}) = 2(x + ${b}), what is the value of x?`,
              answer: ((3 * a) + (2 * b)) / (3 - 2)
          };
      case 1: // Quadratic equations
          const c = Math.floor(Math.random() * 5) + 1;
          return {
              question: `What are the roots of the equation x^2 - ${4 * c}x + ${4 * c} = 0?`,
              answer: `The roots are ${2 * c} and ${2 * c}.`
          };
      case 2: // Systems of equations
          const d = Math.floor(Math.random() * 10) + 1;
          const e = Math.floor(Math.random() * 10) + 1;
          return {
              question: `Solve the system of equations: x + y = ${10 + d}, x - y = ${e}.`,
              answer: `x = ${(10 + d + e) / 2}, y = ${(10 + d - e) / 2}`
          };
      case 3: // Inequalities
          const f = Math.floor(Math.random() * 10) + 1;
          return {
              question: `Solve the inequality: ${f}x + 3 > 2x + ${f + 3}.`,
              answer: `x > ${f / (f - 2)}`
          };
      case 4: // Algebraic expressions
          const g = Math.floor(Math.random() * 10) + 1;
          const h = Math.floor(Math.random() * 10) + 1;
          return {
              question: `Simplify the expression: (${g}x^3 + ${h}x^2) - (${g}x^2 - ${h}x).`,
              answer: `${g}x^3 + ${h + g}x^2 + ${h}x`
          };
  }
}

function generateArithmeticQuestion() {
  const randomType = Math.floor(Math.random() * 5);
  switch (randomType) {
      case 0: // Average calculation
          const a = Math.floor(Math.random() * 20) + 10;
          return {
              question: `What is the average of all the numbers from 1 to ${a}?`,
              answer: (a + 1) / 2
          };
      case 1: // Percentage calculation
          const b = Math.floor(Math.random() * 100) + 100;
          const c = Math.floor(Math.random() * 10) + 5;
          return {
              question: `What is ${c}% of ${b}?`,
              answer: (b * c) / 100
          };
      case 2: // Ratio and proportion
          const d = Math.floor(Math.random() * 5) + 1;
          const e = d * (Math.floor(Math.random() * 5) + 1);
          return {
              question: `The ratio of two numbers is ${d}:${e}. If the sum of the numbers is ${d + e}, what are the numbers?`,
              answer: `The numbers are ${d} and ${e}.`
          };
      case 3: // Number properties
          const f = Math.floor(Math.random() * 30) + 20;
          return {
              question: `Find the sum of all even numbers from 2 to ${f}.`,
              answer: ((f / 2) * ((f / 2) + 1))
          };
      case 4: // Arithmetic sequences
          const g = Math.floor(Math.random() * 5) + 1;
          const h = Math.floor(Math.random() * 20) + 10;
          return {
              question: `What is the ${g}th term in an arithmetic sequence where the first term is ${h} and the common difference is ${g}?`,
              answer: h + (g - 1) * g
          };
  }
}

function generateGeometryQuestion() {
  const randomType = Math.floor(Math.random() * 5);
  switch (randomType) {
      case 0: // Area calculation
          const a = Math.floor(Math.random() * 10) + 1;
          const b = Math.floor(Math.random() * 10) + 1;
          return {
              question: `What is the area of a rectangle with length ${a} units and width ${b} units?`,
              answer: a * b
          };
      case 1: // Volume calculation
          const c = Math.floor(Math.random() * 10) + 1;
          return {
              question: `What is the volume of a cube with side length ${c} units?`,
              answer: c ** 3
          };
      case 2: // Angle measurement
          const d = Math.floor(Math.random() * 90) + 10;
          return {
              question: `If one angle of a right triangle is ${d} degrees, what is the measure of the other acute angle?`,
              answer: 90 - d
          };
      case 3: // Perimeter and circumference
          const e = Math.floor(Math.random() * 10) + 1;
          return {
              question: `What is the perimeter of an equilateral triangle with side length ${e} units?`,
              answer: 3 * e
          };
      case 4: // Coordinate geometry
          const f = Math.floor(Math.random() * 10) + 1;
          const g = Math.floor(Math.random() * 10) + 1;
          return {
              question: `What is the distance between the points (0,0) and (${f},${g}) in the coordinate plane?`,
              answer: Math.sqrt(f ** 2 + g ** 2).toFixed(2)
          };
  }
}

function generateDataAnalysisQuestion() {
  const randomType = Math.floor(Math.random() * 5);
  switch (randomType) {
      case 0: // Mean, median, mode
          const a = Math.floor(Math.random() * 5) + 5;
          const numbers = Array.from({ length: a }, () => Math.floor(Math.random() * 20) + 1);
          const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
          return {
              question: `Calculate the mean of the following numbers: ${numbers.join(", ")}.`,
              answer: mean.toFixed(2)
          };
      case 1: // Probability
          const b = Math.floor(Math.random() * 10) + 10;
          const c = Math.floor(Math.random() * (b - 1)) + 1;
          return {
              question: `In a bag containing ${b} balls, ${c} are red. What is the probability of randomly picking a red ball?`,
              answer: (c / b).toFixed(2)
          };
      case 2: // Variance and standard deviation
          const d = Math.floor(Math.random() * 5) + 5;
          const data = Array.from({ length: d }, () => Math.floor(Math.random() * 20) + 1);
          const meanData = data.reduce((sum, num) => sum + num, 0) / data.length;
          const variance = data.reduce((acc, val) => acc + ((val - meanData) ** 2), 0) / data.length;
          return {
              question: `Calculate the variance of the following numbers: ${data.join(", ")}.`,
              answer: variance.toFixed(2)
          };
          case 3: // Data interpretation
          const salesData = Array.from({ length: 5 }, (_, index) => ({ year: 2015 + index, sales: Math.floor(Math.random() * 1000) + 500 }));
          const totalSales = salesData.reduce((sum, item) => sum + item.sales, 0);
          return {
              question: `The sales data (in thousands) for a company over 5 years is as follows: ${salesData.map(item => `Year ${item.year}: ${item.sales}`).join(", ")}. What is the total sales amount over these years?`,
              answer: totalSales
          };
      case 4: // Statistical concepts
          const numberOfStudents = Math.floor(Math.random() * 50) + 50;
          const passedStudents = Math.floor(numberOfStudents * Math.random());
          const passPercentage = ((passedStudents / numberOfStudents) * 100).toFixed(2);
          return {
              question: `In a class of ${numberOfStudents} students, ${passedStudents} students passed the final exam. What is the pass percentage?`,
              answer: passPercentage
          };
}
}

function generateWordProblemQuestion() {
  const randomType = Math.floor(Math.random() * 5);
  switch (randomType) {
      case 0: // Distance, rate, and time
          const speedA = Math.floor(Math.random() * 50) + 30;
          const speedB = Math.floor(Math.random() * 50) + 30;
          const time = Math.floor(Math.random() * 5) + 1;
          return {
              question: `Two cars start from the same point and drive in opposite directions. One car drives at ${speedA} km/h and the other at ${speedB} km/h. How far apart will they be after ${time} hours?`,
              answer: (speedA + speedB) * time
          };
      case 1: // Work problems
          const workerA = Math.floor(Math.random() * 10) + 1;
          const workerB = Math.floor(Math.random() * 10) + 1;
          const combinedHours = Math.floor(Math.random() * 10) + 5;
          return {
              question: `If Worker A can complete a job in ${workerA} hours and Worker B can complete the same job in ${workerB} hours, how long will it take for them to complete the job together?`,
              answer: (1 / (1 / workerA + 1 / workerB)).toFixed(2)
          };
      case 2: // Mixture problems
          const solutionA = Math.floor(Math.random() * 100) + 100;
          const concentrationA = Math.floor(Math.random() * 100) + 1;
          const solutionB = Math.floor(Math.random() * 100) + 100;
          const concentrationB = Math.floor(Math.random() * 100) + 1;
          return {
              question: `Solution A contains ${solutionA} ml with ${concentrationA}% concentration of a chemical. Solution B contains ${solutionB} ml with ${concentrationB}% concentration of the same chemical. What is the concentration in the resulting mixture?`,
              answer: ((solutionA * concentrationA + solutionB * concentrationB) / (solutionA + solutionB)).toFixed(2)
          };
      case 3: // Interest problems
          const principal = Math.floor(Math.random() * 1000) + 1000;
          const rate = Math.floor(Math.random() * 10) + 1;
          const timeYears = Math.floor(Math.random() * 5) + 1;
          return {
              question: `If you invest $${principal} at an annual interest rate of ${rate}%, what will be the total value of the investment after ${timeYears} years (simple interest)?`,
              answer: (principal * (1 + (rate / 100) * timeYears)).toFixed(2)
          };
      case 4: // Profit and loss
          const costPrice = Math.floor(Math.random() * 1000) + 500;
          const sellingPrice = Math.floor(Math.random() * 1000) + 500;
          return {
              question: `A product is bought for $${costPrice} and sold for $${sellingPrice}. What is the profit or loss percentage?`,
              answer: (((sellingPrice - costPrice) / costPrice) * 100).toFixed(2)
          };
  }
}

function generateRatioQuestion() {
  const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const questions = [
      {
          q: (x, y) => `A recipe requires a ratio of ${x}:${y} for ingredients A to B. If the total amount of both ingredients is ${x + y}00 grams, how many grams of ingredient B are used?`,
          a: (x, y) => (y / (x + y)) * (x + y) * 100
      },
      {
          q: (x, y) => `In a class, the ratio of students who prefer mathematics to those who prefer science is ${x}:${y}. If the difference in the number of students is ${Math.abs(x - y)}, how many students prefer science?`,
          a: (x, y) => (x > y ? y : x) * (Math.abs(x - y) / Math.abs(x - y))
      },
      {
          q: (x, y) => `A car's fuel efficiency ratio is ${x} km/L in the city and ${y} km/L on the highway. If a trip consists of ${x + y}0 km, equally split between city and highway, how many liters of fuel are used in total?`,
          a: (x, y) => ((x + y) * 10) / 2 / ((x + y) / 2)
      },
      {
          q: (x, y) => `A fruit salad is made with apples and bananas in a ratio of ${x}:${y}. If ${x + y} more bananas are added, the ratio becomes 1:1. How many apples were used originally?`,
          a: (x, y) => x === y ? (x + y) : (x + y) - y
      },
      {
          q: (x, y) => `In a survey, the ratio of people who prefer tea to coffee is ${x}:${y}. If ${x + y * 2} more people prefer coffee, the ratio becomes 1:2. How many people preferred tea in the original survey?`,
          a: (x, y) => x === y * 2 ? (x + y * 2) : x
      }
  ];

  const x = randomNum(1, 10);
  const y = randomNum(1, 10);
  const randomIndex = Math.floor(Math.random() * questions.length);
  const chosenQuestion = questions[randomIndex];

  return {
      question: chosenQuestion.q(x, y),
      answer: chosenQuestion.a(x, y).toFixed(2) // Answers rounded to two decimal places
  };
}


function generateQuestion() {
  const category = document.getElementById('categorySelect').value;
  let questionData;

  switch (category) {
      case 'algebra':
          questionData = generateAlgebraQuestion();
          break;
      case 'arithmetic':
          questionData = generateArithmeticQuestion();
          break;
      case 'geometry':
          questionData = generateGeometryQuestion();
          break;
      case 'dataAnalysis':
          questionData = generateDataAnalysisQuestion();
          break;
      case 'wordProblem':
          questionData = generateWordProblemQuestion();
          break;
      case 'ratio':
          questionData = generateRatioQuestion();
          break;
  }

  document.getElementById('question').textContent = questionData.question;
  currentAnswer = questionData.answer;
  document.getElementById('answerInput').value = '';
  document.getElementById('result').textContent = '';
}

function checkAnswer() {
  const userAnswer = parseFloat(document.getElementById('answerInput').value);
  if (userAnswer === currentAnswer) {
      document.getElementById('result').textContent = 'Correct!';
  } else {
      document.getElementById('result').textContent = `Incorrect. The correct answer is ${currentAnswer}.`;
  }
}
