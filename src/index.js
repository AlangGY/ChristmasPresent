let presentDescriptions = [];

const inputSound = new Audio("assets/audio/uiclick.wav");
const shuffleSound = new Audio("assets/audio/tile shuffle.wav");
const displaySound = new Audio("assets/audio/announce.wav");

// elements
const $registerButton = document.getElementById("registerButton");
const $registerInput = document.getElementById("registerText");
const $shuffleButton = document.getElementById("shuffleButton");

// functions

function register(value) {
  presentDescriptions.push(value);
}

function shuffleArray(array) {
  const result = [...array];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function display_array(array) {
  var e = "<hr/>";
  document.getElementById("Result").innerHTML = e;
  for (var y = 0; y < array.length; y++) {
    e = "선물 " + (y + 1) + "번 : " + array[y] + "<br/>";
    document.getElementById("Result").innerHTML += e; //텍스트로 표기
  }
  displaySound.play();
  alert("공개합니다!");
}

// event handlers

function handleRegister() {
  if (confirm(`${$registerInput.value}로 등록하시겠습니까?`)) {
    register($registerInput.value);
    inputSound.play();
    alert("등록완료!");
    $registerInput.value = "";
  }
}

function handleShuffle() {
  presentDescriptions = shuffleArray(presentDescriptions);
  shuffleSound.play();
  alert("선물이 섞였습니다!");
}

function bindEvents() {
  $registerButton.addEventListener("click", handleRegister);
  $shuffleButton.addEventListener("click", handleShuffle);
}

function init() {
  bindEvents();
}

init();
