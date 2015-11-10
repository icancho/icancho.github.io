
// function Pokemon(nombrepoke, typepoke, lifepoke, atapoke){
// 	var estructura={
// 		namep: nombrepoke,
// 		typep: typepoke, 	
// 		lifep: lifepoke,
// 		attackp: atapoke,
// 	};
// 	return estructura;
// };

// var pikachu = Pokemon("pikachu","Electrico",100,55);
// var bulbasaur = Pokemon("bulbasaur","tierra",90,50);

// document.write(pikachu.namep+"\n");
// document.write(bulbasaur.namep);

function Pokemon(n,v,a,g){
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.grito = g;
	this.gritar = function ()
	{
		alert(this.grito);
	}
}

var jiglipuff = new Pokemon("Jiglipuff", 55, 30);
jiglipuff.vida = jiglipuff.vida - 20; 


var ratata = new Pokemon("ratata", 95, 40, "mierda culo \n mierda culo \n muierda culo!!!!!!!");
ratata.vida = ratata.vida + 20; 

nombrePokemon.innerText = jiglipuff.nombre;
nombrePokemon.innerText = ratata.nombre;
vidaPokemon.innerText = ratata.vida;
ataquePokemon.innerText = ratata.ataque;
prompt(" Estas seguro que quieres escucharlo?")
ratata.gritar();