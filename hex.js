const color = document.querySelector("#color");
document.getElementById("btn").addEventListener('click', rahul = () => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background =  "#"+randomColor;
    color.innerHTML = "#" + randomColor;
    console.log("RAHUL");
});