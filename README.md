# 🏠 Rent & Flatmate Finder

A full-stack web application that helps tenants find rental accommodations and compatible flatmates. Property owners can list rooms, while tenants can search, filter, chat with owners, and check AI-based compatibility.

---

## 🚀 Features

### 🔐 Authentication
- User Registration
- User Login
- JWT Authentication
- Role-based Access (Owner / Tenant)

### 🏡 Room Listings
- Create Listing
- View All Listings
- View Listing Details
- Delete Listing
- Owner Dashboard

### 👤 Tenant Features
- Create Tenant Profile
- Search Rooms
- Filter by Location
- AI Compatibility Score

### 💬 Chat
- Real-time messaging using Socket.IO

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Bootstrap 5
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcrypt.js
- Socket.IO

---

## 📂 Project Structure

```
Rent-Flatmate-Finder
│
├── client
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/Rent-Flatmate-Finder.git
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

## ▶️ Run the Application

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm run dev
```

Frontend:

```
http://localhost:5173
```

Backend:

```
http://localhost:5000
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY
```

---



## 👩‍💻 Author

**Anamika Yadav**

B.Tech (Computer Science)

---

## 📄 License

This project is created for educational purposes.
