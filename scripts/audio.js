
const init = () => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioCtx = new AudioContext();
  
  const audioElement = document.querySelector("audio");
  const playButtons = document.querySelectorAll("button");
  
  const handleSound = (event) => {
    audioElement.setAttribute('src', `../assets/${event.target.id}.ogg`);
  
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    
    const buttonState = {
      false: false,
      true: true
    };
  
    buttonState[this.dataset.playing] ? audioElement.pause() : audioElement.play();
    this.dataset.playing = buttonState[this.dataset.playing] ? "false" : "true";
  }
  
  playButtons.forEach(button => button.addEventListener("click", handleSound));
}

window.addEventListener("DOMContentLoaded", init)