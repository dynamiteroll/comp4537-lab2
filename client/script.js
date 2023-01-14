// $(document).ready(function() {
// 	$('#form').submit(function(event) {
// 		event.preventDefault();
// 		const message = $('#input').val();
//         $.ajax({
//             type: 'POST',
// 			url: 'https://adp4537lab2.onrender.com/chat',
// 			data: {
// 				message: message
// 			},
// 			success: function(response) { 
//                 let newMessage = $('<div>', {
//                     class: 'message'
//                 }).text(response.text);
//                 let removeButton = $('<button>', {
//                     class: 'removebtn'
//                 }).text('Remove');
//                 newMessage.append(removeButton);
//                 $('#history').append(newMessage);      
// 			}
//         })
// 	});
// });

// $(document).on('click', '.removebtn', function() {
// 	$(this).parent().remove();
// });

// VANILLA JS
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const message = document.getElementById('input').value;
    //fetch('https://adp4537lab2.onrender.com/chat', {
    fetch('http://localhost:8000/chat', {
      method: 'POST',
      body: JSON.stringify({ message: message }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.innerHTML = response.text;
        const removeButton = document.createElement('button');
        removeButton.classList.add('removebtn');
        removeButton.innerHTML = 'Remove';
        newMessage.appendChild(removeButton);
        document.getElementById('history').appendChild(newMessage);
      })
      .catch(error => console.error('Error:', error));
  });
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('removebtn')) {
      event.target.parentNode.remove();
    }
  });
});