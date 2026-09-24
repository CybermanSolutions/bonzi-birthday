function speakBonzi() {
  const msg = new SpeechSynthesisUtterance("Happy Birthday, Dad! It's me, Bonzi!");
  msg.lang = "en-US";
  msg.pitch = 0.8;   // lower pitch for that Microsoft Sam vibe
  msg.rate = 0.9;    // slower, mechanical pacing
  msg.volume = 1.0;

  // Optional voice selection
  const voices = window.speechSynthesis.getVoices();
  const samLike = voices.find(v => v.name.includes("Microsoft") || v.name.includes("David"));
  if (samLike) msg.voice = samLike;

  window.speechSynthesis.speak(msg);
}

// Trigger speech once the page loads
window.onload = () => {
  // Wait for voices to load before speaking
  window.speechSynthesis.onvoiceschanged = () => {
    setTimeout(speakBonzi, 500); // half-second delay after Bonzi appears
  };
};