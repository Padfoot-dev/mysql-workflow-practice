const exp = require("constants");
const express = require("express");
const path = require("path");
const adminRoutes = require("./routes/admin/adminRoute");



const app =express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")))


app.use(adminRoutes);
app.use("/",(req,res,next)=> {
    res.send("Hello from express")
});

app.listen(3000,()=> {console.log("Listening on port 3000")});