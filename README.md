Perfect 👍 Here’s your **cleaned, professional, and fully formatted `README.md`** — ready to paste directly into your GitHub repository.

---

# LinkedIn Clone - Social Media Web Application

A full-stack social media web application similar to LinkedIn, built with **React.js**, **Node.js**, **Express.js**, and **MongoDB**.

---

## 🚀 Features

### Core Features

* ✅ **User Authentication** – Register and login with email/password
* ✅ **Create Posts** – Users can create text posts
* ✅ **View Feed** – See all posts from users in chronological order (latest first)
* ✅ **User Profile Display** – Show user's name on top navigation bar

### Bonus Features Implemented

* ✅ **Like Posts** – Users can like/unlike posts
* ✅ **Comment System** – Add comments to posts
* ✅ **Edit Posts** – Users can edit their own posts
* ✅ **Delete Posts** – Users can delete their own posts
* ✅ **User Profile Page** – View individual user profiles with their posts
* ✅ **Update Profile** – Users can edit their name and bio
* ✅ **Responsive Design** – Mobile-friendly UI

---

## 🛠️ Tech Stack

### Frontend

* **React.js** (v18.2.0)
* **React Router DOM** (v6.20.0) – Client-side routing
* **Axios** (v1.6.2) – HTTP client
* **CSS3** – Styling

### Backend

* **Node.js** – Runtime environment
* **Express.js** (v4.18.2) – Web framework
* **MongoDB** with **Mongoose** (v8.0.0) – Database
* **JWT** (jsonwebtoken v9.0.2) – Authentication
* **bcryptjs** (v2.4.3) – Password hashing
* **CORS** – Cross-origin resource sharing
* **dotenv** – Environment variables

---

## 📋 Prerequisites

Before running this project, make sure you have:

* **Node.js** (v14 or higher)
* **MongoDB** installed locally or a MongoDB Atlas account
* **npm** or **yarn** package manager

---

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd linkedin-clone
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the **backend** directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/linkedin-clone
JWT_SECRET=your_super_secret_jwt_key_change_this
NODE_ENV=development
```

**Note:** If using MongoDB Atlas, replace `MONGODB_URI` with your connection string.

Create an `uploads` folder for image storage:

```bash
mkdir uploads
```

Start the backend server:

```bash
npm run dev
```

Backend will run on **[http://localhost:5000](http://localhost:5000)**

---

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
```

Create a `.env` file in the **frontend** directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm start
```

Frontend will run on **[http://localhost:3000](http://localhost:3000)**

---

## 📱 How to Use

1. **Visit the Application:** Open `http://localhost:3000` in your browser
2. **Sign Up:** Create a new account with name, email, and password
3. **Login:** Login with your credentials
4. **Create Posts:** Share your thoughts by creating posts
5. **Interact:** Like and comment on posts
6. **Manage Posts:** Edit or delete your own posts
7. **View Profile:** Click on your name to view your profile
8. **Logout:** Click the logout button to exit

---

## 📂 Project Structure

```
linkedin-clone/
├── backend/
│   ├── config/         # Database configuration
│   ├── controllers/    # Request handlers
│   ├── middleware/     # Auth middleware
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   └── server.js       # Entry point
├── frontend/
│   ├── public/         # Static files
│   └── src/
│       ├── components/ # Reusable components
│       ├── pages/      # Page components
│       ├── services/   # API calls
│       ├── utils/      # Helper functions
│       ├── App.js      # Main component
│       └── App.css     # Styles
└── README.md
```

---

## 🌐 API Endpoints

**Base URL:** `http://localhost:5000/api`

### Authentication

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | `/auth/register` | Register new user |
| POST   | `/auth/login`    | Login user        |
| GET    | `/auth/me`       | Get current user  |

### Posts

| Method | Endpoint              | Description      |
| ------ | --------------------- | ---------------- |
| GET    | `/posts`              | Get all posts    |
| POST   | `/posts`              | Create new post  |
| GET    | `/posts/user/:userId` | Get user's posts |
| PUT    | `/posts/:id`          | Update post      |
| DELETE | `/posts/:id`          | Delete post      |
| POST   | `/posts/:id/like`     | Like/unlike post |
| POST   | `/posts/:id/comment`  | Add comment      |

### Users

| Method | Endpoint         | Description      |
| ------ | ---------------- | ---------------- |
| GET    | `/users/:id`     | Get user profile |
| PUT    | `/users/profile` | Update profile   |

---

## 🚀 Deployment

### Frontend (Netlify or Vercel)

**Netlify:**

```bash
cd frontend
npm run build
```

Then drag and drop the `build` folder to [Netlify](https://www.netlify.com).

**Vercel:**

```bash
cd frontend
vercel --prod
```

---

### Backend (Render or Railway)

**Render:**

1. Push code to GitHub
2. Create a new Web Service on Render
3. Connect the GitHub repository
4. Add environment variables
5. Deploy

**Railway:**

```bash
cd backend
railway login
railway init
railway add
railway up
```

---

## 🔐 Security Features

* Password hashing with **bcryptjs**
* **JWT**-based authentication
* Protected API routes
* Input validation
* CORS configuration
* Environment variable protection

---

## 🎨 UI Features

* Clean, professional design inspired by LinkedIn
* Responsive layout for all devices
* Interactive buttons and animations
* User-friendly forms
* Real-time updates

---

## 📝 Future Enhancements

* 🖼️ Image upload for posts
* 🔍 Search functionality
* 👥 User connections/following
* 🔔 Notifications
* 💬 Direct messaging
* 🔁 Post sharing
* ✍️ Rich text editor
* #️⃣ Hashtags and mentions

---

## 🐛 Troubleshooting

**MongoDB Connection Error:**

```bash
# Ensure MongoDB is running
mongod
```

* Check `MONGODB_URI` in `.env`

**Port Already in Use:**

* Change `PORT` in `backend/.env`
* Update `REACT_APP_API_URL` in `frontend/.env`

**CORS Errors:**

* Verify backend CORS configuration
* Check `API_URL` in frontend `.env`

---

## 👨‍💻 Author

Created as part of a **Full Stack Developer Internship Assignment**

---

## 📄 License

This project is open source and available under the **MIT License**.

---

**Happy Coding! 🚀**

---