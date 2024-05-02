// //PRIMERAS OPERACIONES CON INGRESO DE VARIABLES Y DATOS POR PROMPT


// let nombre = prompt("Ingrese su nombre:");
// let apellido = prompt("Ingrese su apellido:");
// let edad = parseInt(prompt("Ingrese su edad:"));
// const FechaDeNacimiento = prompt("Ingrese su fecha de nacimiento:")

// let resultado = "Su nombre es: " + nombre + "" + apellido + "tiene" + "" + edad + "y nacio el" + FechaDeNacimiento;

// alert(resultado);




// // CALCULADORA


// function sumar(num1, num2) {
//     let resultadoSuma = num1 + num2;
//     document.write(`El resultado de la suma es: ${resultadoSuma}<br>`)

//     return resultadoSuma;

// }

// function restar(num1, num2) {

//     let resultadoResta = num1 - num2;

//     document.write(`El resultado de la resta es: ${resultadoResta}<br>`)

//     return resultadoResta

// }

// function multuplicar(num1, num2) {

//     let resultadoMultiplicacion = num1 * num2;

//     document.write(`El resultado de la multiplicacion es: ${resultadoMultiplicacion}<br>`)

//     return resultadoMultiplicacion

// }

// function dividir(num1, num2) {

//     let resultadoDivision = num1 / num2;

//     document.write(`El resultado de la division es: ${resultadoDivision}<br>`)

//     return resultadoDivision

// }

// let dato1 = parseInt(prompt("Ingrese dato 1"));

// let dato2 = parseInt(prompt("Ingrese dato 2"));

// sumar(dato1, dato2);

// restar(dato1, dato2);

// multuplicar(dato1, dato2);

// dividir(dato1, dato2);






// //CONTADOR DE NUMERO DEL 1 AL 10

// let numeroIngresado = Number(prompt("Ingrese un Numero:"));

// for (let i = 0; i <= numeroIngresado; i++) {

//     if (i == 5) {
//         continue;
//     }

//     if( i== 110){
//         continue;
//     }



//     document.write(`${i}<br>`);

// }






// // MUESTRA NUMEROS PARES

// let num= Number(prompt("Ingrese un N°:"))

// for(let i=0; i<=num; i+=2){
//     if (num % 2 == 0){
//         document.write(i)
//     }
// }







// // PEDIDO DE LOGGIN HASTA 3 ERRORES CON IF

// let userContraseña = 123;
// let nombreDeUsuario = "Francisco";
// let ingresoContraseña = prompt("Ingrese su contraseña");

// if (ingresoContraseña == userContraseña) {
//     alert(`Bienvenido ${nombreDeUsuario}`)

// }

// if (ingresoContraseña != userContraseña) {
//     alert("Contraseña incorrecta, le quedan 2 intentos")
//     ingresoContraseña = prompt("Ingrese su contraseña");
// }


// if (ingresoContraseña != userContraseña) {
//     alert("contraseña incorrecta, le queda 1 intento")
//     ingresoContraseña = prompt("Ingrese su contraseña");
// }


// if (ingresoContraseña != userContraseña){
//     alert("Contraseña incorrecta, bloqueado");
    
// }








// // PEDIDO DE LOGGIN CON WHILE HASTA 3 INTENTOS



// let contraseñaPedido = prompt("Ingrese contraseña");
// let erroresPermitidos= 2; 
// while (contraseñaPedido != "pancho") {


//     alert("su contraseña es incorrecta, le quedan " + erroresPermitidos + " errores permitidos");
//     numero = prompt("Ingrese contraseña")
//     erroresPermitidos--

//     if(erroresPermitidos == 0)
//     {break;}
// }

// if (contraseñaPedido == "pancho") {

//     alert("Bienvenido Fran")

// }



// **************************************PARA SEGUNDA ENTREGA**********************************
// **************************************PARA SEGUNDA ENTREGA**********************************
// **************************************PARA SEGUNDA ENTREGA**********************************
// **************************************PARA SEGUNDA ENTREGA**********************************
// **************************************PARA SEGUNDA ENTREGA**********************************
// **************************************PARA SEGUNDA ENTREGA**********************************
// **************************************PARA SEGUNDA ENTREGA**********************************
// **************************************PARA SEGUNDA ENTREGA**********************************
// **************************************PARA SEGUNDA ENTREGA**********************************
// **************************************PARA SEGUNDA ENTREGA**********************************
// **************************************PARA SEGUNDA ENTREGA**********************************
// **************************************PARA SEGUNDA ENTREGA**********************************


// OBJETOS LITERALES

/*let datosFrancisco = {

    nombre: "Francisco",
    apellido: "vazquez",
    edad: 39,
    domicilio: "Puerto de Palos",
    numCalle: 230,

}

let datosColo= {

    nombre: "Aymara",
    apellido: "Latorre",
    edad: 35,
}


document.write("Su nombre es" + datosFrancisco.nombre + "<br>");
document.write("Y su apellido es" + datosFrancisco["apellido"] + "<br><br><br>");

document.write("Y su nombre es" + datosColo.nombre + "<br>");
document.write("Y su apellido es" + datosColo.apellido + "<br>");

datosFrancisco.nombre = "gustavo";

document.write("Su nombre es" + datosFrancisco.nombre + "<br>");

*/

// OBJETOS O FUNCIONES CONSTRUCTORAS

/*function Animales(literal) {
    this.nombre = literal.nombre;
    this.raza = literal.raza;

}

let animal1 = new Animales({ nombre: "sony", raza: "gato" });
let animal2 = new Animales({ nombre: "tupina", raza: "perro" });

document.write(`${animal1.nombre}<br>`)
document.write(`${animal2.raza}<br>`)

*/
/// OTRA FORMA DE OBJETO CONSTRUCTOR

/*function Insectos(nombre, especie, tamano) {
    this.nombre = nombre;
        this.especie = especie;
        this.tamano = tamano;

}

 
let insecto1= new Insectos("mosquito","bug", "pequeño");
let insecto2= new Insectos("araña", "aracnico", "mediano");

document.write("Muestra N° 1: " + insecto1.);
*/


// OBJETOS CONTRUCTORES CON CLASS

/*class Frutas {
    constructor(nombre, color, origen) {
        this.nombre = nombre;
        this.color = color;
        this.origen = origen;
        this.infoMercaderia = `El nombre de esta fruta es ${this.nombre}, su color es ${this.color} y su pais de origen es ${origen}`;

    }

    Info() {
        document.write(this.infoMercaderia + "<br>");
    }
}

let manzana = ["dulce", "roja", "redonda"];


let fruta1 = new Frutas(prompt("Ingrese una fruta"));
if (fruta1 == "manzana"){
    document.write(`Informacion de manzana: ${manzana}`);
}
*/

// OBJETO LITERAL

/*
let persona1 = {
    nombre: "Franciso",
    apellido: "Vazquez",
    edad: 39,
    altura: "1.67",
    peso: 62,

}

let persona2 = {
    nombre: "Aymara",
    apellido: "Latorre",
    edad: 35,
    altura: 1.52,
    peso: 55,
}


let menu1 = {
    nombre: "Fideos con crema (Incluye bebida)",
    precio: 4000,

}

let menu2 = {
    nombre: "Milanesa con papas fritas (Incluye bebida)",
    precio: 3200,

}

if (persona1.nombre == "Franciso" && menu2.nombre == "Milanesa con papas fritas (Incluye bebida)"){
    document.write(`Fran va a comer ${menu2.nombre}`);

}

*/

//BUCLES FOR

/*
let dato = 7;

for (let i = 1; i <= dato; i++) {

    document.write(i + " ");
}
*/

// BUCLE FOR CON PROMPT

/*for (let i = 1; i <= 3; i++) {

    let ingresoDato = prompt("Ingrese contraseña:");

    if (ingresoDato == "fran") {

        document.write("Puede ingresar al sitio");
        break;

    }

    else if( ingresoDato != "fran" && i == 3){
        document.write(`La contrasena ingresada es incorrecta. Le quedan ${i--} intentos disponibles`)
       break;

    }

}

*/

// BUCLE WHILE MOSTRANDO NUMEROS DEL 1 AL 10 

/*let i= 1;

while(i <= 10){
    document.write(`El valor del bucle es de ${i}<br>`)

    i+=2;
}
*/

// BUCLE WHILE CON PROMP ( INGRESO DE DATOS )

/*let contraseña = prompt("Ingrese un dato");

while (contraseña != "fran") {

    
    alert("La contraseña ingresada es incorrecta");

    contraseña = prompt("Por favor, vuelva a ingrar una contraseña");

}

if(contraseña == "fran"){
    alert("Hola Fran");
}
*/

// WHILE CON IF

/*let ingresoDato = parseInt(prompt("Ingrese un entre 1 y 5"));

while (ingresoDato < 1 || ingresoDato > 5) {

    if(ingresoDato == 0 ){
        alert("Por favor teclee un N° entre 1 y 5. Su numero ingresado fue " + ingresoDato);
    
    }

    ingresoDato = prompt("Vuelva a ingresar un N°")
}    

*/

// DO WHILE

/*let numero = parseInt(0);
let contador = parseInt(1);


do {
   document.write(`el valor del N° en la vuelta N° ${contador} del bucle es ${numero} <br>
   `)
numero += 5;
contador++

if (numero ===300){
    continue;
    }

}while (numero <= 500);

*/

/*let contraseña = prompt("Ingrese un contraseña");
while (contraseña !== "fran") {

    for (let i = 1; i <= 3; i++) {
        contraseña = prompt("Pass incorrecto, vuelva a intentarlo, intento N°" + i);



        if (i === 3) {
            alert("Alcanzo el maximo de errores, intente mas tarde");
        }

    }



}*/


/*function dividir(num1, num2) {

    let resultadoDivision = num1 / num2;

    document.write(`El resultado de la division es: ${resultadoDivision}<br>`)

    return resultadoDivision

}

*/




// LISTADO DE ALUMNOS CON OBJETOS CLASS

/*class Alumnos {
    constructor(nombre, materia, nota) {
        this.nombre = nombre;
        this.materia = materia;
        this.nota = nota;
    }

info (){
    document.write(`${this.nombre} se saco ${this.nota} en ${this.materia} <br>`)
}

}

let alumno1= new Alumnos("Francisco", "Matematicas", 2);
let alumno2= new Alumnos("Aymara", "Psicologia", 10);
let alumno3= new Alumnos("Juan", "Historia", 8);

alumno1.info();
alumno2.info();
alumno3.info();

*/





// FUNCIONES ANONIMAS 
//let restar = function (a,b ) { return a- b};
//document.write(`el resultado de ls resta es ${restar(5,2)}`)


// FUNCIONES FLECHA
/*
let sumar = (a, b) => { return a + b };
document.write(`el resultado de la suma es: ${sumar(15, 20)}<br>`)

// 2do Ejemplo de funcion flecha 

let mlutiplicar = (a, b) => a * b;
document.write(`El resultado de la multiplicacion es: ${mlutiplicar(5,5)}`)
*/




// CONDICIONAL SWITCH

/*let estacion = prompt("Escriba una estacion del año en minuscula:");

switch (estacion) {
    case "invierno":
        alert("Hace frio");
        break;

    case "verano":
        alert("Hace calor");
estacion= prompt("volve a ingresar la estacion"); 

break;


    case "otoño":
        alert("mas bien esta fresco");
        break;

    case "primavera":
        alert("Hace mas bien calor");
        break;

default:
    alert("No ha escrito una estacion del año "); 

    break;
}

*/


// FUNCIONES DE ORDEN SUPERIOR

/*let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function esPar(a) {


    return a % 2 === 0;

}

let pares = numeros.filter(esPar);
document.write(pares + "<br>");

function impar(b) {
    return b % 2 !== 0;

}

let impares = numeros.filter(impar);
document.write(impares);

*/




// // E-COMMERS TIENDA DE PRODUCTOS 
// // LOGGIN DE USUARIO CON 3 INTENTOS

// let usuario = prompt("ingrese su nombre");
// let contraseña = prompt("ingrese su contraseñan");

// let intentos = 2;

// while ((usuario != "Francisco" || usuario != "francisco") && contraseña != "pass") {

//     alert(`Su contraseña es incorrecta, le quedan ${intentos} intentos permitidos`)
//     intentos--
//     prompt("Ingrese nuevamente su contraseña");




//     if (intentos == 0) {
//         alert(`Usted llego al limite maximo de errores permitidos, por favor intente mas tarde`)
//         break;
//     }

// }

// if (usuario == "Francisco" || usuario == "francisco" && contraseña == "pass") {

//     alert(`Bienvenido Fran, te estabamos esperando`);

// }


// VARIABLES DE PRODUCTOS PRODUCTOS

// let bebidasSinAlcohol = ["agua", "gaseosas", "jugo", "energizantes"];
// let bebidasConAlcohol = ["cerveza", "vino", "gin", "fernet", "vodka"];


// Bebidas sin alcohol


// class BebidasNoAlcoholicas {
//     constructor(marca, tamano, sabor, precio) {
//         this.marca = marca;
//         this.tamano = tamano;
//         this.sabor = sabor;
//         this.precio = Number(precio);
//     }
// }


// let cocaCola = new BebidasNoAlcoholicas("Coca Cola", 2.25, "Zero", 2500);
// let sprite = new BebidasNoAlcoholicas("Sprite", 2, "original", 1890);
// let fanta = new BebidasNoAlcoholicas("fanta", 2.50, "naranja", 2750);
// let pasoDeLosToros0 = new BebidasNoAlcoholicas("Paso de los Toros", 2, "Pomelo", 1890);
// let aguaMineralSinGas = new BebidasNoAlcoholicas("Villa del Sur", 1.75, "Mineral sin gas", 1500);
// let aguaMineralConGas = new BebidasNoAlcoholicas("Villa del sur", 1.75, "Mineral con Gas", 1650);
// let energizanteSpeed= new BebidasNoAlcoholicas("Speed", 450, "original", 1500);
// let monster= new BebidasNoAlcoholicas("Monster", 450, "naranja", 1850);




// // Bebidas con alcohol 

// class BebidasAlcoholicas {
//     constructor(marca, tamaño, precio) {
//         this.marca = marca;
//         this.tamaño = tamaño;
//         this.precio = precio;
//     }
// }

// let cervezas = new BebidasAlcoholicas(["heineken", "stella", "miller"], [330, 720, 900], [1200, 1600, 2000]);
// let fernet = new BebidasAlcoholicas(["Branca", "buhero"], [750, 1000], [8000, 9000, 12000]);
// let vinos = new BebidasAlcoholicas(["Norton", "Lopez", "Termidor"], 750, [4000, 4500, 5000]);


// document.write(cervezas.marca[1] + "<br>");
// document.write(cervezas.tamaño[2] + "<br>");
// document.write(calcularIva(cervezas.precio[0]) + "<br>");


// document.write("<br>" +"<br>" +"<br>" );

// document.write(cervezas.marca[2] + "<br>");
// document.write(cervezas.tamaño[2] + "<br>");
// document.write(calcularIva(cervezas.precio[2]) + "<br>");



// function calcularIva(num1) {
//     let resultadoCalculoIva = num1 * 1.21

//     return resultadoCalculoIva;

// }





// document.write(`${cocaCola.marca}: ${calcularIva(cocaCola.precio)}`);




// BUCLE FOR 

// function sumarRango(min, max){
//     total = 0;

// for( let i= min; i <= max; i++){

//     total +=i
// }

// return total;

// }

// console.log(sumarRango(5,9));


// FUNCION DE ORDEN SUPERIOR


function calcularIVa(numero) {

    let resultadoIva = numero * 1.21;
    return resultadoIva;


}



let productos = ["jugo", "agua", "soda"]
let precios = [25, 40, 15];


let precioFinalAgua = `El ${productos[1]} tiene un precio final de ${calcularIVa(precios[2])}`

document.write(precioFinalAgua);

