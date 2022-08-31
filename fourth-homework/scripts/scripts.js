const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];


// 1) Get Pairs

function getStudentsPairs(students) {

    const girls = ["Олена", "Іра", "Світлана"];
    const boys = ["Олексій", "Олександр", "Ігор"];

    for (let z = 0; z < boys.length; z++) {
        getPairs.push([boys[z], girls[z]]);
    }
    return getPairs;
}

const getPairs = [];
const pairs = getStudentsPairs(students);
console.log(pairs);




// 2) Get Pairs and Themes


arrayPairs = ["Олексій i Олена", "Олександр i Іра", "Ігор i Світлана"]

function pairsAndThemes (themes, students) {
    for (let i = 0; i < students.length; i++) {
        pairAndTheme.push ([arrayPairs[i], students[i]]);
    }
    return pairAndTheme;
}

const pairAndTheme = [];
const theme = pairsAndThemes (getPairs, themes);
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

const arrayPairsAndThemes = ["Олексій i Олена, Диференційне рівняння", "Олександр i Іра, Теорія автоматів", "Ігор i Світлана, Алгоритми і структури даних" ]

function givePairAndMark () {

    for (let i = 0; i < pairs.length; i++) {
        const pairMark = Math.floor(Math.random() * (5 - 1) + 1);
        pairAndMark.push ([arrayPairsAndThemes[i], pairMark]);
    }
    return pairAndMark
}

const pairAndMark = [];
const casualMark = givePairAndMark ();
console.log(casualMark); 







