function Mostrar(){
    document.getElementById('MenuDesplegable').style.display='block'
}
function Ocultar(){
    document.getElementById('MenuDesplegable').style.display='none'
}
function desplegar(){
   const valor=document.getElementById('MenuDesplegable')
   if(valor.style.display=='none')
   {
       Mostrar();
   }
   else{
       Ocultar();
   }
}