function playC_Note() {
    const doNote = document.getElementById("Do");
    doNote.play();
    document.querySelector(".Do_note_button").classList.toggle('active');
  }

  function playD_Note() {
    const ReNote = document.getElementById("Re");
    ReNote.play();
    document.querySelector(".Re_note_button").classList.toggle('active');
  }

  function playE_Note() {
    const ReNote = document.getElementById("Mi");
    ReNote.play();
    document.querySelector(".Mi_note_button").classList.toggle('active');
  }

  function playF_Note() {
    const ReNote = document.getElementById("Fa");
    ReNote.play();
    document.querySelector(".Fa_note_button").classList.toggle('active');
  }

  function playG_Note() {
    const ReNote = document.getElementById("Sol");
    ReNote.play();
    document.querySelector(".Sol_note_button").classList.toggle('active');
  }

  function playA_Note() {
    const ReNote = document.getElementById("La");
    ReNote.play();
    document.querySelector(".La_note_button").classList.toggle('active');
  }

  function playB_Note() {
    const ReNote = document.getElementById("Si");
    ReNote.play();
    document.querySelector(".Si_note_button").classList.toggle('active');
  }

  function playC5_Note() {
    const doNote5 = document.getElementById("Do+");
    doNote5.play(); 
    document.querySelector(".Do5_note_button").classList.toggle('active');
}




  document.addEventListener("keypress", function(keypress) {
    switch (keypress.code) {
        case "KeyC":
          const doNote = document.getElementById("Do")
          doNote.play();
          document.querySelector(".Do_note_button").classList.toggle('active');
          break;

        case "KeyD":
          const reNote = document.getElementById("Re")
          reNote.play();
          document.querySelector(".Re_note_button").classList.toggle('active');
          break;
        
        case "KeyE":
          const MiNote = document.getElementById("Mi")
          MiNote.play();
          document.querySelector(".Mi_note_button").classList.toggle('active');
          break;
        
        case "KeyF":
          const FaNote = document.getElementById("Fa")
          FaNote.play();
          document.querySelector(".Fa_note_button").classList.toggle('active');
          break;

        case "KeyG":
          const SolNote = document.getElementById("Sol")
          SolNote.play();
          document.querySelector(".Sol_note_button").classList.toggle('active');
          break;

        case "KeyA":
          const LaNote = document.getElementById("La")
          LaNote.play();
          document.querySelector(".La_note_button").classList.toggle('active');
          break;
        
        case "KeyB":
          const SiNote = document.getElementById("Si")
          SiNote.play();
          document.querySelector(".Si_note_button").classList.toggle('active');
          break;

          case "KeyV":
            const doNote5 = document.getElementById("Do+")
            doNote5.play();
            document.querySelector(".Do5_note_button").classList.toggle('active');
            break;
    } 

});


document.addEventListener("keyup", function(keyup) {
    switch (keyup.code) {
        case "KeyC":
         const endPlayNoteDo = document.getElementById("Do")
         endPlayNoteDo.load();
         document.querySelector(".Do_note_button").classList.toggle(".Do_note_button");
        
        case "KeyD":
         const endPlayNoteRe = document.getElementById("Re")
         endPlayNoteRe.load();
         document.querySelector(".Re_note_button").classList.toggle(".Re_note_button");

        case "KeyE":
         const endPlayNoteMi = document.getElementById("Mi")
         endPlayNoteMi.load();
         document.querySelector(".Mi_note_button").classList.toggle(".Mi_note_button");

        case "KeyF":
         const endPlayNoteFa = document.getElementById("Fa")
         endPlayNoteFa.load();
         document.querySelector(".Fa_note_button").classList.toggle(".Fa_note_button");

        case "KeyG":
         const endPlayNoteSol = document.getElementById("Sol")
         endPlayNoteSol.load();
         document.querySelector(".Sol_note_button").classList.toggle(".Sol_note_button");

        case "KeyA":
         const endPlayNoteLa = document.getElementById("La")
         endPlayNoteLa.load();
         document.querySelector(".La_note_button").classList.toggle(".La_note_button");
        
        case "KeyB":
         const endPlayNoteSi = document.getElementById("Si")
         endPlayNoteSi.load();
         document.querySelector(".Si_note_button").classList.toggle(".Si_note_button");

        case "KeyV":
         const endPlayNoteDo5 = document.getElementById("Do+")
         endPlayNoteDo5.load();
         document.querySelector(".Do5_note_button").classList.toggle(".Do5_note_button");
    }
});

