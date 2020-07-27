let name= document.getElementById("name").value;
console.log(name);

let miFormulario = document.getElementById("miFormulario");
let nombreEventoFormulario = "submit";

function imprimirDatos(evento) {
    evento.preventDefault();
    console.log('Datos obtenidos luego del evento "Enviar"');
    let nombre = document.getElementById("name").value;
    console.log("Nombre: " , nombre);
    let email = document.getElementById("email").value;
    console.log("Correo electrónico: " , email);
    let subject = document.getElementById("subject").value;
    console.log("Asunto: " , subject);
    let description = document.getElementById("description").value;
    console.log("Descripción: " , description);

    if (name.length==0 || email.length==0 || subject.length==0 || description.length==0){
        alert("Debe llenar todos los campos")
    }else if(name.length<3){
        alert("Favor introduzca un nombre válido")
    }else{
        alert("Formulario enviado exitosamente")}
    
}
miFormulario.addEventListener(nombreEventoFormulario, imprimirDatos);



