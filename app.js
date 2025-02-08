let icon = document.querySelector("#icon");

icon.onclick = function(){
  document.body.classList.toggle("darkMode");
  if(document.body.classList.contains("darkMode")){
    icon.src = ".fa-solid fa-moon";
  }else{
    icon.src = ".fa-solid fa-sun";
  }
}