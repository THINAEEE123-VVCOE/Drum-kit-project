import React from "react";

function Button() {

  function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
  }

  return (
    <div className="set">
      <button className="w drum" onClick={() => 
        playSound("/public/sounds/tom-1.mp3")}>w</button>
      <button className="a drum" onClick={() => 
        playSound("/public/sounds/crash.mp3")}>a</button>
      <button className="s drum" onClick={() => 
        playSound("/public/sounds/tom-2.mp3")}>s</button>
      <button className="d drum" onClick={() => 
        playSound("/public/sounds/snare.mp3")}>d</button>
      <button className="j drum" onClick={() => 
        playSound("/public/sounds/tom-3.mp3")}>j</button>
      <button className="k drum" onClick={() => 
        playSound("/public/sounds/kick-bass.mp3")}>k</button>
      <button className="l drum" onClick={() => 
        playSound("/public/sounds/tom-4.mp3")}>l</button>
    </div>
  );
}

export default Button;