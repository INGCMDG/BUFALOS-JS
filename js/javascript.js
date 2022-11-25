
let camisa = 0;
let ID = 0;
let kit = 0;
let poster = 0;
let tipo = "";
let resultadoCamisa = 0;
let resultadoID = 0;
let resultadoKit = 0;
let resultadoPoster = 0;
let total = 0;
let partesCotizacion = [];

const precioCamisa = 50000;
const precioID = 100000;
const precioKit = 200000;
const precioPoster = 60000;
const descuento = 0.90;
const iva = 0.19;

function solicitarCamisa(){
    tipo = "CAMISA";
    camisa = parseInt(prompt("CAMISAS\n\nPrecio unidad: " + precioCamisa + " COP\nDescuento del 10% dentro del tiempo\n\nIngrese la cantidad:"));
    noEsNumero(camisa,tipo);
    resultadoCamisa = calculos(camisa,tipo,precioCamisa,resultadoCamisa);
    return resultadoCamisa;
}

function solicitarID(){
    tipo = "Combos de ID";
    ID = parseInt(prompt("COMBO DE IDENTIFICACION: 1 CARNE, 1 CAMISA, 1 CUELLO, 1 CALCA\n\nPrecio por combo: " + precioID + " COP\nDescuento del 10% dentro del tiempo\n\nIngrese la cantidad:"));
    noEsNumero(ID,tipo);
    resultadoID = calculos(ID,tipo,precioID,resultadoID);
    return resultadoID;
}

function solicitarKit(){
    tipo = "KIT";
    kit = parseInt(prompt("KIT: 5 lujos para tu moto\n\nPrecio por Kit: " + precioKit + " COP\nDescuento del 10% dentro del tiempo\n\nIngrese la cantidad:"));
    noEsNumero(kit,tipo);
    resultadoKit = calculos(kit,tipo,precioKit,resultadoKit);
    return resultadoKit;
}

function solicitarPoster(){
    tipo = "POSTER";
    poster = parseInt(prompt("POSTER FIRMADO\n\nPrecio por poster: " + precioPoster + " COP\nDescuento del 10% dentro del tiempo\n\nIngrese la cantidad:"));
    noEsNumero(poster,tipo);
    resultadoPoster= calculos(poster,tipo,precioPoster,resultadoPoster);
    return resultadoPoster;
}

function noEsNumero(numero,tipo){
    if(isNaN(numero) || numero < 0){
        alert("Debes ingresar una Cantidad de " + tipo + " válido\nHaz una nueva solicitud");
    }
}

let calculos = class{
    constructor(cantidad,tipo,precio,resultado){
        this.cantidad = cantidad;
        this.tipo = tipo;
        this.precio = precio;
        this.resultado = resultado;
    if(cantidad == 0){
        resultado = cantidad*precio;
        console.log("Cantidad de " + tipo + ": " + cantidad +  " | Precio: " + resultado + " COP");
        alert("Cantidad de " + tipo + ": " + cantidad +  " | Precio: " + resultado + " COP");
    }
    if(tiempoTotal == 0){
        resultado = cantidad*precio;
        console.log("Cantidad de " + tipo + ": " + cantidad +  " | Precio: " + resultado + " COP");
        alert("Cantidad de " + tipo + ": " + cantidad +  " | Precio: " + resultado + " COP");
    }
    if(tiempoTotal > 0){
        resultado = cantidad*(precio*descuento);
        console.log("Cantidad de " + tipo + ": " + cantidad +  " | Precio: " + resultado + " COP");
        alert("Cantidad de " + tipo + ": " + cantidad +  " | Precio: " + resultado + " COP");
    }
    
}
}

window.onload = cuentaRegresiva;
let tiempoTotal = 10;
function cuentaRegresiva() {
  document.getElementById('cuentaRegresiva').innerHTML = tiempoTotal;
  if(tiempoTotal > 0){
  do{   
    tiempoTotal = tiempoTotal - 1;
    setTimeout("cuentaRegresiva()",1000);
  } while (tiempoTotal < 0);
  } else {
    console.log('Final');
  }
}

function arregloCantidades(){
    let partesCotizacion = [];
    partesCotizacion.push("Camisas: " + camisa);
    partesCotizacion.push("ID: " + ID);
    partesCotizacion.push("Kit: " + kit);
    partesCotizacion.push("Poster: " + poster);
    partesCotizacion = partesCotizacion.join(" / ");
    return partesCotizacion;
}


function Cotizacion(cantCamisa,cantID,cantKit,cantPoster){
    this.cantCamisa = cantCamisa;
    this.cantID = cantID;
    this.cantKit = cantKit;
    this.cantPoster = cantPoster;
    this.composicion = function(){
        console.log("\n\nMi cotización finalmente se compuso de: "+
        "\n"+ cantCamisa + " Camisa"+
        "\n"+ cantID + " ID"+
        "\n"+ cantKit + " Kit"+
        "\n"+ cantPoster + " Poster");
    }

    this.cotizar = function() {

        total = resultadoCamisa + resultadoID + resultadoKit + resultadoPoster;
        totalIva = total + (total*iva);


        console.log("\n\nCOTIZACIÓN FINAL\n\nCamisa | Cantidad: " + cantCamisa + " / Subtotal: " + resultadoCamisa + " COP"+
                                "\nID | Cantidad: " + cantID  + " / Subtotal: " + resultadoID + " COP"+
                                "\nKit | Cantidad: " + cantKit + " / Subtotal: " + resultadoKit + " COP"+
                                "\nPoster | Cantidad: " + cantPoster + " / Subtotal: " + resultadoPoster+ " COP"+
                                "\n\nTOTAL: " + total + " COP"+
                                "\nTOTAL + IVA (19%): " + totalIva + " COP"+
                                "\n\nRESUMEN DE CANTIDADES: " + arregloCantidades());
                                
        alert("COTIZACIÓN FINAL\n\nCamisa | Cantidad: " + cantCamisa + " / Subtotal: " + resultadoCamisa + " COP"+
                                "\nID | Cantidad: " + cantID + " / Subtotal: " + resultadoID + " COP"+
                                "\nKit | Cantidad: " + cantKit + " / Subtotal: " + resultadoKit + " COP"+
                                "\nPoster | Cantidad: " + cantPoster + " / Subtotal: " + resultadoPoster+ " COP"+
                                "\n\nTOTAL: " + total + " COP"+
                                "\nTOTAL + IVA (19%): " + totalIva + " COP"+
                                "\n\nRESUMEN DE CANTIDADES: " + arregloCantidades());

    }
}

function totalCotizacion(){
    let tuCotizacion = new Cotizacion(camisa,ID,kit,poster);
    tuCotizacion.cotizar();
    tuCotizacion.composicion();
}
