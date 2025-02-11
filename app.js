let soleil = document.querySelector("#iconSoleil");
let lune = document.querySelector("#iconLune");
let btnUiverse = document.querySelector('.switch input');
let volet = document.querySelector('#volet');
let hamburger = document.querySelector('.hamburger input');

btnUiverse.onclick = function(){
  document.body.classList.toggle("lightMode");
}

hamburger.onclick = function openVolet(){
  volet.classList.toggle('activeVolet')
}
