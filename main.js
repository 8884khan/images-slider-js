// left
const image = document.getElementById("move");
const images = document.getSelection("img");
let start = 0
function move(){
    start++
    if(start>images.length -1){
        start = 0
    }
    image.style.transform = `translateX(${-start * 400}px)`

}
setInterval(move,2000)

const image1 = document.getElementById("move1");
const images2 = document.getSelection("img");
let start1 = 0
function move1(){
    start1++
    if(start1>images2.length -1){
        start1 = 0
    }
    image1.style.transform = `translateX(${-start1 * 400}px)`

}
setInterval(move1,2000)

// center
// 
const image2 = document.getElementById("move2")
const images3 = document.querySelectorAll("img")

let start2 = 0
function move2(){
    start2++
    if(start2>images3.length-1){
        start2= 0
    }
    image2.style.transform = `translateX(${-start2 * 400}px)`
}
setInterval(move2,2000)