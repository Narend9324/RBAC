# RBAC
Role base access control
# Role-Based Access Control (RBAC) Authentication System

This project is a simple **Role-Based Access Control (RBAC)** authentication system built with a **MERN stack** (MongoDB, Express, React, Node.js). It includes user registration, login, and role-based access control features using JWT (JSON Web Tokens) for session management.

## Features
- User registration with encrypted passwords (using **bcryptjs**).
- Secure user login using **JWT** for session management.
- Role-based access control (RBAC) for different user roles (e.g., Admin, User).
- Frontend built with **React** and **Tailwind CSS** for styling.
- Backend built with **Node.js**, **Express**, and **MongoDB**.

## Technologies Used
- **Frontend**: React, Tailwind CSS, Axios
- **Backend**: Node.js, Express, MongoDB, bcryptjs, JWT
- **Authentication**: JWT-based token authentication
- **Authorization**: Role-based access control (RBAC)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/rbac-auth-system.git
cd rbac-auth-system

Setup Backend
Go to the backend folder:

bash
Copy code
cd backend
Install dependencies:

bash
Copy code
npm install
Create a .env file in the backend directory and add your environment variables:

plaintext
Copy code
MONGO_URI=mongodb://localhost:27017/rbac-auth
JWT_SECRET=your_jwt_secret_key
Run the backend server:

bash
Copy code
npm run dev
The server should now be running at http://localhost:5000.

3. Setup Frontend
Go to the frontend folder:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Start the React development server:

bash
Copy code
npm start
