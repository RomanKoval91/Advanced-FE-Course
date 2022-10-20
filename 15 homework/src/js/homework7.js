const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


// Function #1 - Calculate The Salary

function getMyTaxes(salary) {
  return salary * this.tax;
}

const theSalary = getMyTaxes.call(ukraine, 1500);

console.log(theSalary);


let container7 = document.createElement("span");
container7.setAttribute("id", "container")
container7.style.color = "red";
container7.innerHTML = "<b>Function #1 - Calculate The Salary:</b> " + theSalary + "</p>"
document.body.append(container7);



 

