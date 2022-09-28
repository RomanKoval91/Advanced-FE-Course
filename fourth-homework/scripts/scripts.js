const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];



// 1) Get Pairs

function getStudentsPairs(students) {
    const getPairs = []; 
    for (let i = 0; i < themes.length; i++) {
    const boys = students.filter(e => e.slice(-1) !== 'а');
    const girls = students.filter(e => e.slice(-1) === 'а');
    getPairs.push([boys[i], girls[i]].join(" i "));
    }                                                                                           
    return getPairs
    }

  
const pairs = getStudentsPairs(students);
console.log(pairs);



// 2) Get Pairs and Themes

function pairsAndThemes (pairs, themes) {
    for (let i = 0; i < pairs.length; i++) {
        pairAndTheme.push ([pairs[i], themes[i]]);
    }
    return pairAndTheme;
}

const pairAndTheme = [];
const theme = pairsAndThemes (pairs, themes);
console.log(theme); 



// 3) Student and his mark

function studentsAndMarks () {
    for (let i = 0; i < students.length; i++) {
        studentAndMark.push ([students[i], marks[i]]);
    }
    return studentAndMark
}

const studentAndMark = [];
const mark = studentsAndMarks (marks, students);
console.log(mark);



// 4) Random mark for the couple

function givePairAndMark () {
    for (let i = 0; i < pairs.length; i++) {
        const pairMark = Math.floor(Math.random() * (5 - 1) + 1);
        pairAndMark.push ([theme[i], pairMark]);
    }
    return pairAndMark
}

const pairAndMark = [];
const casualMark = givePairAndMark ();
console.log(casualMark); 







