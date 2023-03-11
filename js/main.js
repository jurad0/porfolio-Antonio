
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