/*
	Nesecitamos llevar el registro de un vacunatorio, para esto se REGISTRAR DATOS DE LAS PERSONAS VACUNADAS,*MIENTRAS EL USUARIO QUIERA*

	CADA VACUNA SOLICITA:
	-Nombre(entre 3 y 10 caracteres)
	-edad(mayor o igual a 12)
	-tipo de vacuna ("rusa","china","americana")
	si la edad esta entre 12 y 17 solo VACUNA AMERICANA

	-DOSIS:
	"P" en caso de ser la primera dosis 
	"S" en caso de ser la segunda dosis

	-Sexo: "F" o "M"

	INFORMAR:
	1-promedio de edad de los que se vacunanron con la rusa
	2-nombre y vacuna de la mujer con mas edad
	3-De las persona que recibieron la vacuna americana ¿que porcentaje son mayores de edad?
	4-Porcentaje de los que estan vacunados con 2 dosis sobre el total de vacunados
	5-Vacuna menos inoculada

	
*/
function mostrar()
{
	let nombre;
	let edad;
	let vacuna;
	let dosis;
	let contadorSegundaDosis=0;
	let porcentajeSegundaDosis;
	let sexo;
	let contadorVacunas=0;
	let contadorRusas=0;
	let acumuladorEdadRusas=0;
	let contadorAmericana=0;
	let contadorAmericanaAdulto=0;
	let contadorChina=0;
	let vacunadaMayorNombre;
	let vacunadaMayorVacuna;
	let vacunaMayorEdad=0;
	let promedioEdadVacunadosRusa;
	let seguir;	
	let flagEdad=1;
	let contadorTotalVacunadosAmericana;
	let porcentajeMayorEdadAmericana;



	do{
		nombre=prompt("Ingrese su nombre(entre 3 y 10 caracteres)");
		while(!(nombre.length>=3 && nombre.length<=10)){
			nombre=prompt("Ingrese los caracteres correctos porfavor(entre 3 y 10 caracteres)");
		}
		edad=parseInt(prompt("Ingrese su edad:(aprartir de 12 años)"));
		while(isNaN(edad)||edad < 12){
			edad=parseInt(prompt("Ingrese su edad correspondiente:(aprartir de 12 años)"))	;	
		}
		if(edad >= 12 && edad <= 17){
			vacuna="americana";
			contadorAmericana++; 
			contadorVacunas++;
			alert("tu vacuna es la americana");
		}
		else{
			vacuna=prompt("Ingrese su vacuna(americana/rusa/china)").toLowerCase();
			while(vacuna != "americana" && vacuna != "rusa" && vacuna != "china"){
				vacuna=prompt("Ingrese una vacuna valida(americana/rusa/china)").toLowerCase();
			}
			if(vacuna=="americana"){
				contadorAmericanaAdulto++;
			}
			else if(vacuna=="china"){
				contadorChina++;
			}
			else if(vacuna=="rusa"){
				contadorRusas++;
				acumuladorEdadRusas+=edad;
			}
			contadorVacunas++;
		}
		dosis=prompt("Ingrese su dosis(p/s)").toLowerCase();
		while(dosis != "p" && dosis != "s"){
			dosis=prompt("Usted no ingreso la dosis correctamente(p/s)");
		}
		if(dosis=="s"){
			contadorSegundaDosis++;
		}
		sexo=prompt("ingrese su sexo(f/m)").toLowerCase;
		while(sexo != "f" && sexo != "m"){
			sexo=prompt("Ingrese correctamente su sexo(f/m)")
		}

		if(sexo == "f" && vacunaMayorEdad < edad){
			vacunaMayorEdad=edad;
			vacunadaMayorNombre=nombre;
			vacunadaMayorVacuna=vacuna;
		}
		
		
		seguir=prompt("Quiere ingresar otro vacunado?(s/n)");
	}while(seguir=="s");

	promedioEdadVacunadosRusa=acumuladorEdadRusas/contadorRusas;
	porcentajeSegundaDosis=contadorSegundaDosis*100/contadorVacunas;
	contadorTotalVacunadosAmericana=contadorAmericana+contadorAmericanaAdulto;
	porcentajeMayorEdadAmericana=contadorAmericanaAdulto*100/contadorTotalVacunadosAmericana;


	document.write("Promedio de edad de los que se vacunaron con la rusa "+promedioEdadVacunadosRusa+"<br>");
	document.write("Nombre de la mujer mayor edad vacunada "+vacunadaMayorNombre+" con "+vacunaMayorEdad+" con la vacuna "+vacunadaMayorVacuna+" <br>")
	document.write("porcentaje de mayores de edad vacunadas con la americana "+porcentajeMayorEdadAmericana+"<br>");
	document.write("porcentaje de los que estan vacunados con segunda dosis "+porcentajeSegundaDosis)





}