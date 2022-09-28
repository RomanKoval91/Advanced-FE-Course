const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


// Function #1 - Calculate The Salary

function getMyTaxes(salary) {
  return salary * this.tax;
}

const theSalary = getMyTaxes.call(ukraine, 1500);
document.writeln('<b>Function #1 - Calculate The Salary:</b> ' + theSalary + "</p>")
console.log(theSalary);



// Function #2 - Calculate the Middle Salary


function getMiddleTaxes() {
  return this.tax * this.middleSalary
}

const middleTaxes = getMiddleTaxes.call(ukraine);
document.writeln('<b>Function #2 - Calculate The Middle Taxes:</b> ' + middleTaxes + "</p>")
console.log(middleTaxes);



// Function #3 - Get the Total Taxes 

function getTotalTaxes(country) {
  
const result = this.tax*this.middleSalary*this.vacancies;
return result

}
const totalTaxes = getTotalTaxes.call(ukraine);
document.writeln('<b>Function #3 - Calculate The Total Taxes:</b> ' + totalTaxes + "</p>")
console.log(totalTaxes);


// Function #4 - Calculate My Salary

function getMySalary(country) {
  const min = 1500;
  const max = 2000;
  const salary = Math.floor(Math.random() * (max - min) + min);
 
 let myProfit = {
  salary: salary,
  taxes:  getMyTaxes.call(ukraine, 1500),
  profit: salary - getMyTaxes.call(ukraine, 1500),
}
console.log(myProfit)
}

setInterval(() => getMySalary.call(ukraine), 5000);





 

