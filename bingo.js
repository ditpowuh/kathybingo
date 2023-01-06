allBoxes = document.getElementsByClassName("box");

options = [
  "YOUR MOM",
  "ARE YOU...?",
  "KIIIIIREEEEEENNN",
  "UH... (SHOCK)",
  "SISTER APPEARANCE",
  "FUCK ME IN THE ASS",
  "WHAT THE FUCK",
  "WANNA PLAY VALORANT",
  "IM GONNA CRY",
  "LOSING MATCH",
  "FUCK ME!",
  "HIII",
  "AAAAAH",
  "NOOOOO!!",
  "IM GONNA KILL MYSELF",
  "WINNING MATCH",
  "I hate you...",
  "MIC PEAKS",
  "YOUR SO MEAN",
  "INSULTS KIEREN",
  "FUCK YOU...",
  "*giggle*",
  "SO GOOD",
  "HAHAHA",
  "I DIEEEEEED"
]

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}


function change(number) {
  if (allBoxes[number - 1].style.color == "rgb(0, 255, 0)") {
    allBoxes[number - 1].style.color = "#000000";
  }
  else {
    allBoxes[number - 1].style.color = "#00ff00";
  }
}

options = shuffle(options);
for (let i = 0; i < allBoxes.length; i++) {
  allBoxes[i].innerHTML = options[i];
}
