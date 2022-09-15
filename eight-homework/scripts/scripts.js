let newMark = parseInt(prompt (("Введіть оцінку")))
while (!newMark) {
  newMark = +prompt("Введені дані не є оцінкою! Введіть оцінку:");
}
while (!Number.isInteger(newMark)) {
  newMark = +prompt("Ви ввели не ціле число. Введіть ціле число:");
}


class Student {
  constructor(university, course, fullName, marks, newMarks, dismiss) 
  {
  this.university = university;
  this.course = course;
  this.fullName = fullName;
  this.marks = marks;
  this.newMarks = newMarks;
  this.dismiss = dismiss;
  } 

  getInfo() {

    if (this.dismiss == true) { return "Студент " + this.course + "го курсу " + this.university + ", " + this.fullName;}
    return null;
  }

  studentMarks()  {

    if (this.dismiss == true) {return this.marks;}
    return null;
  }

  setMark () {
    if (this.dismiss == true) {return this.newMarks}
    return null;
  }


  getAverageMark () {

let sumMarks = 0;
for (let el = 0; el < this.newMarks.length; el++) {
  sumMarks += this.newMarks[el];
}
if (this.dismiss == true) {
return sumMarks / this.newMarks.length}

return null;
} 

dismiss () {
   this.dismiss = false;
}

recover () {
   this.dismiss = true;
}
}


const student = new Student (
  "Вищої Школи Психотерапії м.Одеса",
  "першо",
  "Остап " + "<s>Родоманський</s>" + " Бендер",
  [5, 4, 4, 5],
  [5, 4, 4, 5, newMark],
  true
);



document.writeln("<b>Method #1: </b> " + student.getInfo() + "</p>")
console.log(student.getInfo())

document.writeln("<b>Method #2: </b> " + student.studentMarks() + "</p>")
console.log(student.studentMarks())

document.writeln("<b>Method #3: </b> " + student.setMark() + "</p>")
console.log(student.setMark())

document.writeln("<b>Method #4: </b> " + student.getAverageMark() + "</p>")
console.log(student.getAverageMark())



// Advanced

class BudgetStudent extends Student { 
constructor (university, course, fullName, marks, newMarks, dismiss, scholarship)
{
  this.scholarship = scholarship;
} 

getScolarship () {

}

}