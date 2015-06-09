//Pushes a new question onto the top of the Recent Questions list
function pushQuestion(question) {
	if (question.length > 0) {
		$('#list-questions li:last-child').fadeOut("slow", function() {
			this.remove();
		});

		$('#list-questions').prepend('<li><div class="container"><p>' + question + '</p></div><div class="up-vote"><a href="#">Me too!</a></div></li>');
	}
}

//Clears the ask box text fields and resets the email border
function clearAskBox() {
	$('#field-question').val('');
	$('#field-email').val('')
		.removeClass('border--green')
		.removeClass('border--red');
}

//Validate email function from stackoverflow
function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}




$('#button-ask').click(function(event) {
	event.preventDefault();
	if (validateEmail($('#field-email').val())) {
		var question = $('#field-question').val();
		pushQuestion(question);
		clearAskBox();
	} else {
		$('#field-email').addClass('border--red');
	}
});


$('#field-email').keyup(function(event) {
	if ($(this).val() === "") {
		$(this).removeClass('border--green')
			.removeClass('border--red');
	} else if (validateEmail($(this).val())) {
		$(this).removeClass('border--red')
			.addClass('border--green');
	} else {
		$(this).removeClass('border--green')
			.addClass('border--red');
	}
});