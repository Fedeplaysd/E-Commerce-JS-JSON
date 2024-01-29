//INTENTO DE REGISTRO USUARIO

let botonVerificar = document.getElementById("verificar");
let inputUsuario = document.getElementById("inputNombreUsuario");
let inputClaveUsuario = document.getElementById("inputClaveUsuario");

botonVerificar.addEventListener("click", verificar);

function verificar() {
	if (
		inputUsuario.value === "Tutor" ||
		("Profesor" && inputClaveUsuario.value === "123") ||
		"456"
	) {
		Swal.fire({
			title: "Genial!",
			text: "Aqui tienes una hermosa foto para ti!",
			imageUrl: "https://unsplash.it/400/200",
			imageWidth: 400,
			imageHeight: 200,
			imageAlt: "Custom image",
		});
	} else {
		alert("Mal papa");
	}
}
