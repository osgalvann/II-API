const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
app.use(helmet());
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const sequelize = require("./config/db");

app.use('/v1',require('./routes/index'));

//const PORT = 4001;
app.listen(process.env.PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
});

try{
    sequelize.authenticate();
    console.log("Connection to database successful");
}
catch (error){
    console.error("Unable to connect to the database: ",error);
}