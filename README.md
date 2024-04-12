# AvianBlue

 <h2> Description</h2>
This project aims to create a full-stack web application using React for the front end and Node.js for the backend. The application includes login and sign-up pages, authentication using JSON Web Tokens (JWT), email verification, a dashboard with a logout button, and is designed using Bootstrap for styling.

 <h2> Features </h2>
 <ul>
   <li>Login and Sign-up Pages: Users can log in to their accounts or sign up for a new account.</li>
   <li>JWT Authentication: Passwords are encrypted using JWT for secure authentication.</li>
   <li>Email Verification: Users with verified email addresses can log in; otherwise, they are redirected to the sign-up page.</li>
   <li>Dashboard: After successful login, users are redirected to the dashboard with a welcome message and other relevant information.</li>
   <li>Navbar with Logout Button: The dashboard includes a navbar with a logout button for users to log out of their accounts.</li>
   <li>Logout Functionality: Clicking on the logout button redirects users to the login page.</li>
   <li>Bootstrap Design: The application is designed using Bootstrap for a responsive and visually appealing layout.</li>
</ul>

<h3>Installation </h3>
To run this project locally, follow these steps:
<ul>
  <li>Clone the repository: git clone <repository-url>/li>
  <li>Install dependencies for the frontend and backend:</li>
  <li>For frontend: cd frontend && npm install</li>
  <li>For backend: cd backend && npm install</li>
</ul>

<h4>Set up environment variables:</h4>
<ul>
  <li>Create a .env file in the backend directory and add necessary variables (e.g., database connection string, JWT secret).</li>
  <li>Start the backend server: cd backend && npm start</li>
  <li>Start the frontend development server: cd frontend && npm start</li>
  <li>Access the application in your browser at http://localhost:3000</li>
</ul>

<h4>Usage</h4>
Login: Navigate to the login page and enter your credentials to log in.
Sign-up: If you don't have an account, you can sign up for a new account.
Dashboard: After successful login, you will be redirected to the dashboard, where you can view your account information and other relevant data.
Logout: Click on the logout button in the navbar to log out of your account.

<h4>Technologies Used</h4>
React
Redux
Node.js
Express
MongoDB
JSON Web Tokens (JWT)
Bootstrap
