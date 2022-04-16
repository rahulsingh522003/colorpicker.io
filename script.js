const colors = ["#008000", "#800080", "#FF0000", "#FFFFFF", "#FA8072", "#CD5C5C"];
const color = document.querySelector("#color");
document.getElementById("btn").addEventListener('click', rahul = () =>{
    const randomNumber = Math.trunc(Math.random() * 10) % 6;
    document.body.style.background = colors[randomNumber];
    color.innerHTML = colors[randomNumber];
    console.log("RAHUL");
});

