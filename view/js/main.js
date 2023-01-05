// Evento que valida la data de los campos
$(".contact input").change(function(event) {
	validaCampos();
});

// Envia la data por correo
$(".btn-sent").click(function(event) {
	enviaData();
});