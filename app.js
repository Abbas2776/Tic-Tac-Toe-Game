let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let newbtn = document.querySelector("#new-btn")

let turn = true;
let moveCount = 0

let winningPettrens = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]


boxes.forEach((box) => {

    const resetGame = () => {
        turn = true;
        moveCount = 0
        enableBtns()
        msgContainer.classList.add("hide")
    }

    

    box.addEventListener("click", () => {
        console.log("button was clicked");

        if (turn) { // similar to ==true
            box.innerText = "O"
            box.style.color="yellow"
            box.style.backgroundColor="blue"
            turn = false;
        } else {
            box.innerText = "X"
            box.style.color="blue"
            box.style.backgroundColor="yellow"
            turn = true;
        }
        box.disabled = true;
        moveCount++
        checkWinner()
        return;

    })

    const disableBtns = () => {
        for (let box of boxes) {
            box.disabled = true;
        }
    }

    const enableBtns = () => {
        for (let box of boxes) {
            box.disabled = false;
            box.innerText = ""
            box.style.backgroundColor ="#191913"
            box.style.color = "#b0413e"
        }
    }



    const showWinner = (winner) => {
        msg.innerText = "Congratulation Winner is " + winner;
        msgContainer.classList.remove("hide");
        disableBtns()



    }
    const checkWinner = () => {
        for (let pattrens of winningPettrens) {

            let pos1val = boxes[pattrens[0]].innerText;
            let pos2val = boxes[pattrens[1]].innerText;
            let pos3val = boxes[pattrens[2]].innerText;

            if (pos1val != "" && pos2val != "" && pos3val != "") {
                if (pos1val === pos2val && pos2val === pos3val) {
                    console.log("winer", pos1val);
                    showWinner(pos1val)
                    return;


                }
            }
        }
    
    if (moveCount===9) {
        msg.innerText="game draw!"
        msgContainer.classList.remove("hide")
        disableBtns()
    }

    }
    reset.addEventListener("click",resetGame)
    newbtn.addEventListener("click",resetGame)


})
