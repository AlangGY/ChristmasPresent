const inputSound = new Audio("assets/audio/uiclick.wav");
const shuffleSound = new Audio("assets/audio/tile shuffle.wav");
const displaySound = new Audio("assets/audio/announce.wav");

// PresentBox
const presentBox = new PresentBox();

// elements
const $registerButton = document.getElementById("registerButton");
const $registerInput = document.getElementById("registerText");
const $shuffleButton = document.getElementById("shuffleButton");
const $showButton = document.getElementById("showButton");
const $resultContainer = document.getElementById("resultContainer");

// event handlers
function handleRegister() {
  if (confirm(`${$registerInput.value}로 등록하시겠습니까?`)) {
    presentBox.registerPresent($registerInput.value);
    inputSound.play();
    alert("등록완료!");
    $registerInput.value = "";
  }
}

function handleShuffle() {
  presentBox.shufflePresent();
  shuffleSound.play();
  alert("선물이 섞였습니다!");
}

function handleShowDescription() {
  displaySound.play();
  alert("공개합니다!");
  $resultContainer.innerHTML = presentBox.getPresentDescriptionTemplate();
}

function bindEvents() {
  $registerButton.addEventListener("click", handleRegister);
  $shuffleButton.addEventListener("click", handleShuffle);
  $showButton.addEventListener("click", handleShowDescription);
}

function init() {
  bindEvents();
}

init();
