function control_n_Number() {
    let number = 0;
    while (!number) {
      number = +prompt("Введіть перше число:");
      if (!number) {
        alert("Ви ввели літеру або інший символ.");
        number = null;
      }
      if (!Number.isInteger(number)) {
        alert("Число не є цілим або дорівнює 0!");
        number = null;
      } 
  
      if (number < 0) {
        alert("Замаленьке число!");
        number = null;
      }
    }
    return number;
  }

const nNumber = control_n_Number()
document.writeln ("<p><b> Перше число =</b>" + "\u00A0" + nNumber + "</p>");


function control_m_Number() {
    let number = 0;
    while (!number) {
      number = +prompt("Введіть друге число:");
      if (!number) {
        alert("Ви ввели літеру або інший символ.");
        number = null;
      }
      if (!Number.isInteger(number)) {
        alert("Число не є цілим або дорівнює 0!");
        number = null;
      } 
  
      if (number <= nNumber) {
        alert("Число менше або рівне попередньому");
        number = null;
      }
    }
    return number;
  }

  const mNumber = control_m_Number()
  document.writeln ("<p><b> Друге число =</b>" + "\u00A0" + mNumber + "</p>");




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

