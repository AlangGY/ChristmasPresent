let present = [];

var inputsound = new Audio();
inputsound.src = "assets/audio/uiclick.wav";
function input() {
  var AreYouSure = confirm(
    document.getElementById("registertext").value + "로 등록하시겠습니까?"
  );
  if (AreYouSure == true) {
    let input = document.getElementById("registertext").value;

    present.push(input);
    inputsound.play();
    alert("등록완료!");
    document.getElementById("registertext").value = "";
  }
}
var shufflesound = new Audio();
shufflesound.src = "assets/audio/tile shuffle.wav";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  shufflesound.play();
  alert("선물이 섞였습니다!");
}

var displaysound = new Audio();
displaysound.src = "assets/audio/announce.wav";

function display_array(array) {
  var e = "<hr/>";
  document.getElementById("Result").innerHTML = e;
  for (var y = 0; y < array.length; y++) {
    e = "선물 " + (y + 1) + "번 : " + array[y] + "<br/>";
    document.getElementById("Result").innerHTML += e; //텍스트로 표기
  }
  displaysound.play();
  alert("공개합니다!");
}
