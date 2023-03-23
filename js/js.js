const formulario=document.querySelector(".form");
const datos = {
    nombre:"",
    email:"",
    mensaje:""
};

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e){
    console.log(e);
    datos[e.target.id]=e.target.value;
};

formulario.addEventListener('click', function(e){
    e.preventDefault();
    const nombre=datos.nombre;
    const email=datos.email;
    const mensaje= datos.mensaje;
    if(nombre==="" || email==="" ||mensaje===""){
        console.log("Al menos hay un campo vacío");
        mostrarError("Todos los campos son obligatorios");
        return;
    }else{
        console.log("Se han enviado todos los datos correctamente")
        mostrarMensaje("Se ha enviado correctamente");
        return;
    }
});

function mostrarError(mensaje){
    const alerta=document.createElement("p");
    alerta.textContent=mensaje;
    formulario.appendChild(alerta);
    setTimeout(()=>{alerta.remove()}, 1000);

}
function mostrarMensaje(mensaje){
    const correct=document.createElement("p");
    correct.textContent=mensaje;
    formulario.appendChild(correct);
    setTimeout(()=>{correct.remove()}, 1000);

}