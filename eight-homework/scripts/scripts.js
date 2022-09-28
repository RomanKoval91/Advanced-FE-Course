class Student {
  constructor(university, course, fullName, marks, newMarks) {
  this.university = university;
  this.course = course;
  this.fullName = fullName;
  this.marks = marks;
  this.newMarks = newMarks;
  this.dismiss = true;
  } 

  getInfo() {
    return this.dismiss ? "Студент " + this.course + "го курсу " + this.university + ", " + this.fullName : null
  }

  studentMarks()  {
return this.dismiss ? this.marks : null
  }

  setMark () {
return this.dismiss ? this.newMarks : null
  }

  getAverageMark () {

let sumMarks = 0;
for (let el = 0; el < this.newMarks.length; el++) {
  sumMarks += this.newMarks[el];
}
return this.dismiss ? sumMarks / this.newMarks.length : null
 } 

dismissed () {
   this.dismiss = false;
 }

recovered () {
   this.dismiss = true;
 } 
}



class BudgetStudent extends Student {
  constructor(university, course, fullName, marks, newMarks, scholarShip) {
    super(university, course, fullName, marks, newMarks);
  this.scholarShip = scholarShip;
  setInterval(function() { 
    console.log(this.getScholarship())}.bind(this), 30000);
  }

  getScholarship() {
    let sumMarks = 0;
    for (let el = 0; el < this.newMarks.length; el++) {
      sumMarks += this.newMarks[el];
    }
    const averageMark = sumMarks / this.newMarks.length

  return ((averageMark >= 4.0) && (this.dismiss === true)) ? 
    ["Студент " + this.course + "го курсу " + this.university + ", " + this.fullName + " отримав " + this.scholarShip + " грн. стипендії"] : 
    ["Ви не отримали стипендії " + this.scholarShip + "грн."]
 } 
}

function controlMark() {
  let mark = 0;
  while (!mark) {
    mark = +prompt("Введіть оцінку:");
    if (!mark) {
      alert("Ви ввели літеру або інший символ.");
      mark = null;
    }
    if (!Number.isInteger(mark)) {
      alert("Число не є цілим або дорівнює 0!");
      mark = null;
    } 

    if (mark > 5) {
      alert("Завелике число!");
      mark = null;
    }
  }
  return mark;
}

newMark = controlMark()

const student = new Student (
  "Вищої Школи Психотерапії м.Одеса",
  "першо",
  "Остап " + "<s>Родоманський</s>" + " Бендер",
  [5, 4, 4, 5],
  [5, 4, 4, 5, newMark],
);

const budgetStudent = new BudgetStudent (
  "Львівської Академії Мистецтв",
  "друго",
  "Роман Родоманський",
  [5, 4, 5, 4, 5],
  [5, 4, 4, 5, newMark],
  1400
);

// Code to Turn-Off the Student: student.dismissed(budgetStudent.dismissed())
// Code to Turn-On the Student: student.recovered(budgetStudent.recovered()) - it enough to delete the Code to Turn-Off

document.writeln("<b>Method #1: </b> " + student.getInfo() + "</p>")
console.log([student.getInfo()])

document.writeln("<b>Method #2: </b> " + student.studentMarks() + "</p>")
console.log(student.studentMarks())

document.writeln("<b>Method #3: </b> " + student.setMark() + "</p>")
console.log(student.setMark())

document.writeln("<b>Method #4: </b> " + student.getAverageMark() + "</p>")
console.log(student.getAverageMark())

document.writeln("<b>Method #5: </b> " + budgetStudent.getScholarship() + "</p>")
console.log(budgetStudent.getScholarship())





