/*function sumar(num1, num2) {
    let resultadoSuma = num1 + num2;
    document.write(`El resultado de la suma es: ${resultadoSuma}<br>`)

    return resultadoSuma;

}

function restar(num1, num2) {

    let resultadoResta = num1 - num2;

    document.write(`El resultado de la resta es: ${resultadoResta}<br>`)

    return resultadoResta

}

function multuplicar(num1, num2) {

    let resultadoMultiplicacion = num1 * num2;

    document.write(`El resultado de la multiplicacion es: ${resultadoMultiplicacion}<br>`)

    return resultadoMultiplicacion

}

function dividir(num1, num2) {

    let resultadoDivision = num1 / num2;

    document.write(`El resultado de la division es: ${resultadoDivision}<br>`)

    return resultadoDivision

}

let dato1 = parseInt(prompt("Ingrese dato 1"));

let dato2 = parseInt(prompt("Ingrese dato 2"));

sumar(dato1, dato2);

restar(dato1, dato2);

multuplicar(dato1, dato2);

dividir(dato1, dato2);*/


//CONTADOR DE NUMERO DEL 1 AL 10

/*let numeroIngresado = Number(prompt("Ingrese un Numero:"));

for (let i = 0; i <= numeroIngresado; i++) {

    if (i == 5) {
        continue;
    }

    if( i== 110){
        continue;
    }



    document.write(`${i}<br>`);

}*/

// MUESTRA NUMEROS PARES

/*let num= Number(prompt("Ingrese un N°:"))

for(let i=0; i<=num; i+=2){
    if (num % 2 == 0){
        document.write(i)
    }
}*/



// PEDIDO DE LOGGIN HASTA 3 ERRORES

/*let userContraseña = 123;
let nombreDeUsuario = "Francisco";
let ingresoContraseña = prompt("Ingrese su contraseña");

if (ingresoContraseña == userContraseña) {
    alert(`Bienvenido ${nombreDeUsuario}`)

}

if (ingresoContraseña != userContraseña) {
    alert("Contraseña incorrecta, le quedan 2 intentos")
    ingresoContraseña = prompt("Ingrese su contraseña");
}


if (ingresoContraseña != userContraseña) {
    alert("contraseña incorrecta, le queda 1 intento")
    ingresoContraseña = prompt("Ingrese su contraseña");
}


if (ingresoContraseña != userContraseña){
    alert("Contraseña incorrecta, bloqueado");
    
}
*/



// PEDIDO DE LOGGIN CON WHILE HASTA 3 INTENTOS



let contraseñaPedido = prompt("Ingrese contraseña");
let erroresPermitidos= 2; 
while (contraseñaPedido != "pancho") {


    alert("su contraseña es incorrecta, le quedan " + erroresPermitidos + " errores permitidos");
    numero = prompt("Ingrese contraseña")
    erroresPermitidos--

    if(erroresPermitidos == 0)
    {break;}
}

if (contraseñaPedido == "pancho") {

    alert("Bienvenido Fran")

}

