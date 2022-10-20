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


