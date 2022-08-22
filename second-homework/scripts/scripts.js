let nNumber = parseInt (prompt (("Введіть число")));
document.writeln ("<p><b> Перше число =</b>" + "\u00A0" + nNumber + "</p>");

while (!nNumber) {
    alert("Це не цифра");
    alert ("Введіть цифру");  
  
break
 }


let mNumber = parseInt (prompt (("Введіть друге число")));
document.writeln ("<p><b> Друге число =</b>" + "\u00A0" + mNumber + "</p>");

while (!mNumber) {
alert("Це не цифра");
alert ("Введіть цифру");

break
  }


let booleanChoise = confirm  (("Пропускати парні числа?"));
document.writeln ("<p><b>Пропускати парні числа? =</b>" + "\u00A0" + booleanChoise + "</p>");  

let result = 0;


for (i = nNumber; i <= mNumber; i++) {

    if (booleanChoise === true) 
    {
        result += i++;
    } 
    
    if (booleanChoise === false) 
    {
        result += i;
    }
}

document.writeln ("<p><b> Результат =</b>" + "\u00A0" + result + "</p>");  

