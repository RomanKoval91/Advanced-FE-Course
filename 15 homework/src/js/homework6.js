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

console.log(discipline);

let container6 = document.createElement("span");
container6.setAttribute("id", "container")
container6.style.color = "red";
container6.innerHTML = "<b> Function #1 - Get the Subject: </b>" + discipline + "</p>"
document.body.append(container6);



