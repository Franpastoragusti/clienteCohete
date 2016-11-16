let imagen = document.getElementById('cohete')
let monstruo = document.getElementById('monstruo')
var margen = 0;
let proyectil = document.getElementById('proyectil')
y=0;

document.addEventListener('mousemove', movimientoImagen);
document.addEventListener('keydown', shoot);

function shoot (e) {
	e.preventDefault();//quita efectos de eventos

	let evento = window.event || e;

	if (evento.keyCode == 32) {
			document.getElementById('proyectil').className ="present";
			interval = setInterval(moverBala,20)

	}


}


function moverBala(){
	proyectil.style.position="absolute";
	margen+=20;
	proyectil.style.left = margen+'px';
	console.log(margen)

	if(margen == screen.width - 100){
		clearInterval(interval);
		document.getElementById('proyectil').className ="";
		proyectil.style.left = '0px';
		margen=0;

	}
}

document.addEventListener('mousemove', movimientoImagen);

function movimientoImagen(e){
  y=e.pageY;
	proyectil.style.position="absolute";
  proyectil.style.top= y+"px";
  imagen.style.position="absolute";
  imagen.style.top= y+"px";
}
