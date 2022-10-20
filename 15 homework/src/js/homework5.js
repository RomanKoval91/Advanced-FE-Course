
  
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

   
   let container5 = document.createElement("span");
   container5.setAttribute("id", "container")
   container5.style.color = "red";
   container5.innerHTML = "<p> <b>Function #10 - Combined Letters of a Word:</b> " + generateCombinations("dog") + "</p>"
   document.body.append(container5);

