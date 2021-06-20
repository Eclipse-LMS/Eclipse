require("dotenv").config();
const express=require("express");
const app=express();

const cookieParser = require("cookie-parser");
app.use(cookieParser('123'));

app.use(require("cors")({
    origin: "http://localhost:3000"
}))

// Connects Database
const connectDB=require("./config/db");
connectDB();

// Uses json middleware from express to transform data to json format.
app.use(express.json());
const { protect } = require("./middleware/authenticate");
// ***********WRITE ROUTES BELOW*****************

// This forwards any requests to /api/auth to auth.js in routes.
app.use("/api/auth", require("./routes/auth"));
app.use("/api/authenticate", protect, require( "./routes/authenticate"));
app.use("/api/classrooms",require("./routes/classrooms"));
app.use("/api/user",require("./routes/user"));

// Listening to requests at PORT
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server Running on PORT: ${PORT}`))