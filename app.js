//menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible == false){//si esta oculto
    menu.style.display= "block";
    menu_visible= true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
let links = document.querySelectorAll("nav a");
for (var x = 0; x<links.length;x++){
    links[x].onclick= function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
//ventana
const open = document.getElementById('open');
const modal_cont = document.getElementById('modal_cont');
const close = document.getElementById('close');

open.addEventListener('click',()=>{
    modal_cont.classList.add('show');
});
close.addEventListener('click',()=>{
    modal_cont.classList.remove('show');
});