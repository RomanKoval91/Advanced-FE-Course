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


