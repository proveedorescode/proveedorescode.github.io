"use strict";

var forma = document.getElementById("forma"),
campos = ["Clave", "Nombre","Telefono","Fecha"],
salidas = ["salidaClave", "salidaNombre","salidaTelefono","salidaFecha"];

forma.addEventListener("submit", procesa, false);

function procesa(){
	for(var i = 0, longitud = campos.length; i < longitud; i++){
		var campo = forma[campos[i]];
		var salida = document.getElementById(salidas[i]);
		salida.value = campo.value;

	}
}
