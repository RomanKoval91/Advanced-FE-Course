function displaySquares() {
  const squares = document.createElement("squares");
  document.body.append(squares);
  squares.style.cssText = "width: 300px; height: 300px; margin: auto; margin-top: 12.5%; display: flex; flex-wrap: wrap";

  for (let i = 0; i < 25; i++) {
      const square = document.createElement("square");
      squares.append(square);
      square.style.cssText = `
      width: 50px;
      height: 50px;
      margin-right: 2px;
      margin-bottom: 2px;
      border-radius: 10px;
      border-style: solid;
      border-width: 3px;
      border-color: black;
      background-color: ${getColor()};
     `
  }
  return squares
}

displaySquares ()

function getColor() {
  hexaCode = "0123456789abcdef";
  hexaSymbol = "#"
  for (var i = 0; i < 6; i++) {
    hexaSymbol += hexaCode[Math.floor(Math.random() * 16)];
  }
  return hexaSymbol;
}


function colorChange() {
      let square = document.getElementsByTagName("square");
      for (let i = 0; i < square.length; i++) 
      {
        square[i].style.backgroundColor = getColor();
      }
  }
  
setInterval(colorChange, 500)


