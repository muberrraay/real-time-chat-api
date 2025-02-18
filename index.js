require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ MongoDB Connection Error:", err));

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const Message = require('./models/Message');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*", // Allow all origins for now
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(express.json());

// API Route
app.get("/", (req, res) => {
    res.send("Real-Time Chat API is running...");
});

// WebSocket connection
io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    // Send chat history to the user when they connect
    Message.find().sort({ timestamp: 1 }).then(messages => {
        socket.emit("chatHistory", messages);
    });

    // Listen for incoming chat messages
    socket.on("chatMessage", async (data) => {
        try {
            const newMessage = new Message({
                sender: data.sender,  // Example: "User1"
                content: data.content // Example: "Hello, world!"
            });
            await newMessage.save();

            console.log("📨 Message Saved:", newMessage);

            // Send the message to all connected clients
            io.emit("message", newMessage);
        } catch (err) {
            console.error("❌ Error saving message:", err);
        }
    });

    socket.on("disconnect", () => {
        console.log("A user disconnected:", socket.id);
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
