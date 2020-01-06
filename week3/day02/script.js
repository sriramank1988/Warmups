var box1 = document.querySelector('.box1');
var box2 = document.querySelector('.box2');
var box3 = document.querySelector('.box3');
var changeToRed = event => event.target.style.backgroundColor = "red";

var checkAndChangeGreen = () => {
    if( box1.style.backgroundColor === "red" && 
        box2.style.backgroundColor === "red" && 
        box3.style.backgroundColor === "red" )
    {
        box1.style.backgroundColor = "green";
        box2.style.backgroundColor = "green";
        box3.style.backgroundColor = "green";
    }
}
box1.addEventListener('click',changeToRed);
box1.addEventListener('click',checkAndChangeGreen);
box2.addEventListener('click',changeToRed);
box2.addEventListener('click',checkAndChangeGreen);
box3.addEventListener('click',changeToRed);
box3.addEventListener('click',checkAndChangeGreen);