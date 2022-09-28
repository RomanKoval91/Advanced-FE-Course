// 1) Function #1

function findMax(numbers) {
   const separateNumbers = String(numbers).split("");

  return Math.max.apply (null, separateNumbers)
  }

const numbers = findMax (3412583498765);
document.writeln ("<b>Function #1</b> " + "= " + numbers + " --- Створити функцію яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.</p>")
console.log(numbers)



// 2) Function #2

function powerNumber (base, power) {
    if (power === 1) { return base*power; }
    if (power < 0) {
    const positiveNumber = Math.abs(power);
    result = 1 / Math.pow(base, positiveNumber)
    return result
    }
    return base*powerNumber(base, power - 1); 
  }

document.writeln ("<b>Function #2 </b>" + "= " + powerNumber (2, -11) + " --- Створити функцію, яка визначає ступінь числа.</p>")
console.log (powerNumber (2, -11))



// 3) Function #3

function changeTheWord (name) {
    const word = name[0].toUpperCase() + name.substring(1).toLowerCase()
    return word
  }

const theWord = [changeTheWord ("IGOR")]
document.writeln ("<b>Function #3 </b>" + "= " + theWord + " --- Створити функцію, яка форматує ім'я, роблячи першу букву великою.</p>")
console.log(theWord)



// 4) Function #4

function netSalary (fee, profit) {
    const feeMoney = (fee*profit) / 100;
    return profit - feeMoney;
  }
   
  const salary = netSalary (27, 1500) 
  document.writeln ("<b>Function #4 </b>" + "= " + salary + "$ --- Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.</p>")
  console.log(salary)



// 5) Function #5

  function randomNumberInRange (N, M) {
    let randomNumber = Math.floor(Math.random() * (M - N) + N);
    return randomNumber
  }
  
  const randomN = randomNumberInRange(1, 65)
  document.write("<b>Function #5</b> " + "= " + randomN + " --- Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.</p>"); 
  console.log(randomN)



// 6) Function #6

function countLetter(word, letter) {
const wordToLowerCase = word.substring(1).toLowerCase();
const letterToLowerCase = letter.toLowerCase();
return (wordToLowerCase.split(letterToLowerCase)).length;
}

const lettersNumber = countLetter("Incomprehensibility", "i");
document.write("<b>Function #6</b> " + "= " + lettersNumber + " --- Створити функцію, яка рахує скільки разів певна буква повторюється в слові. </p>");
console.log(lettersNumber)



// 7) Function #7

function valueConverter (value) {
    if (value.includes("$")) {
        number = value.replace("$", ""); 
        return number * 4;
      } else if (value.includes("UAH")) {
        number = value.replace("UAH", ""); 
        return Math.floor (number / 40)
      } else if (value.includes("uah")) {
        number = value.replace("uah", ""); 
        return Math.floor (number / 40)
} else if (value.includes("Uah")) {
  number = value.replace("Uah", ""); 
  return Math.floor (number / 40)
}  }

const valueConv = valueConverter ("45000 Uah");
document.write("<b>Function #7</b> " + "= " + valueConv + "$ --- Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. </p>");
console.log(valueConv)



// 9) Function #9

const length = prompt ("Choose the length of your password")

function randomPassword(length = 8) {
    let password = '';
    let string = '0123456789';
      
    for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random()* string.length); 
        password += string.charAt(char) 
    }
      
    return Number(password);
}

const password = randomPassword (length);
document.write("<b>Function #9 </b>" + "= " + password + " --- Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.</p>");
console.log(password)



// Function #10

function deleteLetter(word) {
  originalWord = word.substring(1).toLowerCase()
  newWord = originalWord.replace(/a/g, ''); 
return [newWord]
}

const deletters = deleteLetter ("abracadabra");
document.write("<b>Function #10 </b>" + "= " + deletters + " --- Створіть функцію, яка видаляє всі букви 'a' з речення. </p>");
console.log (deletters)



// Function #11

function checkPalindromes (word) {
    return word === word.split('').reverse('').join(''); 
  }

  const palyndrome = checkPalindromes("янесугусеня");
  const palyndrome2 = checkPalindromes("кокос");
  document.write("<b>Function #11-a </b>" + "= " + palyndrome + " --- Створіть функцію, яка перевіряє, чи є слово паліндромом. </p>");
  document.write("<b>Function #11-b</b> " + "= " + palyndrome2 + " --- ///</p>");
  console.log(palyndrome)
  console.log(palyndrome2)
 


// Function #12

function cancelDuplicateLetter(word) {
    word = word.split('');
    result = word.filter(function(value, i, word) { //did't understand this
    return word.lastIndexOf(value) === word.indexOf(value); // +- need an explanation here
    });

    return result.join('');
  }

const dupLet1 = [cancelDuplicateLetter("I am Harry Potter!!!")];
const dupLet2 = [cancelDuplicateLetter("Abracadabra!")];
document.write("<b>Function #12-a </b>" + "= " + dupLet1 + " --- Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.</p>");
document.write("<b>Function #12-b</b> " + "= " + dupLet2 + " --- ///</p>");
console.log(dupLet1)
console.log(dupLet2)
