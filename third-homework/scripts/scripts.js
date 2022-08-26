// 1) Function #1

numbers = findMax (2, 1011, 23, 66, -34, -450, 968);

function findMax() {
    let numbers = -Infinity; //didn't understand that
    for (i = 0; i < arguments.length; i++) {
      if (arguments[i] > numbers) { //?
        numbers = arguments[i];     //?
      }
    }
    return numbers;
  }

document.writeln ("<b>Function #1</b> " + "= " + findMax(numbers) + " --- Створити функцію яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.</p>")



// 2) Function #2

function powerNumber (base, power) {
    if (power === 1) return base*power; 
    return base*powerNumber(base, power - 1); //Why -1?
  }

document.writeln ("<b>Function #2 </b>" + "= " + powerNumber (2, 11) + " --- Створити функцію, яка визначає ступінь числа.</p>")



// 3) Function #3

function changeTheWord (userName) {

    const word = userName.split("");
    word[0] = word[0].toUpperCase();
    for (i = 1; i < word.length; i++) {
        word[i] = word[i].toLowerCase();
    }
    return word.join("");
  }

document.writeln ("<b>Function #3 </b>" + "= " + changeTheWord ("IGOR") + " --- Створити функцію, яка форматує ім'я, роблячи першу букву великою.</p>")


// 4) Function #4

function netSalary (fee, profit) {
    const feeMoney = (fee*profit) / 100;
    return profit - feeMoney;
  }

  document.writeln ("<b>Function #4 </b>" + "= " + netSalary (27, 1500) + " --- Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.</p>")



  // 5) Function #5

  function randomNumberInRange (N, M) {
    let randomNumber = Math.floor(Math.random() * (M - N) + N);
    return randomNumber
  }

  document.write("<b>Function #5</b> " + "= " + randomNumberInRange(1, 65) + " --- Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.</p>"); 


  // 6) Function #6

  function countLetter(string, find) {
    return (string.split(find)).length;
}

document.write("<b>Function #6</b> " + "= " + countLetter("Incomprehensibility", "i") + " --- Створити функцію, яка рахує скільки разів певна буква повторюється в слові. </p>");




// 7) Function #7

function valueConverter (value) {
    if (value.includes("$")) {
        number = value.replace("$", ""); //?
        return number * 35;
      } else if (value.includes("UAH")) {
        number = value.replace("UAH", ""); //?
        return Math.floor (number / 35)
      } 
}

document.write("<b>Function #7</b> " + "= " + valueConverter ("45000 UAH") + "$ --- Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. </p>");




// 9) Function #9

function randomPassword() {
    let password = '';
    let string = '0123456789';
      
    for (let i = 1; i <= 8; i++) {
        let char = Math.floor(Math.random()* string.length);
          
        password += string.charAt(char) // repeat "charAt" func
    }
      
    return password;
}


document.write("<b>Function #9 </b>" + "= " + randomPassword () + " --- Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.</p>");



// Function #10

function deleteLetter() {
    originalWord = 'abracadabra';
    newWord = originalWord.replace(/a/g, ''); //easy

return newWord
}

document.write("<b>Function #10 </b>" + "= " + deleteLetter ("a", "abracadabra") + " --- Створіть функцію, яка видаляє всі букви 'a' з речення. </p>");



// Function #11

function checkPalindromes (word) {
    return word === word.split('').reverse('').join(''); //ok word is splitted, reversedm reunited and controlled if word=reverseword
  }

  document.write("<b>Function #11-a </b>" + "= " + checkPalindromes("янесугусеня") + " --- Створіть функцію, яка перевіряє, чи є слово паліндромом. </p>");
  document.write("<b>Function #11-b</b> " + "= " + checkPalindromes("кокос") + " --- ///</p>");






// Function #12

function cancelDuplicateLetter(word) {
    word = word.split('');
    result = word.filter(function(value, i, word) { //did't understand this
    return word.lastIndexOf(value) === word.indexOf(value); // +- need an explanation here
    });

    return result.join('');
  }


document.write("<b>Function #12-a </b>" + "= " + cancelDuplicateLetter("I am Harry Potter!!!") + " --- Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.</p>");
document.write("<b>Function #12-b</b> " + "= " + cancelDuplicateLetter("Abracadabra!") + " --- ///</p>");

