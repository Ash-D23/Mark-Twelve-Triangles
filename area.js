var base= document.getElementById("base")
var hieght = document.getElementById("height")
var btn = document.getElementById("mybtn")
var output = document.querySelector(".output")

btn.addEventListener("click", calculatearea)

function calculatearea(){
  var area = 0.5 * Number(base.value) * Number(height.value)
  output.innerText = `Area of traingle is ${area}`
  output.classList.remove("hide");
}
