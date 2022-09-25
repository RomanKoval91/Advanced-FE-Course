async function getRandomChinese(length) {
  let letters = "";

  for(let i = 0; i < length; i++) { 
    const sign = [Date.now()].join().slice(8);
    letters += String.fromCharCode(sign);
    await timeToWait (50)
  };

  return letters 
  }
  
  async function displayLet () {
    console.log(await getRandomChinese(4))
  } (displayLet())

  function timeToWait (ms) {
    return new Promise (resolve => setTimeout(resolve, ms));
  }


  
 









