let box = document.querySelectorAll(".box");
let btn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msge = document.querySelector("#msge");
let msg = document.querySelector(".msg");
let turn = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

box.forEach((box) => {
  box.addEventListener("click", function () {
    if (turn === true) {
      box.innerText = "O";
      turn = false;
    } else {
      box.innerText = "X";
      turn = true;
    }
    box.disabled = true;

    checkwinner();
  });
});

const disabledBox = () => {
  for (let ox of box) {
    ox.disabled = true;
  }
};
const enableBox = () => {
  for (let ox of box) {
    ox.disabled = false;
    ox.innerText = "";
  }
};

const showwinner = (winner) => {
  msge.innerText = `Congrulations winner is ${winner}`;
  msg.classList.remove("hide");
  disabledBox();
};

const checkwinner = () => {
  for (let pattern of winPattern) {
    let pos1 = box[pattern[0]].innerText;
    let pos2 = box[pattern[1]].innerText;
    let pos3 = box[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showwinner(pos1);
      }
    }
  }
};

const resetgame = () => {
  turn = true;
  enableBox();
  msg.classList.add("hide");
};

newbtn.addEventListener("click", resetgame);
btn.addEventListener("click", resetgame);
