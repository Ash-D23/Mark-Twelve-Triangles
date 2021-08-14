var angles= document.querySelectorAll(".angle-input")

var btn = document.getElementById("mybtn")

btn.addEventListener("click", checktriangle)

var output = document.querySelector(".output")

function checktriangle(){
  var total=0
  for (var i=0;i<angles.length;i++){
    total += Number(angles[i].value)
  }

  if (total == 180){
    output.innerText = "It is a Triangle"
  }else{
    output.innerText = "It is not a Triangle"
  }

  output.classList.remove("hide");
}
