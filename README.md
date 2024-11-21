# Full Stack Application: Landing Page and Admin Panel
## Overview
This project is a full-stack web application comprising a Landing Page and an Admin Panel. The application allows users to explore projects and client information, submit contact forms, and subscribe to newsletters via the landing page. The admin panel enables project and client management while viewing user-submitted data for contact forms and newsletter subscriptions.

## Objective
The objective of this project is to build a full-stack web application consisting of a Landing Page for public users and an Admin Panel for content management. The project focuses on providing a platform to showcase projects, client testimonials, and handle user interactions effectively. It also serves as a hands-on implementation of modern full-stack development concepts, with features for CRUD operations and real-time data management.

## Tech stack
1. Frontend: React, Tailwind CSS/Bootstrap
2. Backend: Node.js, Express.js
3. Database: MongoDB (hosted on MongoDB Atlas)
4. Deployment: AWS/Heroku/Other cloud platform
5. Version Control: Git/GitHub

## Features
### Landing Page
- View projects and client testimonials dynamically.
- Submit a contact form.
- Subscribe to the newsletter.

### Admin Panel
- Manage projects and clients.
- View contact form submissions.
- View newsletter subscribers.
## Steps and Approach
**Frontend Development**
The frontend serves as the user-facing interface. Key steps include:

1. **Setting Up the Frontend Environment**
    Used React to create a component-based structure for reusability and maintainability.
    Set up the project using Vite for a faster build and development experience.

2. **Design and styling:**
    Implemented a responsive design using Tailwind CSS or Bootstrap for ease of styling and layout management.
    Ensured components like the landing page sections (Projects, Happy Clients, Contact Form, Newsletter Subscription) adhered to the given reference images.

3. **API Integration:**
    Used fetch or axios to interact with backend APIs.
    Dynamically fetched data for the Projects and Happy Clients sections, ensuring updates from the admin panel reflected on the landing page in real-time.

4. **Form Handling:**
    Designed a Contact Form and Newsletter Subscription section with validation to collect user data.
    Sent user inputs securely to the backend using RESTful API calls.

**Backend Development**
The backend provides the necessary APIs and database interaction logic. Steps include:

1. **Setting Up the Backend Environment:**
    Used Node.js and Express.js for building a lightweight and scalable backend.
    Organized the codebase into modular routes and controllers for managing projects, clients, contacts, and subscriptions.

2. **Database Integration:**
    Used MongoDB Atlas as the database service for storing project, client, contact form, and subscription data.
    Defined schema models using Mongoose for validation and easy database management.

3. **API Endpoints:**
    Created RESTful API endpoints for the following:
    Projects: CRUD operations (Create, Read, Update, Delete).
    Clients: CRUD operations.
    Contacts: Fetch submitted contact forms.
    Subscriptions: Fetch newsletter subscriptions.

**Image Handling:**
    Implemented image cropping functionality to ensure uploaded images adhered to the specified dimensions (e.g., 450x350) before storing them in the database.

**Environment Configuration:**
    Used .env files to securely store sensitive configurations such as database URIs and server ports.

## Steps to Run the Application Locally
### Frontend Setup
1. Navigate to the frontend directory:
    `cd frontend`

2. Install dependencies:
    `npm install`

3. Start the development server:
    `npm run dev`

### Backend Setup
1. Navigate to the backend directory:
    `cd backend`
2. Install Dependencies
    `npm install`
3. Create a .env file in the backend directory with the following variables:
    `MONGO_URI=your_mongodb_connection_string`
    `PORT=5000`
4. Start the backend server
    `npm run dev`

## Database Details
    MongoDB Atlas is used for database hosting.
**Collections:**
`projects:` Stores project details (image URL, name, description).
`clients:` Stores client testimonials (image URL, name, description, designation).
`contacts:` Stores contact form submissions (name, email, mobile, city).
`subscriptions:` Stores newsletter subscription emails.

## Security Measures
1. Input Validation: Sanitized and validated all user inputs.
2. Environment Variables: Kept sensitive information (e.g., MongoDB URI) secure in .env files.
3. CORS: Configured to allow requests only from the frontend domain.
4. Image Upload Security: Implemented server-side processing for image cropping and sanitization.

## Screenshots
### Landing page
![Screenshot 2024-11-21 222527](https://github.com/user-attachments/assets/a4d62552-a0d9-461c-b28f-1a5d37eadacc)
![Screenshot 2024-11-21 222550](https://github.com/user-attachments/assets/0ab446ad-8aef-49c1-b657-b292b391d1d2)
![Screenshot 2024-11-21 222601](https://github.com/user-attachments/assets/2f0773aa-73f5-4db3-9d89-942468e3a2a5)


### Sign up page
![Screenshot 2024-11-21 222626](https://github.com/user-attachments/assets/cfbbdc21-b2a8-42f7-92fd-c662743bdc34)

### Login page
![Screenshot 2024-11-21 222612](https://github.com/user-attachments/assets/91e5747b-abf5-403f-a45b-2c6effd4de95)

### Admin panel
![Screenshot 2024-11-21 222700](https://github.com/user-attachments/assets/cc1a9434-0b0e-454f-b135-a29269bbe579)

### All Contacts
![Screenshot 2024-11-21 222711](https://github.com/user-attachments/assets/65d0f614-689d-4841-aa0a-720047f86cae)

### New project
![Screenshot 2024-11-21 222723](https://github.com/user-attachments/assets/2a9ba7c6-a9b5-451d-aaf0-300368e2b572)

### Add new user
![Screenshot 2024-11-21 222740](https://github.com/user-attachments/assets/c14030e5-6e47-47c4-aec7-2bba02986497)
