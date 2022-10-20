let ballCost = 15.678;
let gloveCost = 123.965;
let shoesCost = 90.2345;

/* document.writeln("<p><b>Ціна м'яча</b> = " + ballCost + "$</p>");
document.writeln('<p><b>Ціна рукавиць</b> = ' + gloveCost + "$</p>");
document.writeln('<p><b>Ціна взуття</b> = ' + shoesCost + "$</p>"); */

let container = document.createElement("span");
container.setAttribute("id", "container")
container.style.color = "red";
container.innerHTML = "<p><b>Ціна м'яча</b> = " + ballCost + "$</p>"
document.body.append(container);

let container2 = document.createElement("span");
container2.setAttribute("id", "container2")
container2.style.color = "red";
container2.innerHTML = "<p><b>Ціна рукавиць</b> = " + gloveCost + "$</p>"
document.body.append(container2);

let container3 = document.createElement("span");
container3.setAttribute("id", "container")
container3.style.color = "red";
container3.innerHTML = "<p><b>Ціна взуття</b> = " + shoesCost + "$</p>"
document.body.append(container3);