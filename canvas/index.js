var dibujo, lienzo;
function inicio(){
	dibujo = document.getElementById("dibujito");
	lienzo = dibujo.getContext("2d");
	lienzo.moveTo(0,0);
	lienzo.lineTo(300,0);
	lienzo.lineTo(300,300);
	lienzo.lineTo(0,300);
	lienzo.lineTo(0,0);
	lienzo.strokeStyle = "#F00";
	lienzo.stroke();

	dibujargrillas(lienzo);
// circulos
	lienzo.beginPath();
	lienzo.	strokeStyle = "#00F";
	for (var i = 100; i >= 0; i = i-7) {
		lienzo.arc(150,150,i, Math.PI *2 , false);
	};
	lienzo.closePath();
	lienzo.stroke();

}
function dibujargrillas(l){
	var ancho = 300, alto = 300;
	var lineatop = 10
	var lineastart = 30

	lienzo.strokeStyle = "#397B0E";
	for (linea = 0; linea <= lineatop; linea++ ){
		l.beginPath();
		l.moveTo(lineastart * linea,0);
		l.lineTo(lineastart * linea,300);
		lienzo.closePath();
		l.stroke();
	};
	for (linea = 0; linea <= lineatop; linea++ ){
		l.beginPath();
		l.moveTo(0, lineastart * linea);
		l.lineTo(300, lineastart * linea);
		lienzo.closePath();
		l.stroke();
	};

}; 
