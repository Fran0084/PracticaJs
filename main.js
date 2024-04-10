function sumar(num1, num2) {

    let resultadoSuma = num1 + num2;
    
    document.write(`El resultado de la suma es: ${resultadoSuma}
    
    `)
    
    return resultadoSuma;
    
    }
    
    function restar(num1, num2) {
    
    let resultadoResta = num1 - num2;
    
    document.write(`El resultado de la resta es:${resultadoResta}
    
    `)
    
    return resultadoResta
    
    }
    
    function multuplicar(num1, num2) {
    
    let resultadoMultiplicacion = num1 * num2;
    
    document.write(`El resultado de la multiplicacion es: ${resultadoMultiplicacion}
    
    `)
    
    return resultadoMultiplicacion
    
    }
    
    function dividir(num1, num2) {
    
    let resultadoDivision = num1 / num2;
    
    document.write(`El resultado de la division es: ${resultadoDivision}
    
    `)
    
    return resultadoDivision
    
    }
    
    let dato1 = parseInt(prompt("Ingrese dato 1" ));
    
    let dato2 = parseInt(prompt("Ingrese dato 2" ));
    
    sumar(dato1, dato2);
    
    restar(dato1, dato2);
    
    multuplicar(dato1, dato2);
    
    dividir(dato1, dato2);