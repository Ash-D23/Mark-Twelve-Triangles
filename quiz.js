var myForm= document.querySelector(".quiz-form")

var btn = document.getElementById("mybtn")

var output = document.querySelector(".output")

btn.addEventListener("click", checkans)

var answers =["90","3"]
function checkans(){
  let formData = new FormData(myForm);
  var i=0
  var score=0
  for (let element of formData.entries()){

    if(element[1]==answers[i]){
      score++;
    }
    i++;
  }

  output.innerText =`Score is ${score}`
  output.classList.remove("hide");

}
