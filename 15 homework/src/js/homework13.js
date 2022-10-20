
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

