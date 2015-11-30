function aleatorio(minimo,maximo){
	var numero = Math.floor(Math.random()*(maximo-minimo +1)+minimo);
	return numero;	
}
var nombre = prompt("Escribe tu maldito nombre","Aqui escribelo mens@" )
var piedra = 0;
var papel = 1;
var tijera = 2;
var opciones= ["piedra","papel","tijera"];

var opcionUsuario;
var opcionMaquina =aleatorio(0,2) ;

opcionUsuario = prompt("Elije \n piedra 0. \n papel 1.\n tijéra 2.\n", 0);
alert(nombre + " elegiste "+opciones[opcionUsuario] +"\nLa maquina eligió "+ opciones[opcionMaquina]);

if (opcionUsuario ==piedra){

	if (opcionMaquina == piedra) {
		alert("empate")
	}else if(opcionMaquina == papel) {
		alert("Perdiste "+nombre+" enano de Drabo grande")
	}else if(opcionMaquina == tijera) {
		alert("Ganaste "+nombre+" Enano de Drabo gigante")
	}
}else if (opcionUsuario ==papel){

	if (opcionMaquina == piedra) {
		alert("Ganaste "+nombre+" Enano de Drabo gigante")
	}else if(opcionMaquina == papel) {
		alert("empate")
	}else if(opcionMaquina == tijera) {
		alert("Perdiste "+nombre+" enano de Drabo grande")
	}

}else if (opcionUsuario ==tijera){

	if (opcionMaquina == piedra) {
		alert("Perdiste "+nombre+" enano de Drabo grande")
	}else if(opcionMaquina == papel) {
		alert("Ganaste "+nombre+" Enano de Drabo gigante")
	}else if(opcionMaquina == tijera) {
		alert("empate")
	}		
}else if (opcionUsuario == undefined){
	alert("¿nada? ninguno?")
}else{
	alert("¿nada?")
}