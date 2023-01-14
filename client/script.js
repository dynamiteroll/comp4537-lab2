document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('form').addEventListener('submit', function (event) {
      event.preventDefault();
      const message = document.getElementById('input').value;
      fetch('https://adp4537lab2.onrender.com/chat', {
      //fetch('http://localhost:8000/chat', {
        method: 'POST',
        body: JSON.stringify({ message: message }),
        headers: {
          'Content-Type': 'application/json',
          'Origin' : 'https://adp4537lab2.onrender.com/chat',
          'Access-Control-Allow-Origin' : '*'

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