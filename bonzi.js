function speakBonzi() {
  const msg = new SpeechSynthesisUtterance("Happy Birthday, Dad! It's me, Bonzi!");
  msg.lang = "en-US";
  msg.pitch = 0.8;
  msg.rate = 0.9;
  msg.volume = 1.0;

  window.speechSynthesis.speak(msg);
}