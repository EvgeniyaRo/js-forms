$(document).ready(function() {

	(function() {

		var loginValidation = {
			
			valid: true,
			init: function (){
				//вызов внутренних функций
				this._srtUpListeners();
			},

			_srtUpListeners: function(){
				// $('.notify').css('display', 'none');
				$('#logIn').on('submit', loginValidation._validateLogin);
			},


			_validateLogin: function(){

				var form = $(this);
				var inputs = form.find('input');
				var loginValid = true;
				var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
				var validEmail = false, validPassword = false;

				var userEmail = "info@mail.com",
					userPass = "123456";

				// Проверка email на заполненность
				if ( $('#emailInput').val() === '' ) {
					$('#emptyEmailError').show();
					validEmail = false;
				} else if ( !pattern.test($('#emailInput').val())) {
					validEmail = false;
					$('#emptyEmailError').hide();
					$('#formatEmailError').show();
				} else {
					validEmail = true;
					$('#emptyEmailError').hide();
				}


				// Проверка пароля на заполненность
				if ( $('#passwordInput').val() === '' ) {
					validPassword = false;
					$('#emptyPasswordError').show();
				} else {
					validPassword = true;
					$('#emptyPasswordError').hide();
				}

				if (validEmail == true && validPassword == true ) {
					loginValidation.valid = true;
				} else {
					loginValidation.valid = false;
				}



				console.log(loginValidation.valid);

				if ( loginValidation.valid == false ) {
					event.preventDefault();
				} else {
					$('#logIn').unbind('submit').submit();

				}





				
				// $.each(inputs , function(index, val){
				// 	var input = $(val);
				// 	var value = input.val().trim();
				// 	var emptyInputError = input.siblings('#emptyInputError');
				// 	var ErrorPasswordRecovery = input.siblings('#ErrorPasswordRecovery');
				// 	console.log(value);
					
				// 	if ( value == '' ) {
						
				// 		// alert("нету");


				// 	} else {
				// 		// alert("есть");
				// 	// 	// commentValid = false;
				// 	// 	// $('.notify--error').css('display', 'block');
				// 	}

				// })
			}


		};
		loginValidation.init();
	}());

});