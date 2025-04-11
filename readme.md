# Multi-Part Form Backend

This is the backend API for a multi-part form application built with Express.js and MongoDB.

## Features

- Complete REST API for form submissions
- MongoDB database integration with Mongoose
- File upload handling with Multer
- Input validation with Express Validator
- Error handling middleware
- Authentication with JWT
- Modular architecture

## Project Structure

\`\`\`
├── config/             # Configuration files
│   ├── db.js           # Database connection
│   └── multerConfig.js # File upload configuration
├── controllers/        # Request handlers
│   ├── authController.js    # Authentication controller
│   ├── formController.js    # Form submission controller
│   └── optionsController.js # Dropdown options controller
├── middleware/         # Custom middleware
│   ├── asyncHandler.js      # Async error handling
│   ├── authMiddleware.js    # Authentication middleware
│   ├── errorHandler.js      # Global error handler
│   └── validation.js        # Form validation
├── models/             # MongoDB schemas
│   ├── Form.js         # Form data schema
│   └── User.js         # User schema
├── routes/             # API routes
│   ├── authRoutes.js   # Authentication routes
│   ├── formRoutes.js   # Form submission routes
│   └── optionsRoutes.js # Dropdown options routes
├── utils/              # Helper functions
│   ├── apiFeatures.js  # Advanced query features
│   ├── dataUtils.js    # Data manipulation utilities
│   └── passwordUtils.js # Password hashing utilities
├── uploads/            # Uploaded files directory
├── .env                # Environment variables
├── .env.example        # Example environment variables
├── app.js              # Express app setup
├── index.js            # Server entry point
└── README.md           # Project documentation
\`\`\`

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Installation

1. Clone the repository
\`\`\`bash
git clone https://github.com/yourusername/multi-part-form-backend.git
cd multi-part-form-backend
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Create a .env file based on .env.example
\`\`\`bash
cp .env.example .env
\`\`\`

4. Update the .env file with your MongoDB connection string and JWT secret

5. Start the development server
\`\`\`bash
npm run dev
\`\`\`

## API Endpoints

### Form Submissions

- `POST /api/forms` - Create a new form submission
- `GET /api/forms` - Get all form submissions
- `GET /api/forms/:id` - Get a single form submission
- `PUT /api/forms/:id` - Update a form submission
- `DELETE /api/forms/:id` - Delete a form submission

### Dropdown Options

- `GET /api/options/:field` - Get options for a specific field (countries, employmentStatus, hobbies)
- `GET /api/options/cities/:country` - Get cities for a specific country

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `GET /api/auth/me` - Get current user (protected)
- `GET /api/auth/logout` - Logout user

## File Upload

The API supports file uploads for resumes. Files are stored in the `uploads` directory and the file path is saved in the database.

## Validation

All form submissions are validated using Express Validator. The validation rules are defined in the `middleware/validation.js` file.

## Error Handling

The API includes a global error handler that catches all errors and returns a standardized error response.

## Authentication

The API includes JWT authentication for protecting routes. The authentication middleware is defined in the `middleware/authMiddleware.js` file.

## License

This project is licensed under the MIT License.
