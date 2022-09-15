let newMark = parseInt(prompt (("Введіть оцінку")))

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
  this.dismiss = true;
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

dismissed () {
   this.dismiss = false;
}

recovered () {
   this.dismiss = true;
}
}


class BudgetStudent extends Student {
  constructor(university, course, fullName, marks, scholarShip) 
  {
    super(university, course, fullName, marks);

  this.scholarShip = scholarShip;

  setInterval(function() { 
    console.log(this.getScholarship())}.bind(this), 30000);
  }

  getScholarship() {
    let sumMarks = 0;
    for (let el = 0; el < this.marks.length; el++) {
      sumMarks += this.marks[el];
    }
    const averageMark = sumMarks / this.marks.length

    if ((averageMark >= 4.0) && (this.dismiss === true)) {
    return "Ви отримали " + this.scholarShip + " грн. стипендії"
    } else {return "Ви не отримали стипендії";}
   
} 
}


const student = new Student (
  "Вищої Школи Психотерапії м.Одеса",
  "першо",
  "Остап " + "<s>Родоманський</s>" + " Бендер",
  [5, 4, 4, 5],
  [5, 4, 4, 5, newMark],
);

const budgetStudent = new BudgetStudent (
  "Вищої Школи Психотерапії м.Одеса",
  1,
  "Роман Родоманський",
  [4, 4, 5, 4, 4, 5],
  1400
);

// Code to Turn-Off the Student: student.dismissed(budgetStudent.dismissed())
// Code to Turn-On the Student: student.recovered(budgetStudent.recovered()) - it enough to delete the Code to Turn-Off

document.writeln("<b>Method #1: </b> " + student.getInfo() + "</p>")
console.log(student.getInfo())

document.writeln("<b>Method #2: </b> " + student.studentMarks() + "</p>")
console.log(student.studentMarks())

document.writeln("<b>Method #3: </b> " + student.setMark() + "</p>")
console.log(student.setMark())

document.writeln("<b>Method #4: </b> " + student.getAverageMark() + "</p>")
console.log(student.getAverageMark())

document.writeln("<b>Method #5: </b> " + budgetStudent.getScholarship() + "</p>")
console.log(budgetStudent.getScholarship())





