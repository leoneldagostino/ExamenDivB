/*
	llegan 10 vuelos
	Registrar
	origen (asia,europa,usa)
	cantidad de vacunas 
	costo de vuelo(1 millon y 5 millones de pesos)
	
	INFORMAR
	1. el origen que envio mayor cantidad de vacunas
	2. el promedio de vacunas llegadas de asia
	3.el total sin descuento a pagar por los gastos del viaje 
	4.si en total recibieron mas de 4 millones de vacunas se hace un descuento de 30%
	si se reciben 2 y 4 millones el descuento es del 20 % con menor cantidad no hay descuento.
	
	se debe informar si hubo descuento- de cuanto y el iumporte final
*/
function mostrar()
{
	let cantidadVacunas;
	let origen;
	let costoVuelo;
	let contadoAsia;
	let contadoEuropa;
	let contadoUsa;

	let origenMayorCantidad;
	let promedioVacunasAsia;
	let costoSinDescuento;
	let descuento;

	cantidadVacunas=parseInt(prompt("Cuantas vacunas ingresan"));
	while(isNaN(cantidadVacunas) || cantidadVacunas < 1){
		cantidadVacunas=parseInt(prompt("Ingrese la cantidad de vacunas correctas"))
	}

	origen=prompt("Las vacunas vienen de USA,Asia o europa?").toLowerCase();
	while(origen != "usa" && origen != "europa" && origen != "asia" ){
		origen=prompt("ingrese de donde vinieron las vacunas correctamente(usa,asia,europa)");
	}


	costoVuelo=parseInt(prompt("Ingrese el costo del vuelo (entre 1 millon y 5 millones de pesos:"))
	while(isNaN(costoVuelo)) {
		costoVuelo=parseInt(prompt("Ingrese el costo correcto:"))
	}
	while (!(costoVuelo >= 1000000 && costoVuelo <= 5000000)){
		costoVuelo=parseInt(prompt("Ingrese el costo correcto:"))
	}

	if (origen=="usa"){
		contadoAsia++;
	}
	if (origen=="usa"){
		contadoEuropa++;
	}
	if (origen=="usa"){
		contadoUsa++;
	}

}
