### **📌 How to Add a `README.md` File for Your GitHub Project**
A `README.md` file is important because it **explains your project** to others (or to yourself in the future).

---

### **1️⃣ Create a `README.md` File**
In your project folder, run:
```bash
touch README.md
```
Or, if you're using **VS Code**:
- Right-click inside your project folder.
- Click **New File**.
- Name it **`README.md`**.

---

### **2️⃣ Add Content to `README.md`**
Open `README.md` and add this:

```md
# 📝 Real-Time Chat API

A real-time chat API built with **Node.js**, **Express**, **MongoDB**, and **Socket.io**.

## 🚀 Features
- 🔹 **WebSocket-based real-time messaging**
- 🔹 **MongoDB database for storing messages**
- 🔹 **User authentication using JWT**
- 🔹 **Secure password storage with bcrypt**
- 🔹 **REST API for user authentication**
- 🔹 **CORS enabled for frontend connection**

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ORM)
- **Real-time Communication:** Socket.io
- **Authentication:** JWT, bcrypt
- **Environment Variables:** dotenv

## 📦 Installation & Setup
### 🔹 1. Clone the repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd real-time-chat-api
```

### 🔹 2. Install dependencies
```bash
npm install
```

### 🔹 3. Create a `.env` file
```
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```

### 🔹 4. Start the server
```bash
npm run dev
```
The server runs on **`http://localhost:5000`**.

## 🔥 API Endpoints
| Method | Endpoint         | Description          |
|--------|-----------------|----------------------|
| POST   | `/signup`        | Register a new user |
| POST   | `/login`         | Login a user        |
| GET    | `/messages`      | Fetch chat history  |

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
