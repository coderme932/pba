let colorSquares = 6
let mode = document.querySelectorAll(".mode")
let head = document.querySelector("h1")
let square = document.querySelectorAll(".square")
let Newcolorbtn = document.querySelector("#newColor")
let displayColor = document.querySelector(".displayColor")
let message = document.querySelector("#message")
let easybtn = document.querySelector("#easy")
let hardbtn = document.querySelector("#hard")
let colors = generateRandomColors(6)
let pickedColor = colors[randomColor()]
displayColor.textContent = pickedColor
for(let i = 0; i < mode.length; i++){
    mode[i].addEventListener("click",function(){
    easybtn.classList.remove("select")
    hardbtn.classList.remove("select")
    this.classList.add("select")
    colorSquares = this.textContent === "Easy" ? 3 : 6
    colors = generateRandomColors(colorSquares)
    pickedColor = colors[randomColor()]
    displayColor.textContent = pickedColor
    for(let i = 0; i<square.length;i++){
        if(colors[i]){
            square[i].style.display = "block"
            square[i].style.backgroundColor = colors[i]
        }else{
            square[i].style.display = "none"
        }
    }
})
}
// easybtn.addEventListener("click",()=>{
//     easybtn.classList.add("select")
//     hard.classList.remove("select")
//     colorSquares = 3
//     colors = generateRandomColors(colorSquares)
//     pickedColor = colors[randomColor()]
//     displayColor.textContent = pickedColor
//     for(let i = 0; i<square.length;i++){
//         if(colors[i]){
//             square[i].style.backgroundColor = colors[i]
//         }else{
//             square[i].style.display = "none"
//         }
//     }
// })
// hardbtn.addEventListener("click",()=>{
//     hard.classList.add("select")
//     easy.classList.remove("select")
//     colorSquares = 6
//     colors = generateRandomColors(colorSquares)
//     pickedColor = colors[randomColor()]
//     displayColor.textContent = pickedColor
//     for(let i = 0; i<square.length;i++){
//         square[i].style.backgroundColor = colors[i]
//         square[i].style.display = "block"
//     }
// })
for(let i = 0; i < square.length;i++){
    square[i].style.backgroundColor = colors[i]
    square[i].addEventListener("click",function(){
        let choosen = this.style.backgroundColor
        if(choosen === pickedColor){
            message.textContent = "Correct"
            message.style.color = "green"
            head.style.backgroundColor = pickedColor
            allc()
            Newcolorbtn.textContent = "Play Again?"
            Newcolorbtn.addEventListener("click",()=>{
                Newcolorbtn.textContent = "New Colour"
                message.textContent = ""
                head.style.backgroundColor = "skyblue"
            })
        }else{
            message.textContent = "Wrong!"
            message.style.color = "red"
            head.style.backgroundColor = ""
            square[i].style.backgroundColor = "#232323"
        }

    })
}
function allc(){
    for(let i = 0;i < square.length;i++){
        square[i].style.backgroundColor = pickedColor
    }
}
function randomColor(){
    return Math.floor(Math.random() * colors.length)
}
function generateRandomColors(number){
    let color = []
    for(let i = 0;i<number;i++){
    rc()
    color.push(rc())
    }
    return color
}
function rc(){
    r = Math.floor(Math.random()*256)
    g = Math.floor(Math.random()*256)
    b = Math.floor(Math.random()*256)
    return `rgb(${r}, ${g}, ${b})`
}
Newcolorbtn.addEventListener("click",()=>{
    colors = generateRandomColors(colorSquares)
    pickedColor = colors[randomColor()]
    displayColor.textContent = pickedColor
    for(let i = 0;i<square.length;i++){
        square[i].style.backgroundColor =colors[i]
    }
})