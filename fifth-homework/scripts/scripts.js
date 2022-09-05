
// 1° Function: Get Random Array

getRandomArray = (length, min, max) => [...Array(length)]
    .map(() => Math.round(Math.random() * (max - min) + min)).join(', ');

const getRandomNumbers = getRandomArray (15, 1, 100)
document.writeln ('Function #1 - Random Numbers: ' + getRandomNumbers + '</p>')
console.log(JSON.parse("[" + getRandomNumbers + "]"));

// 2° Function: Get Moda Number


function getModa(numbers) {
    const frequentNumber = []
  
    for (item of numbers) {
  
      frequentNumber[item] ? frequentNumber[item]++ : frequentNumber[item] = 1
    }  

    let compareNumbers = 0
  
    for (item in frequentNumber) {
      if (frequentNumber[item] > compareNumbers) {
        compareNumbers = frequentNumber[item]
        modeNumber = item
      }
    }
  }
  
  getModa([18, 35, 67, 8, 94, 13, 90, 8, 54, 8, 3, 8, 1, 3, 8, 7, 8]);

  console.log(parseInt(modeNumber))
  document.writeln('Function #2 - Mode Number: ' + parseInt(modeNumber) + '</p>')



  // 3° Function: Get Average Number

  const getAverage = array => array.reduce((a, b) => a + b) / array.length;

    const averageNumber = getAverage([18, 35, 67, 8, 94, 13, 90, 8, 54, 8, 3, 8, 1, 3, 8, 7, 8]);

  console.log(parseInt(averageNumber))
  document.writeln('Function #3 - Average Number: ' + Math.floor(averageNumber) + '</p>')



  // 4° Function: Get Median Number

  const getMedian = arr => {
    const median = Math.floor(arr.length / 2),
      numbers = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? numbers[median] : (numbers[median] + numbers[median]) / 2;
  };

  const medianNumber = getMedian([18, 35, 67, 8, 94, 13, 90, 8, 54, 8]);
  console.log(parseInt(medianNumber))
  document.writeln('Function #4 - Median Number: '+ Math.floor(medianNumber) + '</p>')




  // 5° Function: filterEvenNumbers


  function filterEvenNumbers (...numbers) { 
    
    const result = numbers.filter((n) => n % 2 !== 0).join(", ")

    return result
}
   
const notEven = filterEvenNumbers(18, 35, 67, 8, 94, 13, 90, 8, 54, 8, 3, 8, 1, 3, 8, 7, 8)
    document.writeln('Function #5 - Not Even Numbers: ' + notEven + '</p>')
    console.log(JSON.parse("[" + notEven + "]"));

    


    // 6° Function: Count Positive Numbers


  function countPositiveNumbers(...numbers) {

    let positiveCounter = [0];

    numbers.forEach( function(a) {if (a > 0)
        positiveCounter[0]++;} )

    return positiveCounter
    }



const postiveNumbers = countPositiveNumbers(90, -6, 54, -8, 32, -4, 56, -5,-3, -1);
document.writeln('Function #6 - Positive Numbers: ' + postiveNumbers + '</p>')
console.log(JSON.parse(postiveNumbers));




// 7° Function: Filter the Numbers not divisible for 5


function getDividedByFive(...numbers) {
let fives = numbers.filter((el) => el % 5 === 0).join(", ");
  
  return fives;
}

const divisibileFor5Numbers = getDividedByFive(90, 67, 54, 98, 95, 40, 41, 32, 56, 80, 75, 45, 34, 76, 80);
document.writeln('Function #7 - Numbers Divisible for 5: ' + divisibileFor5Numbers + '</p>')
console.log(JSON.parse("[" + divisibileFor5Numbers + "]"));



// 8° Function: Replace Bad Words

function clearBadWords (string) {
let badWords = /Shit|Fuck|Dumb/gi; // | - means "or"
let userReview = string.replace(badWords, '****');
return userReview
}

const badWordsReplaced = clearBadWords('Holy Shit!, Fuck off!, Fuck you!, Dumb fuck!, Fuck-Fuck-Fuck!' + 'Fuck!').split(" ").join(" ");
document.writeln('Function #8 - Bad Words Replaced: ' + badWordsReplaced + '</p>')
console.log(badWordsReplaced.split(', '));



// 9° Function: Divided by 3

function dividedByThree (word) {

const wordModified = word.toLowerCase().replaceAll(" ", "");
const newWord = wordModified.match(/.{1,3}/gi);

return newWord;
}


const wordDividedByThree = dividedByThree('Organizator');
document.writeln('Function #9 - Word Divided By 3: ' + wordDividedByThree + '</p>');
console.log(wordDividedByThree);


// 10° Function: Letters combination

function generateCombinations (word) {
    var combinations = [];

    for (var i in word) {
      var letter = word[i];

      generateCombinations (word.join('').replace(letter, '').split('')).concat("").map(function(wordOption) {
        combinations.push([letter].concat(wordOption));
      });
    }
    return combinations;
  };

  console.log(generateCombinations("sun".split('')).map(function(str) {
    return str.join('')
  }))

  document.writeln("Function #10 - Combined Letters of a Word: " + generateCombinations("sun".split('')).map(function(str) {
    return str.join('')
  }))


