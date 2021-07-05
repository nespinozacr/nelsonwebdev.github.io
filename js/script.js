"use strict";

const addZero = num => {
	if(num.toString().length < 2) return "0".concat(num);
	return num;
}

const actualizarHora = () => {
	const time = new Date();
	let hora = addZero(time.getHours());
	let minutos = addZero(time.getMinutes());
	let segundos = addZero(time.getSeconds());
	document.querySelector(".hora").textContent = hora+" :";
	document.querySelector(".minutos").textContent = minutos+" :";
	document.querySelector(".segundos").textContent = segundos;
}
actualizarHora();
setInterval(actualizarHora,1000);