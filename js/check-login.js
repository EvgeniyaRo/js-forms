$(document).ready(function() {

	(function() {

		var loginValidation = {
			
			valid: true,
			init: function (){
				//вызов внутренних функций
				this._srtUpListeners();
			},

			_srtUpListeners: function(){
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
				//проверка на формат, соответствует ли регулярному выражению
				} else if ( !pattern.test($('#emailInput').val())) {
					validEmail = false;
					$('#emptyEmailError').hide();
					$('#formatEmailError').show();
				//проверка, зарегистрирован ли в базе
				} else if ( $('#emailInput').val() !== userEmail) {
					validEmail = false;
					$('#ErrorPasswordRecovery').show();
				} else {
					validEmail = true;
					$('#emptyEmailError').hide();
					$('#ErrorPasswordRecovery').hide();
				}


				// Проверка пароля на заполненность
				if ( $('#passwordInput').val() === '' ) {
					validPassword = false;
					$('#emptyPasswordError').show();
				//проверка, зарегистрирован ли в базе и соответствует ли Email
				} else if ( $('#passwordInput').val() == userPass && $('#emailInput').val() == userEmail) {
						validPassword = true;
						$('#emptyPasswordError').hide();
						$('#ErrorPasswordRecovery').hide();
						
				} else {
					validPassword = false;
					$('#ErrorPasswordRecovery').show();
				}
				// если все верно - отправляем форму и переходим на страницу успех
				if (validEmail == true && validPassword == true ) {
					loginValidation.valid = true;
				} else {
					loginValidation.valid = false;
				}

				if ( loginValidation.valid == false ) {
					event.preventDefault();
				} else {
					$('#logIn').unbind('submit').submit();

				}

			}


		};
		loginValidation.init();
	}());

});