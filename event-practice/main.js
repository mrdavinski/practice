function alertFunction(){
    alert ("good work buddu");
}


const btn = document.querySelector("#btn");

btn.addEventListener('click', function (e) {
    e.target.style.background = "blue";
  });

const buttons = document.querySelectorAll("button");


buttons.forEach((button) => {

button.addEventListener("click", () => alert(button.id));

});



let isPositive = number => number >=0;