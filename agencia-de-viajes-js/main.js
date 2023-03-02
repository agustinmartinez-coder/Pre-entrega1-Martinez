let resultado1
let resultado2
let resultado3

function saludar(){
    alert(("Hola! Vamos a calcular tu próximo viaje :)"));
}

function hotel(){
    let noches = prompt("Ingresar número de noches siendo 4 el mínimo y 8 el máximo");
    //Inicializamos 'resultado1'
    resultado1 = noches;
    switch(noches){
        case "4":
            alert("Tu número de noches son 4 a 350€")
            break;
        case "5":
            alert("Tu número de noches son 5 a 450€")
            break;
        case "6":
            alert("Tu número de noches son 6 a 550€")
            break;
        case "7":
            alert("Tu número de noches son 7 a 650€")
            break;
        case "8":
            alert("Tu número de noches son 8 a 750€")
            break;
            default:
                alert("Tu número de noches no es válido")
                break;
    }
    console.log(noches);
}


function vuelo(){
    let ciudad = prompt("Ingresa una ciudadad de las siguientes en la lista: Madrid, Paris, Roma, Copenhague");
  //Inicializamos 'resultado2'
    resultado2 = ciudad;
    switch(ciudad){
        case "Madrid":
            alert("Tu vuelo a Madrid son 130€")
            break;
        case "Paris":
            alert("Tu vuelo a Paris son 230€")
            break;
        case "Roma":
            alert("Tu vuelo a Roma son 100€")
            break;
        case "Copenhague":
            alert("Tu vuelo a Copenhague son 300€")
            break;
        default:
            alert("No hay vuelos disponibles para esa ciudad")
            break;
    }
    console.log(ciudad);
}

function alquilerCoche(){
    let diasCoche = prompt("Ingresa los dias que alguilarás un coche. De 5 a 8 días");
  //Inicializamos 'resultado3'
    resultado3 = diasCoche;
    switch(diasCoche){
        case "5":
            alert("Tu coste de alquiler de coche para 5 días es de 400€")
            break;
        case "6":
            alert("Tu coste de alquiler de coche para 6 días es de 450€")
            break;
        case "7":
            alert("Tu coste de alquiler de coche para 7 días es de 500€")
            break;
        case "8":
            alert("Tu coste de alquiler de coche para 8 días es de 550€")
            break;
        case "0":
            alert("Tu coste de alquiler de coche para 0 días es de 0€")
            break;
            default:
                alert("No hay precios disponibles para esos días")
                break;
    }
    console.log(diasCoche);
}

function resultado(){
    let resumen, suma; //No hay necesidad de volver a declarar las variables 'resultado', ya que estas se encuentran definidas globalmente
    resumen=alert("Días de hotel: " + resultado1 + " ciudad destino: " + resultado2 + " días de coche alquilados: " + resultado3);
    suma=resultado1+resultado3;
    alert("tu presupuesto final es de: "+suma);
}


function ejecutarSimulador(){
    saludar();
    hotel();
    vuelo();
    alquilerCoche();
    resultado();
}


ejecutarSimulador();