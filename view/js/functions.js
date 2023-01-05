function validaCampos() {
	// var passvalidation = false;
	var passvalidation = new Array(3);
	$(".contact input").each(function() {
		if ($(this).val() != ""){			
			switch ($(this).attr('name')) {
				case "nombre":
				case "apellido":			
				passvalidation[0] = validaNombres($(this).val(), this, $(this).attr('name'));
				break;
				case "telefono":
				passvalidation[1] = validaTelefono($(this).val(), this, $(this).attr('name'));
				break;
				case "correo":
				passvalidation[2] = validarCorreo($(this).val(), this, $(this).attr('name'));
				break;
			}
		}
		else
			passvalidation[3] = false;
	});	

	var state = 0;

	$.each(passvalidation, function(index, val) {
		 if(val == false){
		 	state = index;
		 	return false;
		 }else {
		 	state = index;
		 }
	});

	if(passvalidation[state] == true){
		$(".btn-sent").removeAttr('disabled');
	} else {
		$(".btn-sent").attr('disabled','disabled');
	}
}

function validaNombres (campo, field, fieldMessenge) {
	var conditions = new RegExp("[^0-9]");
	if (conditions.test(campo)) {
		$(field).blur().css('border', '0');
		$(".menssage."+fieldMessenge).text("");
		return true;
	} else {
		$(field).focus().css('border', '1px solid red');
		$(field).val("");
		$(".menssage."+fieldMessenge).text("Solo se permiten letras");
		return false;			
	}
}

function validaTelefono (campo, field, fieldMessenge) {
	var conditions = new RegExp("[^a-z]");
	if (conditions.test(campo)) {
		$(field).blur().css('border', '0');
		$(".menssage."+fieldMessenge).text("");
		return true;
	} else {
		$(field).focus().css('border', '1px solid red');
		$(field).val("");
		$(".menssage."+fieldMessenge).text("Solo se permiten numeros");
		return false;		
	}
}

function validarCorreo (campo, field, fieldMessenge) {
	var conditions = new RegExp("^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$");
	if (conditions.test(campo)) {
		$(field).blur().css('border', '0');
		$(".menssage."+fieldMessenge).text("");
		return true;
	} else {
		$(field).focus().css('border', '1px solid red');
		$(field).val("");
		$(".menssage."+fieldMessenge).text("Formato de correo invalido");
		return false;
	}
}

function enviaData (argument) {	
	var jason_params = {};
	$(".contact input,textarea").each(function(index, value) {
		jason_params[$(value).attr('name')] = $(value).val();
	});

	$.post('view/php/EnviaCorreo.php', jason_params, function(response) {
		if(response == "SUCCESS"){
			$(".contact input").val("");
			$(".mensaje-mail").addClass('success');
			$(".mensaje-mail").fadeIn("fast");
			$(".mensaje-mail span").text('Correo enviado, pronto nos contactaremos con usted.');
		}else {
			$(".mensaje-mail").addClass('error');
			$(".mensaje-mail").fadeIn("fast");
			$(".mensaje-mail span").text('Error al enviar el correo.');
		}
	});
	
	setTimeout(function function_name (argument) {
		$(".mensaje-mail").fadeOut("slow");
	}, 3000);
}