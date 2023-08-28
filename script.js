const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
const select = document.querySelector("select");

let speech = new SpeechSynthesisUtterance();

let vocies = [];
window.speechSynthesis.onvoiceschanged = () => {
  vocies = window.speechSynthesis.getVoices();
  speech.voice = vocies[0];

  vocies.forEach((voice, i) => (select.options[i] = new Option(voice.name, i)));
};

select.addEventListener("change",()=>{
    speech.voice = vocies[select.value];
})

button.addEventListener("click", () => {
  speech.text = textarea.value;
  window.speechSynthesis.speak(speech);
});
