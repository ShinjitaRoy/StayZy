# Property App

This project is a property management web application built with a React frontend and a Node.js/Express backend. It allows users to browse property listings, view details, and manage their own listings if they are hosts.

## Features

- **Homepage**: Displays property cards with essential information.
- **Listing Detail Page**: Shows detailed information about a specific property.
- **User Authentication**: Includes login and registration pages with validation.
- **Host Dashboard**: (Optional) Allows hosts to manage their property listings.

## Technologies Used

- **Frontend**: React, React Router
- **Backend**: Node.js, Express
- **Database**: (To be determined, e.g., MongoDB, PostgreSQL)
- **Authentication**: JWT (JSON Web Tokens)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- A code editor (e.g., VS Code).

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd property-app
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

The application should now be running on `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend (or whichever port you have configured).

## API Endpoints

- **Authentication**
  - `POST /api/auth/register`: Register a new user.
  - `POST /api/auth/login`: Log in an existing user.

- **Listings**
  - `GET /api/listings`: Retrieve all listings.
  - `GET /api/listings/:id`: Retrieve a specific listing by ID.
  - `POST /api/listings`: Create a new listing (host only).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.