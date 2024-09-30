# Table of Contents
- [Features](#features)
- [Tools and Technologies](#tools-and-technologies)
- [Dependencies](#dependencies)
- [Dev-dependencies](#dev-dependencies)
- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
- [Backend API](#backend-api)
- [Frontend Pages](#frontend-pages)
- [npm Scripts](#npm-scripts)

## Features

### User-side features
- Signup
- Login
- Logout
- Add tasks
- View tasks
- Update tasks
- Delete tasks

### Developer-side features
- Toasts for success and error messages
- Form validations in frontend and backend
- Fully Responsive Navbar
- Token based Authentication
- Use of 404 page for wrong urls
- Relevant redirects
- Global user state using Redux
- Custom Loaders
- Use of layout component for pages
- Use of theme colors
- No external CSS files needed (made using Tailwind CSS)
- Usage of Tooltips
- Dynamic document titles
- Redirect to previous page after login
- Use of various React hooks
- Custom hook also used (useFetch)
- Routes protection
- Middleware for verifying the user in backend
- Use of different HTTP status codes for sending responses
- Standard pratices followed

## Tools and Technologies
- Javascript
- Tailwind CSS
- Node.js
- Express.js
- React
- Redux
- MongoDB

## Dependencies
Following are the major dependencies of the project:
- axios
- react
- react-dom
- react-redux
- react-router-dom
- react-toastify
- redux
- redux-thunk
- bcrypt
- cors
- dotenv
- express
- jsonwebtoken
- mongoose

## Dev-dependencies
Following are the major dev-dependencies of the project:
- nodemon
- concurrently

## Prerequisites
- Node.js must be installed on the system.
- You should have a MongoDB database.
- You should have a code editor (preferred: VS Code)

## Installation and Setup
1. Install all the dependencies
   - npm run install-all
     
2. Create a file named ".env" inside the backend folder. Add data from .env.example file and substitute your credentials there.

3. Start the application
   - `npm run dev`

4. Go to http://localhost:3000 (This URL will be used only when your running your application in local.)

## Backend API
- POST     /api/auth/signup
- POST     /api/auth/login
- GET      /api/tasks
- GET      /api/tasks/:taskId
- POST     /api/tasks
- PUT      /api/tasks/:taskId
- DELETE   /api/tasks/:taskId
- GET      /api/profile

## Frontend Pages
- /                 Home Screen (Public home page for guests and private dashboard (tasks) for logged-in users)
- /signup           Signup page
- /login            Login page
- /tasks/add        Add new task
- /tasks/:taskId    Edit a task

## npm Scripts

- `npm run dev`: Starts both the client and server in development mode.
- `npm run server`: Starts the server using nodemon for auto-reloading.
- `npm run client`: Starts the React client application.
- `npm run build`: Creates a production build of the React application.
- `npm run install-all`: Installs dependencies for both client and server.
- `npm run heroku-postbuild`: Builds the client for production deployment on Heroku.
- `npm start`: Starts the server in production mode.
- `npm test`: Runs tests for the client application.
- `npm run eject`: Ejects the create-react-app configuration (use with caution).

To use these scripts:

1. Navigate to the root directory of your project in the terminal.
2. Run any script using `npm run <script-name>`. For example: `npm run dev`

Note: Make sure you have all the necessary dependencies installed before running these scripts.
