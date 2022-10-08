// 1° Function: Get Random Array

function getRandomArray (length, min, max) {
  if (max > min) {
    return [...Array(length)].map(() => Math.round(Math.random() * (max - min)));
  }  
  else return null
  }                                                 
  const getRandomNumbers = getRandomArray (15, 1, 100)
  document.writeln ('Function #1 - Random Numbers: ' + getRandomNumbers + '</p>')
  console.log (getRandomNumbers)
  
  
  
  // 2° Function: Get Moda Number
  
  function getModa(numbers) {
    let min = 0, mode = [], count = [];
    let arrayNumbers = numbers.filter((el) => Number.isInteger(el));
  
    for (let number of arrayNumbers) { count[number] = (count[number] || 0) + 1;
        if (count[number] > min) { min = count[number];
            mode = [number];
            continue; } 
        if (count[number] === min) { mode.push(number);}
    }
    return mode;
  }
  const moda = getModa([18, 666.5, 35, 67, 76.3, 50, 55.1, 8, 94, 13, 90, 8, 54, 8, 3, 8, 1, 3, 8, 7, 8, 18, 18, 18, 18, 18, 18.9, 91.8, 100.1]);
  console.log(moda);
  document.writeln('Function #2 - Mode Number: ' + moda + '</p>'); 
  
  
  
  // 3° Function: Get Average Number
  
  function getAverage (...numbers) {
    let numbersArray = [...numbers].filter((el) => Number.isInteger(el));
    const sumNumbers = numbersArray.reduce((a, b) => a + b) 
    return Math.floor(sumNumbers/numbersArray.length)
  }
  const averageNumber = getAverage(18, 35, 67, 8, 94, 13, 90, 8, 54, 8, 3, 8, 1, 3, 8, 7, 8, 666.5);
   console.log(parseInt(averageNumber));
   document.writeln('Function #3 - Average Number: ' + averageNumber + '</p>');
  
  
  
  // 4° Function: Get Median Number
  
  const getMedian = arr => {
    arr = [...arr].filter((el) => Number.isInteger(el));
    const median = arr.length / 2,
    numbers = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? numbers[median] : (numbers[median] + numbers[median]) / 2;
  };
  const medianNumber = getMedian([18, 35, 67, 8, 94, 13, 90, 8, 54, 8, 666.5]);
  console.log(parseInt(medianNumber));
  document.writeln('Function #4 - Median Number: '+ medianNumber + '</p>');
  
  
  
  // 5° Function: filterEvenNumbers
  
    function filterEvenNumbers (...numbers) { let numbersArray = [...numbers].filter((el) => Number.isInteger(el));
      const result = numbersArray.filter((n) => n % 2 !== 0)
      return result }
  const notEven = filterEvenNumbers(18, 35, 67, 8, 94, 13, 90, 8, 54, 8, 3, 8, 1, 3, 8, 7, 8, 666.5)
  document.writeln('Function #5 - Not Even Numbers: ' + notEven + '</p>')
  console.log(notEven);
  
      
  
  // 6° Function: Count Positive Numbers
  
    function countPositiveNumbers(...numbers) {
      let numbersArray = [...numbers].filter((el) => Number.isInteger(el));
      let positiveNumbers = numbersArray.filter((number) => {
        if (number > 0) { return number; }
     })
     return positiveNumbers.length;
  }   
  const postiveNumbers = countPositiveNumbers(90, -6, 54, -8, 32, -4, 56, -5,- 3, -1, 666.5);
  document.writeln('Function #6 - Positive Numbers: ' + postiveNumbers + '</p>')
  console.log(postiveNumbers);
  
  
  
  // 7° Function: Filter the Numbers not divisible for 5
  
  function getDividedByFive(...numbers) { let numbersArray = [...numbers].filter((el) => Number.isInteger(el));
  let fives = numbersArray.filter((el) => el % 5 === 0);
  return fives; }
  const divisibileFor5Numbers = getDividedByFive(90, 67, 54, 98, 95, 40, 41, 32, 56, 80, 75, 45, 34, 76, 80, 65.5);
  document.writeln('Function #7 - Numbers Divisible for 5: ' + divisibileFor5Numbers + '</p>')
  console.log(divisibileFor5Numbers);
  
  
  
  // 8° Function: Replace Bad Words
  
  function clearBadWords (string) { const badWord = prompt("Insert the new bad word")
  let badWords = new RegExp ('Shit|Fuck|Dumb|' + badWord, 'gi')
  let userReview = string.replace(badWords, '****')
  return userReview }
  const badWordsReplaced = clearBadWords('Holy Shit!, Fuck off!, Fuck you!, Dumb fuck!, Fuck-Fuck-Fuck!' + 'Fuck!');
  document.writeln('Function #8 - Bad Words Replaced: ' + badWordsReplaced + '</p>')
  console.log(badWordsReplaced);
  
  
  
  // 9° Function: Divided by 3
  
  function dividedByThree (word) { const wordModified = word.toLowerCase().replaceAll(" ", "");
  const newWord = wordModified.match(/.{1,3}/gi);
  return newWord;  }
  const wordDividedByThree = dividedByThree('Organizator');
  document.writeln('Function #9 - Word Divided By 3: ' + wordDividedByThree + '</p>');
  console.log(wordDividedByThree);
  
  
  // 10° Function: Letters combination
  
  function generateCombinations(word) { const resultComb = [];
    if (word.length <= 1) { return word.length == 0 ? [] : [word]; }
    for (let i = 0; i < word.length; i++) { const newArr = word.slice(0, i) + word.slice(i + 1); 
     const others = generateCombinations(newArr);
     others && others.forEach((item) => { resultComb.push(word[i] + item); });
    }
    return [...new Set(resultComb)];
   };
   const wordCombinated = generateCombinations('dog');
   console.log(wordCombinated);
   document.writeln("Function #10 - Combined Letters of a Word: " + generateCombinations("dog"));
 


