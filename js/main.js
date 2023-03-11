
//Ejercicio 1


const btnRojo = document.getElementById("tema-rojo");
const btnAzul = document.getElementById("tema-azul");
const btnVerde = document.getElementById("tema-verde");
const btnReset = document.getElementById("tema-reset");

btnRojo.addEventListener("click", () => cambiarColores("rojo"));
btnAzul.addEventListener("click", () => cambiarColores("azul"));
btnVerde.addEventListener("click", () => cambiarColores("verde"));
btnReset.addEventListener("click", () => cambiarColores("reset"));

function cambiarColores(color) {
    const body = document.body;
   
  
    switch (color) {
      case "rojo":
        body.style.backgroundColor = "red";
       
        break;
      case "azul":
        body.style.backgroundColor = "lightblue";
        
        break;
      case "verde":
        body.style.backgroundColor = "lightgreen";
        
        break;
      case "reset":
        body.style.backgroundColor = "#588157";
  
        break;
      default:
        break;
    }
  }

  //Ejercicio 2 
  function filtrarProyectos() {
    
    var filtro = document.getElementById("modulo").value;
  
   
    var proyectos = document.getElementsByClassName("proyecto");
  
 
    for (var i = 0; i < proyectos.length; i++) {
      var proyecto = proyectos[i];
  
   
      var tecnologias = proyecto.getAttribute("data-tecnologias").split(",");
  
    
      if (tecnologias.includes(filtro)) {
        
        proyecto.style.display = "block";
      } else {
      
        proyecto.style.display = "none";
      }
    }
  }

  // EJERCICIO 3

  // seleccionamos los elementos del formulario
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const mensajeInput = document.getElementById('mensaje');

// añadimos un listener de blur a cada input
nombreInput.addEventListener('blur', validarNombre);
emailInput.addEventListener('blur', validarEmail);
mensajeInput.addEventListener('blur', validarMensaje);

function validarNombre() {
  const nombre = nombreInput.value.trim();
  if (nombre === '') {
    mostrarError(nombreInput, 'El nombre no puede estar vacío');
  } else {
    mostrarExito(nombreInput);
  }
}

function validarEmail() {
  const email = emailInput.value.trim();
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    mostrarError(emailInput, 'El email no es válido');
  } else {
    mostrarExito(emailInput);
  }
}

function validarMensaje() {
  const mensaje = mensajeInput.value.trim();
  if (mensaje === '') {
    mostrarError(mensajeInput, 'El mensaje no puede estar vacío');
  } else {
    mostrarExito(mensajeInput);
  }
}

function mostrarError(input, mensaje) {
  input.classList.remove('success');
  input.classList.add('error');
  const errorMensaje = document.createElement('span');
  errorMensaje.classList.add('error-mensaje');
  errorMensaje.innerText = mensaje;
  const padre = input.parentElement;
  padre.appendChild(errorMensaje);
}

function mostrarExito(input) {
  input.classList.remove('error');
  input.classList.add('success');
  const padre = input.parentElement;
  const errorMensaje = padre.querySelector('.error-mensaje');
  if (errorMensaje) {
    padre.removeChild(errorMensaje);
  }
}
