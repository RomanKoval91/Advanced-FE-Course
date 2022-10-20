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



