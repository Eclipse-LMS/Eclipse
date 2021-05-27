require("dotenv").config();
const express=require("express");
const app=express();


app.use(require("cors")())
app.use(express.json())

// Connects Database
const connectDB=require("./config/db");
connectDB();

// Uses json middleware from express to transform data to json format.
app.use(express.json());

// ***********WRITE ROUTES BELOW*****************

// This forwards any requests to /api/auth to auth.js in routes.
app.use("/api/auth", require("./routes/auth"));


// Listening to requests at PORT
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server Running on PORT: ${PORT}`))