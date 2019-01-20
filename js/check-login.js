$(document).ready(function() {

	(function() {

		var loginValidation = {
			
			valid: false,
			init: function (){
				//вызов внутренних функций
				this._srtUpListeners();
			},

			_srtUpListeners: function(){
				//скрываем по фокусу ошибку
				$('#emailInput').on( 'focus', loginValidation._errorNone);
				$('#passwordInput').on( 'focus', loginValidation._errorNone);

				$('#logIn').on('submit', loginValidation._validateLogin);
			},

			//скрытие ошибки
			_errorNone: function(){
				$('.notify').hide();
			},

			_validateLogin: function(){

				var form = $(this);
				var inputs = form.find('input');
				var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
				var validEmail = false, validPassword = false;

				var userEmail = "info@mail.com",
					userPass = "123456";
				
				// Проверка email на заполненность
				if ( $('#emailInput').val() === '' ) {
					validEmail = false;
					$('#emptyEmailError').show();
					
				//проверка на формат, соответствует ли регулярному выражению
				} else if ( !pattern.test($('#emailInput').val())) {
					validEmail = false;
					$('#emptyEmailError').hide();
					$('#formatEmailError').show();
				} else {
					validEmail = true;
					$('#emptyEmailError').hide();
					$('#formatEmailError').hide();
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
				if (validEmail == true && validPassword == true) {

					if ($('#emailInput').val() == userEmail
						&&  $('#passwordInput').val() == userPass){
							
							loginValidation.valid = true;
					
					} else {
						loginValidation.valid = false;
						$('#ErrorPasswordRecovery').show();
						$('#EmailPassNotFind').show();
						$('#remindLink').show();
					}
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