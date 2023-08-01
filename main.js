let producto = prompt ("Que producto desea llevar? \n 1-bondiola \n 2-pechito \n 3-carre");


while(producto != '1' && producto != '2' && producto != '3'){
  alert("Opcion incorrecta");
  producto = prompt("Que producto desea llevar? \n 1-bondiola \n 2-pechito \n 3-carre");
}

if (producto == "1") {
  alert("bondiola te sale 1000 el kg");
} if (producto == "2") {
  alert("pechito te sale 1500 el kg");
} else if (producto == "3") {
  alert("carre te sale 1300 ek kg");
}


let peso = parseInt(prompt("Ingresa el peso del producto"));
let precio = parseInt(prompt("Ingresa el precio del producto"));

function calcularPrecio(){
    let resultado = peso * precio;
    return resultado;
}

let precioFinal = calcularPrecio();
alert(`el total de tu compra es de: ${precioFinal} pesos`)