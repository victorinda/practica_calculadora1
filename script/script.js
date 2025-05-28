function sumar(a, b) {
	var r= parseInt(a.value)+parseInt(b.value);
	alert("El resultado de la suma es: "+r);
	document.getElementById("resul").innerHTML="El resultado de la suma es: "+r;
}
function restar(a, b) {
	var r= parseInt(a.value)-parseInt(b.value);
	alert("El resultado de la resta es: "+r);
	document.getElementById("resul").innerHTML="El resultado de la resta es: "+r;

}
function multiplicar(a, b) {
	var r= parseInt(a.value)*parseInt(b.value);
	alert("El resultado de la multiplicacion es: "+r);
	document.getElementById("resul").innerHTML="El resultado de la multiplicacion es: "+r;

}
function dividir(a, b) {
	var r= parseInt(a.value)/parseInt(b.value);
	alert("El resultado de la division es: "+r);
	document.getElementById("resul").innerHTML="El resultado de la division es: "+r;

}