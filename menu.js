var desplegar=0;

const Mostrar_Ocultar=() =>{

    if (desplegar==0) {
        const action=document.getElementById('MenuDesplegable').style.display="block"
        console.log('felicidades tu menú se ha desplegado');
        desplegar=1;
    } else {
        const action=document.getElementById('MenuDesplegable').style.display="none"
        console.log('felicidades tu menú se ha ocultado');
        desplegar=0;
    }
}