# StayFinder Backend

This is the backend for the StayFinder, built using Node.js and Express. The backend provides RESTful APIs for user authentication and property listings management.

## Features

- User authentication (register and login)
- CRUD operations for property listings
- Middleware for protecting routes

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd property-app/backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the backend server, run:
```
npm start
```

The server will run on `http://localhost:5000` by default.

### API Endpoints

- **Authentication**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Login an existing user

- **Listings**
  - `GET /api/listings` - Retrieve all listings
  - `GET /api/listings/:id` - Retrieve a specific listing by ID
  - `POST /api/listings` - Create a new listing (protected route)

### Middleware

The application includes middleware for authentication to protect certain routes.

## License

This project is licensed under the MIT License.