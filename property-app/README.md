# Property App

## Overview
Property App is a web application that allows users to browse, manage, and book properties. The application consists of a frontend built with React and a backend powered by Node.js and Express (or Django). 

## Features
- **Homepage**: Displays a list of property cards showcasing available listings.
- **Listing Detail Page**: Provides detailed information about a specific property, including images, description, and availability.
- **User Authentication**: Users can register and log in to manage their bookings and listings.
- **Host Dashboard**: An optional feature for hosts to manage their property listings.

## Project Structure
The project is organized into two main directories: `frontend` and `backend`.

### Frontend
- **Components**: Reusable UI components such as PropertyCard, LoginForm, and RegisterForm.
- **Pages**: Different pages of the application including Home, ListingPage, Login, Register, and Dashboard.
- **Utils**: Utility functions for form validation.

### Backend
- **Controllers**: Handle the business logic for authentication and listings.
- **Models**: Define the data structure for User and Listing.
- **Routes**: Define the API endpoints for authentication and listings.
- **Middleware**: Protect routes and verify user authentication.

## Getting Started

### Prerequisites
- Node.js
- npm (Node Package Manager)
- MongoDB (for backend, if using Node.js)

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

### API Endpoints
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
This project is licensed under the MIT License.