// First Function

const numberGenerator = generator();

function* generator() {
  let number = 0;
  while (true) 
    yield number++;
}

function numberOutput() {
   const firstButton = document.getElementById("firstButton")
   firstButton.innerHTML = "Next Number"

  document.getElementById("number").innerText = `Number Generator: ${
    numberGenerator.next().value
  }`;
}



// Second Function

const sizeGenerator = changeTextSize(14);

function* changeTextSize(size) {
  while (true) {
    const value = yield;
    if (value === "up") {
      size = size + 2;
      yield size;
    } else if (value === "down") {
      size = size - 2;
      yield size;
    } else {
      yield size;
    }
  }
}


function Bigger(){
  sizeGenerator.next();
  document.getElementById("paragraph1").style.fontSize = `${sizeGenerator.next("up").value}px`;
}

function Littlier(){
  sizeGenerator.next();
  document.getElementById("paragraph1").style.fontSize = `${sizeGenerator.next("down").value}px`;

}


