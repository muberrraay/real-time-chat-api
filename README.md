Here is your **README.md** file with proper indentation and formatting:

```md
# 📝 Real-Time Chat API

A real-time chat API built with **Node.js**, **Express**, **MongoDB**, and **Socket.io**.

## 🚀 Features
- 🔹 WebSocket-based real-time messaging
- 🔹 MongoDB database for storing messages
- 🔹 User authentication using JWT
- 🔹 Secure password storage with bcrypt
- 🔹 REST API for user authentication
- 🔹 CORS enabled for frontend connection

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ORM)
- **Real-time Communication:** Socket.io
- **Authentication:** JWT, bcrypt
- **Environment Variables:** dotenv

## 📦 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd real-time-chat-api
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Create a `.env` file
```
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```

### 4️⃣ Start the server
```bash
npm run dev
```
The server runs on **`http://localhost:5000`**.

## 🔥 API Endpoints
| Method | Endpoint    | Description          |
|--------|------------|----------------------|
| POST   | `/signup`  | Register a new user |
| POST   | `/login`   | Login a user        |
| GET    | `/messages` | Fetch chat history  |

## ✨ WebSocket Events
| Event Name      | Description                          |
|----------------|--------------------------------------|
| `chatMessage`  | Send a message                      |
| `message`      | Receive a message from the server   |
| `authenticate` | Authenticate WebSocket connection   |

## 🤝 Contributing
Pull requests are welcome! Feel free to submit issues and feature requests.

## 📜 License
This project is open-source and available under the MIT License.
```

---
