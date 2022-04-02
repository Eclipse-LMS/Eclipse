if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express=require("express");
const app=express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

// Peer Server
const { ExpressPeerServer } = require("peer");
const peerExpress = require('express');
const peerApp = peerExpress();
const peerServer = require('http').createServer(peerApp);
const options = { debug: true }
const peerPort = 5011;
peerApp.use('/peerjs', ExpressPeerServer(peerServer, options));
peerServer.listen(peerPort);

app.use(require("cors")({
	origin: "http://localhost:3000",
}))

// Connects Database
const connectDB=require("./config/db");
connectDB();

// Uses json middleware from express to transform data to json format.
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(require("express-ejs-layouts"));
app.set("layout", "layouts/layout");

const { protect } = require("./middleware/authenticate");

// ***********WRITE ROUTES BELOW*****************

// This forwards any requests to /api/auth to auth.js in routes.
app.use("/api/auth", require("./routes/auth"));
app.use("/api/authenticate", protect, require( "./routes/authenticate"));
app.use("/api/classrooms",protect,require("./routes/classrooms"));
app.use("/vidcon",require("./routes/vidcon"));

const peerUser = require("./models/PeerUser");
const room = require("./models/Rooms");

// app.use("/api/dashboard",protect,require("./routes/dashboard"));
//api/classroom

io.on("connection", (socket) => {
    socket.on(
        "join-room",
        async (roomId, peerId, userId, name, audio, video) => {
            // add peer details
            await peerUser({
                peerId: peerId,
                name: name,
                audio: audio,
                video: video,
            }).save();
            // add room details
            var roomData = await room.findOne({ roomId: roomId }).exec();
            if (roomData == null) {
                await room({
                    roomId: roomId,
                    userId: userId,
                    count: 1,
                }).save();
                roomData = { count: 0 };
            } else if (roomData.userId == userId) {
                await room.updateOne(
                    { roomId: roomId },
                    { count: roomData.count + 1 }
                );
            }
            socket.join(roomId);
            socket
                .to(roomId)
                .broadcast.emit(
                    "user-connected",
                    peerId,
                    name,
                    audio,
                    video,
                    roomData.count + 1
                );
            socket.on("audio-toggle", async (type) => {
                await peerUser.updateOne({ peerId: peerId }, { audio: type });
                socket
                    .to(roomId)
                    .broadcast.emit("user-audio-toggle", peerId, type);
            });
            socket.on("video-toggle", async (type) => {
                await peerUser.updateOne({ peerId: peerId }, { video: type });
                socket
                    .to(roomId)
                    .broadcast.emit("user-video-toggle", peerId, type);
            });
            // chat
            socket.on("client-send", (data) => {
                socket.to(roomId).broadcast.emit("client-podcast", data, name);
            });
            socket.on("disconnect", async () => {
                roomData = await room.findOne({ roomId: roomId }).exec();
                await room.updateOne(
                    { roomId: roomId },
                    { count: roomData.count - 1 }
                );
                // remove peer details
                await peerUser.deleteOne({ peerId: peerId });
                socket
                    .to(roomId)
                    .broadcast.emit(
                        "user-disconnected",
                        peerId,
                        roomData.count - 1
                    );
            });
        }
    );
});

// Listening to requests at PORT
const PORT=process.env.PORT || 5010;
server.listen(PORT,()=>console.log(`Server Running on PORT: ${PORT}`))
