// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const speech = window.speechSynthesis;
  const voices = speech.getVoices();
  readText(speech, voices);
  initVoices(voices);
}

function readText(speech, voices) {
  let btn = document.querySelector('button');
  let ddl = document.getElementById('voice-select');
  btn.addEventListener('click', function() {
    let text = document.getElementById("text-to-speak").value;
    let utterance = new SpeechSynthesisUtterance(text);

    const selectedOption = ddl.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterance.voice = voices[i];
      }
    }

    let smiley = document.querySelector('img');

    smiley.src = "assets/images/smiling-open.png";
    speech.speak(utterance);
  })
}

function initVoices(voices) {
  let ddl = document.getElementById('voice-select');
    for (let i = 0; i < voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    ddl.appendChild(option);
  }
}