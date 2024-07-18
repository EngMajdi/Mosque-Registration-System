# Mosque Registration System

This project is a web-based application for registering mosques. It includes user authentication, mosque registration, and the ability to view and edit registered mosques.

## Features

- User Registration and Login
- Mosque Registration with Image Upload
- View Registered Mosques
- Edit Registered Mosques

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- JWT (JSON Web Tokens)
- HTML/CSS
- JavaScript

## Project Setup

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/mosque-registration-system.git
    cd mosque-registration-system
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your JWT secret:
    ```env
    JWT_SECRET=your_jwt_secret
    ```

4. Start the server:
    ```sh
    npm start
    ```

The server will be running on `http://localhost:5000`.

### Directory Structure

```plaintext
mosque-registration-system/
├── models/
│   ├── userModel.js
│   └── mosqueModel.js
├── routes/
│   ├── userRoutes.js
│   └── mosqueRoutes.js
├── middleware/
│   └── auth.js
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── login.js
│   │   └── mosque.js
│   ├── login.html
│   ├── mosque.html
│   └── index.html
├── server.js
└── package.json
Usage
1. Open your browser and navigate to http://localhost:5000.
2. Register a new user or log in with an existing user.
3. Register a mosque by filling out the form and uploading an image.
4. View the list of registered mosques and edit them if needed.

API Endpoints
User Routes
POST /api/users/register - Register a new user
POST /api/users/login - Log in an existing user
Mosque Routes
POST /api/mosques/register - Register a new mosque (protected route)
GET /api/mosques/view - View all registered mosques (protected route)
PUT /api/mosques/edit/:id - Edit a mosque's details (protected route)
Authentication
This project uses JWT for authentication. Upon successful login, a token is generated and stored in local storage. This token is then used to authorize requests to protected routes.

License
This project is licensed under the MIT License.

Acknowledgements
This project was developed as a learning exercise for creating a full-stack web application with Node.js and MongoDB.
Special thanks to all open-source contributors whose libraries and frameworks made this project possible.