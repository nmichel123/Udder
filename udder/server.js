const express = require ('express');
const cors = require('cors');

const app = express();

const db = require('./src/models');
db.sequelize.sync()

var corsOptions = {
    origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send("Udder. Welcome to the Farm. Moo.")
})

require('../udder/src/routes/udder.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

// git