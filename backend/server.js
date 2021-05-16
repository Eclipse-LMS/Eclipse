require("dotenv").config();
const express=require("express");
const app=express();
const connectDB=require("./config/db");
const PORT=process.env.PORT || 5000;
connectDB();





// Listening to requests at PORT
app.listen(PORT,()=>console.log(`Server Running on PORT: ${PORT}`))