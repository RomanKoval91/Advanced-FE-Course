let ballCost = 15.678;
let gloveCost = 123.965;
let shoesCost = 90.2345;

document.writeln("<p><b>Ціна м'яча</b> = " + ballCost + "$</p>");
document.writeln('<p><b>Ціна рукавиць</b> = ' + gloveCost + "$</p>");
document.writeln('<p><b>Ціна взуття</b> = ' + shoesCost + "$</p>");

let maxPrice = Math.max (ballCost, gloveCost, shoesCost)
document.writeln('<p><b>Максимальна ціна</b> = ' + maxPrice + "$</p>");

let minPrice = Math.min (ballCost, gloveCost, shoesCost)
document.writeln('<p><b>Мінімальна ціна</b> = ' + minPrice + "$</p>");

let sumOfProducts = ballCost + gloveCost + shoesCost
document.writeln('<p><b>Сума цін</b> = ' + sumOfProducts + "$</p>");

let approximatedPricesDownward = Math.floor (ballCost) + Math.floor (gloveCost) + Math.floor (shoesCost)
document.writeln('<p><b>Заокруглена сума цін</b> = ' + approximatedPricesDownward + "$</p>");

let approximatedToTheHundredth = Math.round(approximatedPricesDownward/100)*100;
document.writeln('<p><b>Заокруглена сума цін до сотих</b> = ' + approximatedToTheHundredth + "$</p>");

let boolean = approximatedPricesDownward % 2 == 0;
document.writeln('<p><b>Заокруглена ціна - це парне число</b> = ' + boolean + "</p>");

let theRest = 500 - sumOfProducts
let theFinalRest = Math.floor (theRest*100)/100
document.writeln('<p><b>Решта з 500$</b> = ' + theFinalRest + "$</p>");

let averagePriceValue = (ballCost + gloveCost + shoesCost)/3
let averageValue = Math.floor (averagePriceValue*100)/100
document.writeln('<p><b>Середня ціна</b> = ' + averageValue + "$</p>");

let randomDiscount = (Math.random()*100);
let randomDiscountApproximated = Math.floor (randomDiscount*100)/100
document.writeln('<p><b>Знижка</b> = ' + randomDiscountApproximated + "\u00A0"  +  "%" + "</p>");

let discount = sumOfProducts*randomDiscount/100 
let discountPrice = Math.floor (discount*100)/100
let price = sumOfProducts-discountPrice
let finalPrice = Math.floor (price*100)/100
document.writeln('<p><b>Сума знижки</b> = ' + discountPrice  +  "$</p>");
document.writeln('<p><b>Скільки потрібно заплатити клієнту</b> = ' + finalPrice  +  "$</p>");

let netGain = sumOfProducts/2 - discountPrice
let netGainText = Math.floor (netGain*100)/100
document.writeln('<p><b>Чистий прибуток</b> = ' + netGainText  +  "$</p>");
