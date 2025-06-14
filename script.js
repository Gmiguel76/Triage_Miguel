let pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];

function agregarPrioridad(sintoma){
    if (sintoma === "dificultad respiratoria grave" || sintoma ==="convulsiones" || sintoma === "traumatismo grave"){
        alert("🔴Codigo Rojo: Atencion inmediata");
        return "Codigo rojo";
    } else if (sintoma === "broncoespasmo" || sintoma === "fiebre alta"){
        alert("🟡Codigo Amarillo: Atencion prioritaria");
        return "Codigo amarillo";
    } else {
        alert("🟢Codigo Verde: Atencion normal");
        return "Codigo verde";
    }
}

function ingresarPaciente(){
    let nombre = prompt("Ingresar nombre y apellido");
    let edad = prompt("Ingresar edad");
    let sintoma = prompt("Ingresar sintoma");
    let prioridad = agregarPrioridad(sintoma);
return {nombre, edad, sintoma, prioridad};
}


function agregarPacienteTabla() {
    let nuevoPacienteIngresado = ingresarPaciente();
    pacientes.push(nuevoPacienteIngresado);

    localStorage.setItem('pacientes', JSON.stringify(pacientes));

    
const tablaPacientes = document.getElementById("tablaPacientes")


let fila = tablaPacientes.insertRow();

    
let celdaNombre = fila.insertCell(0);
let celdaEdad = fila.insertCell(1);
let celdaSintoma = fila.insertCell(2);
let celdaPrioridad = fila.insertCell(3);

celdaNombre.textContent = nuevoPacienteIngresado.nombre;
celdaEdad.textContent = nuevoPacienteIngresado.edad;
celdaSintoma.textContent = nuevoPacienteIngresado.sintoma;
celdaPrioridad.textContent = nuevoPacienteIngresado.prioridad;
}

document.getElementById("botonIngreso").addEventListener("click", agregarPacienteTabla);

document.getElementById("botonBorrar").addEventListener("click", () => {
    if (confirm("¿Estás seguro que querés borrar todos los pacientes?")) {
        localStorage.removeItem('pacientes');
        location.reload();
    }
});

