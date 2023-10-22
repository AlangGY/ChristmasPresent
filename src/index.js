let present = [];

const inputSound = new Audio("assets/audio/uiclick.wav");
const shuffleSound = new Audio("assets/audio/tile shuffle.wav");
const displaySound = new Audio("assets/audio/announce.wav");

function input() {
  const AreYouSure = confirm(
    document.getElementById("registertext").value + "로 등록하시겠습니까?"
  );
  if (AreYouSure == true) {
    let input = document.getElementById("registertext").value;

    present.push(input);
    inputSound.play();
    alert("등록완료!");
    document.getElementById("registertext").value = "";
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  shuffleSound.play();
  alert("선물이 섞였습니다!");
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
