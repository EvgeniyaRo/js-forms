$(document).ready(function() {

	(function() {

		var commetnValidation = {
			
			valid: true,
			init: function (){
				//вызов внутренних функций
				this._srtUpListeners();
			},

			_srtUpListeners: function(){
				//скрываем по фокусу ошибку
				$('#add_comment').on( 'focus', commetnValidation._errorNone);
				//по сабмиту запускаем проверки и отправляем или выдаем ошибки
				$('#form_comment').on('submit', commetnValidation._chekCommentSubmit);
			},

			//скрытие ошибки
			_errorNone: function(){
				$('.notify--error').css('display', 'none');
			},

			//проверка на заполненность. сделана методом jQery.
			//и отправка формы в случае успеха с переходом на страницу успех
			_chekCommentSubmit: function(event){

				var form = $(this);
				var inputs = form.find('textarea');
				var commentValid = true;

				$.each(inputs , function(index, val){
					var input = $(val);
					var value = input.val().trim();

					if (value) {
						$('#form_comment').unbind('submit').submit();

					} else {
						event.preventDefault();
						$('.notify--error').css('display', 'block');
					} 

					
				})

			},


		};
		commetnValidation.init();
	}());

});