const express = require("express");
const app = express();
const path = require('path')
const ejsLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./models/contact')
const PORT = process.env.PORT || 3000;


app.use(express.static("public"));

const url = process.env.MONGO_URI || 'mongodb://localhost:27017/contact';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
.then(()=>{
    console.log("Database Connected")
}).catch(err=>{
    console.log(err)
})
//set view engine
app.use(ejsLayouts)
app.set("views", "./views")
app.set("view engine", "ejs");

//body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())

const router = require('./routes/web')

app.use(router)

app.use(express.urlencoded({
    extended:false
}))
app.use(express.json())


app.listen(PORT, () => {
    console.log(`server is running on the port ${PORT}.`);
})
