const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];



// 1) Get Pairs

function getStudentsPairs(students) { const getPairs = []; 
    for (let i = 0; i < themes.length; i++) {
    const boys = students.filter(e => e.slice(-1) !== 'а');
    const girls = students.filter(e => e.slice(-1) === 'а');
    getPairs.push([boys[i], girls[i]]);
    }                                                                                           
    return getPairs }

  
const pairs = getStudentsPairs(students);
console.log(pairs);



