var side1 = document.getElementById("side1")
var side2 = document.getElementById("side2")
var btn = document.getElementById("mybtn")
var output = document.querySelector(".output")

btn.addEventListener("click", calculate)

function calculate(){
  var a = Number(side1.value)
  var b = Number(side2.value)
  var ans = Math.sqrt((a**2)+(b**2));
  output.innerText = `Length of Hypoteneus is ${ans}`
  output.classList.remove("hide");

}
