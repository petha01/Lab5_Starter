// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  changeDDL();
  playAudio();
  editSlider();
}

function changeDDL() {
  let ddl = document.getElementById('horn-select');
  ddl.addEventListener('change', function() {
    let imgElement = document.querySelector('img');
    let hornName = ddl.value;
    imgElement.src = "assets/images/" + hornName + ".svg";

    let audioElement = document.querySelector("audio");
    audioElement.src = "assets/audio/" + hornName + ".mp3";
  });
}

function playAudio() {
  let btn = document.querySelector('button');
  btn.addEventListener('click', function() {
    let audioElement = document.querySelector("audio");

    let volumeValue = document.getElementById('volume').value;
    audioElement.volume = volumeValue / 100;
    console.log(volumeValue)

    if (document.getElementById('horn-select').value == 'party-horn') {
      const jsConfetti = new JSConfetti()
      jsConfetti.addConfetti()
    }

    audioElement.play();
  })
}

function editSlider() {
  let volumeSlider = document.getElementById('volume');
  volumeSlider.addEventListener('change', function() {
    let volumeIcon = document.querySelectorAll('img')[1];
    let volumeValue = volumeSlider.value;
    
    if (volumeValue == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg"
    } else if (volumeValue < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg"
    } else if (volumeValue < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg"
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg"
    }
  });

}