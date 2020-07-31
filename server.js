const express = require("express");
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const {connect} = require('mongoose');
const { PORT,MONGODB_URL} = require('./config');


const app =express();
//*== CONNECT DATABASE ===*//
connect(
    MONGODB_URL , 
    { useNewUrlParser: true , useUnifiedTopology: true},
    (err)=>{
        if (err) throw err;
        console.log("Myntra database connection successfully connected");
    });
//*====Template engine middleware starts here =======*/
app.engine("handlebars", exphbs());
app.set("view engine","handlebars");
//*====Template engine middleware ends here =======*/
// *===body parser incoming request stream to convert data=starts here==*//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// *===body parser incoming request stream to convert data=ends here==*//
/*===server static assets */
app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname +"/node_modules"));
//* load routes modules *//
app.use('/profile/' , require('./Routes/profiles/profile'));
app.use("/auth/", require("./Routes/auth/auth"));
app.use("/sports/", require("./Routes/products/sports"));
// let port = 4000;
app.listen(PORT, (err)=>{
    if (err) throw err;
    console.log('myntra server is running on port number'+ PORT);
});