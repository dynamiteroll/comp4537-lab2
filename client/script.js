$(document).ready(function() {
	$('#form').submit(function(event) {
		event.preventDefault();
		const message = $('#input').val();
        $.ajax({
            type: 'POST',
			url: 'https://adp4537lab2.onrender.com/chat',
			data: {
				message: message
			},
			success: function(response) { 
                let newMessage = $('<div>', {
                    class: 'message'
                }).text(response.text);
                let removeButton = $('<button>', {
                    class: 'remove-button'
                }).text('Remove');
                newMessage.append(removeButton);
                $('#history').append(newMessage);      
			}
        })
	});
});

$(document).on('click', '.remove-button', function() {
	$(this).parent().remove();
});