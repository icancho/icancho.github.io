var tablero;

var teclas =
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
var fondo ={
	imagenURL:"img/fondo.png",
	imagenOK:false
};

var santi ={
	frenteURL:"img/sanas.png",
	derURL:"img/santi-der.png",
	izqURL:"img/santi-izq.png",
	atrasURL:"img/santi-atras.png",
	frenteOK:false,
	izqOK:false,
	derOK:false,
	atrasOK:false,
	velocidad:10,
	x:130,
	y:130
};

var sanas ={
	frentesanasURL:"img/santi-frente.png",
	frentesanasOK:false,
	x:350,
	y:150
};



function inicio(){
	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");

	fondo.imagen =  new Image();
	fondo.imagen.src =  fondo.imagenURL;
	fondo.imagen.onload = confirmarFondo;
	
	santi.frente =  new Image();
	santi.frente.src =  santi.frenteURL;
	santi.frente.onload = confirmarFrente;
	
	santi.atras =  new Image();
	santi.atras.src =  santi.atrasURL;
	santi.atras.onload = confirmarAtras;
	
	santi.der =  new Image();
	santi.der.src =  santi.derURL;
	santi.der.onload = confirmarDer;
	
	santi.izq =  new Image();
	santi.izq.src =  santi.izqURL;
	santi.izq.onload = confirmarIzq;

	sanas.frentesanas =  new Image();
	sanas.frentesanas.src =  sanas.frentesanasURL;
	sanas.frentesanas.onload = confirmarFrenteSanas;

	document.addEventListener("keydown", teclado);
};

function teclado(datos){
		console.log(santi.y+" y")
		console.log(santi.x+" x")
		console.log("---")

	var codigo= datos.keyCode;
	// if(santi.y <= 0 || santi.y == 460 ||santi.x <= 0 || santi.x == 460){
	// 	dibujar(codigo);<

	if(santi.y <= 0){
		santi.y += santi.velocidad;
		dibujar(codigo);
	}
	if(santi.y >= 140 && santi.y <= 200 && santi.x <140){
		santi.y -= santi.velocidad;

	}
	if(santi.y >= 140 && santi.y <= 240 && santi.x <140){
		santi.y += santi.velocidad;
		santi.x += santi.velocidad;
	}

	if(santi.x >= 160 && santi.x <= 230 && santi.y <210){
		santi.x -= santi.velocidad;

	}
	if(santi.x >= 160 && santi.x <= 240 && santi.y <250){
		santi.x += santi.velocidad;
		santi.y += santi.velocidad;
	}

	if(santi.y >= 300 && santi.y < 330 && santi.x >=90){
		santi.y -= santi.velocidad;

	}
	if(santi.y >= 300 && santi.y <= 380 && santi.x >=90){
		santi.y += santi.velocidad;
		santi.x += santi.velocidad;
	}
	if(santi.x == 460){
		santi.x -= santi.velocidad;
		dibujar(codigo);
	};
	if(santi.y == 460){
		santi.y -= santi.velocidad;
		dibujar(codigo);
	};		
	if(santi.x <= 0){
		santi.x += santi.velocidad;
		dibujar(codigo);

	}else{
		if(codigo == teclas.UP){
			santi.y -= santi.velocidad;
		};
		if(codigo == teclas.DOWN){
			santi.y += santi.velocidad;
		};
		if(codigo == teclas.LEFT){
			santi.x -= santi.velocidad;
		};		
		if(codigo == teclas.RIGHT){
			santi.x += santi.velocidad;
		};	
		dibujar(codigo);

	}
};

function confirmarFondo(){
	fondo.imagenOK = true;
	dibujar();
};
function confirmarFrenteSanas(){
	sanas.frentesanasOK = true;
	dibujar();
};

function confirmarFrente(){
	santi.frenteOK = true;
	dibujar();
};
function confirmarAtras(){
	santi.atrasOK = true;
	dibujar();
};
function confirmarDer(){
	santi.derOK = true;
	dibujar();
};
function confirmarIzq(){
	santi.izqOK = true;
	dibujar();
};

function dibujar(direccion){

	if (fondo.imagenOK){
		tablero.drawImage(fondo.imagen, 0, 0);
	}

	if (sanas.frentesanasOK == true){
		tablero.drawImage(sanas.frentesanas, sanas.x, sanas.y);
	}
		// capa 2
	var santiDibujo = santi.frente;
	if (santi.frenteOK && santi.atrasOK && santi.derOK && santi.izqOK){

		if(direccion == teclas.DOWN) {
			santiDibujo = santi.frente;
		}
		if(direccion == teclas.LEFT) {
			santiDibujo = santi.izq;
		}
		if(direccion == teclas.RIGHT) {
			santiDibujo = santi.der;
		}
		if(direccion == teclas.UP) {
			santiDibujo = santi.atras;
		}
	}
	tablero.drawImage(santiDibujo, santi.x, santi.y);

	// capa 3
}

// function movimientomr(){
// 	santi.x += 10;
// 	dibujar();
// }
// function movimientoml(){
// 	santi.x -= 10;
// 	dibujar();
// }

// function movimientosr(){
// 	sanas.x += 10;
// 	dibujar();
// }
// function movimientosl(){
// 	sanas.x -= 10;
// 	dibujar();
// }