const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
} ];




// 1° Function

function getSubjects(students) {
const predmet = (Object.keys(students.subjects).join(" "));
const predmet2 = predmet.split(" ");

for (let i = 0; i < predmet2.length; i++) {
  predmet2[i] = predmet2[i][0].toUpperCase() + predmet2[i].slice(1);
}

return [predmet2.join(", ").replaceAll('_', ' ')]
}
const discipline = getSubjects (students[0]);
document.writeln('<b> Function #1 - Get the Subject: </b>' + discipline + "</p>")
console.log(discipline);




// 2° Function

function getAverageMark (students) {
  const marks = Object.values(students.subjects).flat(1)
  let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}
  
const marksLenght = Object.values(students.subjects).flat(1).length;
const finalAverageMark = sum / marksLenght;
return [finalAverageMark.toFixed(2)] 

}

const averageMark = getAverageMark (students[0]);
document.writeln('<b> Function #2 - Get the Average Mark: </b>' + averageMark + "</p>")
console.log(averageMark);



// 3° Function

function getStudentInfo(students) {
const studentName = [ "<p> -  Name: " + Object.values(students.name).join("") + "</p>"]
const studentYear = [" - Course: " + students.course + "</p>" ] 
const averageMark = [" - Average Mark: " + getAverageMark(students) ]
return [studentName + studentYear + averageMark]
}


const studentInfo = getStudentInfo (students[0]);
document.writeln('<b>Function #3 - Get the Student Info:</b> ' + studentInfo + "</p>")
console.log(studentInfo);


// 4° Function

function getStudentsNames (students) {
  const namesOfStudents = students.map((el) => el.name).sort();
  return [namesOfStudents.join(", ")];
}

const studentsNames = getStudentsNames (students);
document.writeln('<b>Function #4 - Get the Students Names:</b> ' + studentsNames + "</p>")
console.log(studentsNames);


//5° Function

function getBestStudent (students) {
  const bestAverageMark = students.reduce((a, b) => {
     if (getAverageMark(a) > getAverageMark(b)) {
       return a;
     } else {
       return b;
    }
  });

  return [bestAverageMark.name];
}

const bestStudent = getBestStudent (students);
document.writeln('<b>Function #5 - Get the Best Student:</b> ' + bestStudent + "</p>")
console.log(bestStudent);

const bestStudent = getBestStudent (students);
document.writeln('<b>Function #5 - Get the Best Student:</b> ' + bestStudent + "</p>")
console.log(bestStudent);



//6° Function


function calculateWordLetters(word) {
  let wordSplitted = {};

  for (let letter of word) {
    wordSplitted[letter] = wordSplitted.hasOwnProperty(letter) ? wordSplitted[letter] + 1 : 1;
  }

  return wordSplitted;
}

const wordCalc = calculateWordLetters ("programmer");
document.writeln('<b>Function #6 - Calculate The Letters:</b> ' + {wordCalc} + "</p>")
console.log(wordCalc);
