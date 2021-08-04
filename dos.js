/*
    ingresar 
    nacionalidad
    resultado
    edad
    cepa
    PARA INGRESAR DEBE SER NEGATIVO EL RESULTADO

    INFORMAR
    A-porcentaje de positivos
    B-Porcentaje de negativo
    c-Cual es la cepa mas encontrada
    D-edad del mayor extranjero contagiado
    E-cantidad de personas argentinas contagiadas con la delta

*/
function mostrar()
{
    let nacionalidad;
    let resultado;
    let edad;
    let cepa;
    let contadorPositivos=0;
    let contadorNegativos=0;
    let porcentajeNegativos;
    let porcentajePositivos;
    let contadorDelta=0;
    let contadorAlfa=0;
    let contadorBeta=0;
    let cepaMasEncontrada;
    let edadMayorExtranjeroContagiado;
    let cantidadArgentinosContagiadosDelta=0;
    let flag=1;

    for(let i=0;i < 8;i++){

        nacionalidad=prompt("Usted es argentino o extranjero?").toLowerCase();
        while(nacionalidad != "argentino" && nacionalidad != "extranjero"){
            nacionalidad=prompt("ingrese correctamente si usted es argentino o extanjero").toLowerCase();
        }

        edad=parseInt(prompt("Ingrese su edad(entre 18 y 65)"));
        while(isNaN(edad)){
            edad=parseInt(prompt("Ingrese correctamente su edad(entre 18 y 65)"));
        }
        while(!(edad > 17 && edad <= 65)){
            edad=parseInt(prompt("Ingrese correctamente su edad(entre 18 y 65)"));
        }
        
        
        resultado=prompt("Ingrese su resultado del hisopado(positivo/negativo)").toLowerCase();
        while(resultado != "positivo" && resultado != "negativo"){
            resultado=prompt("Ingrese su resultado del hisopado correctamente (positivo/negativo)").toLowerCase();
        }
        if(resultado=="negativo"){
            alert("Bienvenido argentina")
            contadorNegativos++;
            cepa="ninguna"
        }
        else{
            cepa=prompt("Ingrese la cepa(delta/alfa/beta)").toLowerCase();
            while(cepa != "delta" && cepa != "alfa" && cepa != "beta" ){
                cepa=prompt("Ingrese la cepa(delta/alfa/beta)").toLowerCase();
            }
            contadorPositivos++;
        }
        if(cepa=="delta"){
            contadorDelta++;
        }
        if(cepa=="alfa"){
            contadorAlfa++;
        }
        if(cepa=="beta"){
            contadorBeta++;
        }
        if(flag=1){
            edadMayorExtranjeroContagiado=edad
            flag=0;
        }
        if (flag=0 && edadMayorExtranjeroContagiado > edad){
            edadMayorExtranjeroContagiado=edad;
        }
        if(nacionalidad=="argentino" && cepa=="delta"){
            cantidadArgentinosContagiadosDelta++;
        }

    }
    if (contadorAlfa > contadorBeta && contadorAlfa > contadorDelta){
        cepaMasEncontrada="Cepa Alfa";
    }
    else if(contadorDelta >= contadorAlfa && contadorDelta > contadorBeta ){
        cepaMasEncontrada="Cepa Delta";

    }
    else{
        cepaMasEncontrada="Cepa Beta";
    }
    porcentajeNegativos=contadorNegativos*100/8
    porcentajePositivos=contadorPositivos*100/8

    document.write("El porcentaje de positivos es de "+porcentajePositivos+"% <br>");
    document.write("El porcentaje de negativo es de "+porcentajeNegativos+"% <br>");
    document.write("La cepa mas encontrada es "+cepaMasEncontrada+"<br>");
    document.write("La edad del mayor extranjero contagiado es "+edadMayorExtranjeroContagiado+"<br>");
    document.write("La cantidad de argentinos con la cepa delta es de "+cantidadArgentinosContagiadosDelta);

}
