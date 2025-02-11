let soleil = document.querySelector("#iconSoleil");
let lune = document.querySelector("#iconLune")

soleil.onclick = function(){
  document.body.classList.add("lightMode");
  soleil.hide;
  lune.classList.add('active2');
}
lune.onclick = function(){
  document.body.classList.remove("lightMode");
  soleil.classList.add('active1');
  lune.classList.remove('active2');
}