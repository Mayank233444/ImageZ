# ImageZ - AI Image Generator

ImageZ is a powerful AI-based image generator that converts your imagination into visuals using text prompts. Powered by **Clipdrop API** and built with **React**, ImageZ delivers high-quality AI-generated images in a sleek and responsive interface.

> 🚀 Turn your words into art — instantly.
## 🌐 Live Demo

🔗 [Click here to try ImageZ live](https://imagez-client-u3q8.onrender.com)


---

## ✨ Features

- 🖊️ **Text Prompt Input** – Enter any prompt and generate an AI image.

-  🔐 **Secure User Authentication** – JWT-based login and signup system with password encryption using bcrypt.
- ⚡ **Fast Image Generation** – Quickly receives results using CLIPDROP API.
- 🧼 **Responsive UI** – Works smoothly on all screen sizes.
- 🖼️ **Clear Display** – Shows your generated image cleanly without clutter.

---

## 🚀 Tech Stack

### Frontend:
- React.js, React Router DOM
- Tailwind CSS, Framer Motion


### Backend:
- Node.js, Express.js
- MongoDB (Mongoose), JWT, bcryptjs


---

## 📥 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Mayank233444/ImageZ.git
cd ImageZ

```
### 2. Frontend Setup (React + Vite)

```bash
cd client            # navigate to frontend
npm install          # install dependencies

# Create a .env file inside /client with your variables
a) VITE_BACKEND_URL = your_VITE_BACKEND_URL (eg: http://localhost:5000)

npm run dev          # start the development server 

```
### 3. Backend Setup (Express + MongoDB)

```bash
cd server            # navigate to backend
npm install          # install dependencies

# Create a .env file inside /server with your variables
a) MONGO_URI=your_mongo_db_uri
b) JWT_SECRET=your_jwt_secret
c) CLIPDROP_API = your_CLIPDROP_API

npm start            # start the backend server 


```
## Authors

- Made with ❤️ by [@Mayank](https://github.com/Mayank233444)
