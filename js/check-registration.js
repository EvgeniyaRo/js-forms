$(document).ready(function() {

	(function() {

		var loginRegistration = {
			
			valid: true,
			init: function (){
				//вызов внутренних функций
				this._srtUpListeners();
			},

			_srtUpListeners: function(){
				$('#reg').on('submit', loginRegistration._validateLogin);
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
				} else if ( $('#emailInput').val() == userEmail) {
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
				} else {
					validPassword = true;
					$('#emptyPasswordError').hide();
				}
				// если все верно - отправляем форму и переходим на страницу успех
				if (validEmail == true && validPassword == true ) {
					loginRegistration.valid = true;
				} else {
					loginRegistration.valid = false;
				}

				if ( loginRegistration.valid == false ) {
					event.preventDefault();
				} else {
					$('#reg').unbind('submit').submit();

				}

			}


		};
		loginRegistration.init();
	}());

});