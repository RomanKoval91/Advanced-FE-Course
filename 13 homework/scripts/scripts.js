
async function getStarships() {
  if (ctnPlanets) {
    ctnPlanets.remove()
  }
  if (ctnCharacters) {
    ctnCharacters.remove()
    }
  if (document.getElementById("fifthEpisodeStarships") != null) {
    return;
  }

  const square = document.createElement("div");
  square.setAttribute("id", "fifthEpisodeStarships");
  main.append(square);
  square.style.cssText = "width: 1200px; height: 800px; margin: auto; margin-top: 2.5%; display: flex; flex-wrap: wrap; flex-direction: row";
  
  document.querySelector('.overlay').classList.add('active');
  const people = fetch("https://swapi.dev/api/films/2/").then(data => {
    return data.json();
  }).then(films => {
    films.starships.forEach(url => {
      const request = fetch(url).then(d => d.json()).then(starship => {    
        const wrapper = document.createElement("div")
        square.append(wrapper);
        wrapper.innerHTML = '<div class="card card-starships"><h1>' + starship.name + '</h1>' + 
        '<h3><p>Birth Yearh: ' + starship.model + '</p></h3>' + 
        '<p>Gender: ' + starship.cost_in_credits + '</p></div>';
        
      })     
    })   
    document.querySelector('.overlay').classList.remove('active');
  })   
}

const ctnPlanets = document.getElementById("ctn-main");
const main = document.getElementById("main")
const ctnCharacters = document.getElementById("ctn-characters")
const buttonWrapper = document.getElementById("buttonWrapper")
let URL_Planets = "https://swapi.dev/api/planets/?page=1";
let nextPlanets;
let previousPlanets;



function compareButton () {
  
  getPlanets()

  window.setTimeout(_ => main.append(ctnPlanets), 1500);

if (document.getElementById("compareButton"))
{
  document.getElementById("compareButton").remove()
}
const firstFunctionOutput  = document.getElementById("fifthEpisodeStarships");
  if (firstFunctionOutput) {
    firstFunctionOutput.remove()
  }
  if (ctnCharacters) {
    ctnCharacters.remove()
    }
  

const prevButton = document.createElement ("button");
prevButton.innerText = "Prev Page"
const nextButton = document.createElement ("button");
nextButton.innerText = "Next Page"
prevButton.setAttribute("id", "planets-previous")
nextButton.setAttribute("id", "planets-next")
buttonWrapper.append(prevButton)
buttonWrapper.append(nextButton)
prevButton.addEventListener("click", pagePreviousPlanets);
nextButton.addEventListener("click", pageNextPlanets)
}



async function getPlanets() {

  const firstFunctionOutput  = document.getElementById("fifthEpisodeStarships");
  if (firstFunctionOutput ) {
    firstFunctionOutput.remove()
  }
  if (ctnCharacters) {
    ctnCharacters.remove()
    }

  document.querySelector('.overlay').classList.add('active');
  let results = await fetch(URL_Planets);
  const data = await results.json();
  nextPlanets = data.next;
  previousPlanets = data.previous;
  planets = data.results;
  let outPut = '';
 

  document.querySelector('.overlay').classList.remove('active');
  planets.forEach(item => {
   outPut += `<div class="card card-planet">
                  <h2>${item.name}</h2>
                  <h5>Climate: ${item.climate}</h5>
                  <h5>Terrain: ${item.terrain}</h5>
                  <h5>Population: ${item.population}</h5>
               </div>`          
  })
  ctnPlanets.innerHTML = outPut
}



function pageNextPlanets() {
  window.setTimeout(_ => main.append(ctnPlanets), 1500);
  
  const firstFunctionOutput  = document.getElementById("fifthEpisodeStarships");
  if (firstFunctionOutput) {
    firstFunctionOutput.remove()
  }
  if (ctnCharacters) {
    ctnCharacters.remove()
    }


  if(nextPlanets) {
    URL_Planets = new URL(nextPlanets);
  }
  getPlanets()
    .then(response => { 
    console.log(`Success: Planets`);
  })
    .catch(error => { 
    console.log(`error!`)
    console.error(error) 
  });
}

function pagePreviousPlanets() {
  window.setTimeout(_ => main.append(ctnPlanets), 1500);

  const firstFunctionOutput  = document.getElementById("fifthEpisodeStarships");
  if (firstFunctionOutput) {
    firstFunctionOutput.remove()
  }
  if (ctnCharacters) {
    ctnCharacters.remove()
    }
  if(previousPlanets) {
    URL_Planets = new URL(previousPlanets);
  }
  getPlanets()
    .then(response => { 
    console.log(`Success: Planets`);
  })
    .catch(error => { 
    console.log(`error!`)
    console.error(error) 
  });
}



function getFilmsButtons () {
if (getFilms) {
  getFilms.remove()
}

window.setTimeout(_ => document.body.append(main), 1500);

const filmsButtonsWrapper = document.getElementById("filmsButtonsWrapper")

const firstFilm = document.createElement("button")
firstFilm.innerText = "The Phantom Menace"
filmsButtonsWrapper.append(firstFilm)
firstFilm.setAttribute("value", "4")
firstFilm.addEventListener("click", starWars);
const secondFilm = document.createElement("button")
secondFilm.innerText = "Attack of the Clones"
filmsButtonsWrapper.append(secondFilm)
secondFilm.addEventListener("click", starWars);
secondFilm.setAttribute("value", "5")
const thirdFilm = document.createElement("button")
thirdFilm.innerText = "Revenge of the Sith"
filmsButtonsWrapper.append(thirdFilm)
thirdFilm.addEventListener("click", starWars);
thirdFilm.setAttribute("value", "6")
const fourthFilm = document.createElement("button")
fourthFilm.innerText = "A New Hope"
filmsButtonsWrapper.append(fourthFilm)
fourthFilm.addEventListener("click", starWars);
fourthFilm.setAttribute("value", "1")
const fifthFilm = document.createElement("button")
fifthFilm.innerText = "The Empire Strikes Back"
filmsButtonsWrapper.append(fifthFilm)
fifthFilm.addEventListener("click", starWars);
fifthFilm.setAttribute("value", "2")
const sixthFilm = document.createElement("button")
sixthFilm.innerText = "The Return of the Jedi"
filmsButtonsWrapper.append(sixthFilm)
sixthFilm.addEventListener("click", starWars);
sixthFilm.setAttribute("value", "3")
}

async function characterData(el) {
  
  window.setTimeout(_ => main.append(ctnCharacters), 1500);

  let response = await fetch(el);
  let character = await response.json();
  ctnCharacters.innerHTML += `<div class="card card-pc">
  <h2>${character.name}</h2>
  <h5>Birth Year: ${character.birth_year}</h5>
  <h5>Skin Color: ${character.skin_color}</h5>
  <h5>Gender: ${character.gender}</h5>
</div>`;
}


async function starWars(e) {
  
  if (ctnPlanets) {
    ctnPlanets.remove()
  }

  if (ctnCharacters) {
    ctnCharacters.remove()
  }

  const firstFunctionOutput  = document.getElementById("fifthEpisodeStarships");
  if (firstFunctionOutput) {
    firstFunctionOutput.remove()
  }

  window.setTimeout(_ => main.append(ctnCharacters), 1500);

  document.querySelector('.overlay').classList.add('active');

  let event = e.target;
  if (document.getElementById("fifthEpisodeStarships")) {
    document.getElementById("fifthEpisodeStarships").remove
  }
  console.log(event.value);
  ctnCharacters.innerHTML = "";
      let response = await fetch(`https://swapi.dev/api/films/${event.value}`);
      let fiveEpisod = await response.json();
      fiveEpisod.characters.forEach((el) => {
        characterData(el);
      })
      document.querySelector('.overlay').classList.remove('active');
  } 
