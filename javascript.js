let mayor = prompt("Ingrese su edad para pasar a la fiesta", 0);
const ahora = new Date();
const hora = ahora.getHours();

if (mayor >= 18) {
  alert("Usted es mayor, puede pasar");
} else if (hora >= 2 && hora < 3) {
  alert("¡Entrada gratis para el primer invitado después de las 2 AM!");
} else if (mayor < 18) {
  alert("Lo siento, usted es menor de edad y no puede ingresar");
} else {
  alert("Lo siento, debe pagar entrada");
}