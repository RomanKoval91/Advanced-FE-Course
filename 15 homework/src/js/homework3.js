// 1) Function #1

function findMax(numbers) {
   const separateNumbers = String(numbers).split("");

  return Math.max.apply (null, separateNumbers)
  }

const numbers = findMax (3412583498765);
console.log(numbers)

let container4 = document.createElement("span");
container4.setAttribute("id", "container")
container4.style.color = "red";
container4.innerHTML = "<b>Function #1</b> " + "= " + numbers + " --- Створити функцію яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.</p>"
document.body.append(container4);