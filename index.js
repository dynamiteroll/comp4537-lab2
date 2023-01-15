const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.static('client'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

app.post('/chat', (req, res) => {
    console.log(req.body);
    const message = req.body.message;
    const number = message.match(/\d+/);
    if (number) {
        fetch(`http://numbersapi.com/${number}?type=trivia`).then(response => response.text()).then(data => {
            console.log(data);
            res.json({
                text: data
            });

        }).catch(error => {
            res.json({
                text: "No info about number found."
            });
        })
    } else {
        res.json({
            text: "Please provide number."
        });
    }
} )