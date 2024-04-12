# AvianBlue

Description
This project aims to create a full-stack web application using React for the front end and Node.js for the backend. The application includes login and sign-up pages, authentication using JSON Web Tokens (JWT), email verification, a dashboard with a logout button, and is designed using Bootstrap for styling.

Features
Login and Sign-up Pages: Users can log in to their accounts or sign up for a new account.
JWT Authentication: Passwords are encrypted using JWT for secure authentication.
Email Verification: Users with verified email addresses can log in; otherwise, they are redirected to the sign-up page.
Dashboard: After successful login, users are redirected to the dashboard with a welcome message and other relevant information.
Navbar with Logout Button: The dashboard includes a navbar with a logout button for users to log out of their accounts.
Logout Functionality: Clicking on the logout button redirects users to the login page.
Bootstrap Design: The application is designed using Bootstrap for a responsive and visually appealing layout.
Installation
To run this project locally, follow these steps:

Clone the repository: git clone <repository-url>
Install dependencies for the frontend and backend:
For frontend: cd frontend && npm install
For backend: cd backend && npm install
Set up environment variables:
Create a .env file in the backend directory and add necessary variables (e.g., database connection string, JWT secret).
Start the backend server: cd backend && npm start
Start the frontend development server: cd frontend && npm start
Access the application in your browser at http://localhost:3000
Usage
Login: Navigate to the login page and enter your credentials to log in.
Sign-up: If you don't have an account, you can sign up for a new account.
Dashboard: After successful login, you will be redirected to the dashboard, where you can view your account information and other relevant data.
Logout: Click on the logout button in the navbar to log out of your account.
Technologies Used
React
Redux
Node.js
Express
MongoDB
JSON Web Tokens (JWT)
Bootstrap
