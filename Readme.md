# Revoltron

## Project Overview
Revoltron is a full-stack user authentication project featuring login and registration functionality. The backend is implemented using AWS Lambda functions with DynamoDB as the database, and the frontend is a simple web interface built with HTML, CSS, and TypeScript. The project demonstrates secure user authentication with password hashing and serverless architecture.

## Project Structure
- `lambda/`  
  Contains AWS Lambda functions for user login and registration.  
  - `login/` - Lambda function handling user login requests.  
  - `register/` - Lambda function handling user registration requests.

- `login-project/`  
  Contains the main project with separate frontend and backend directories.  
  - `backend/` - Backend AWS Lambda functions for login and registration using AWS SDK.  
  - `frontend/` - Frontend web application source code including HTML, CSS, and TypeScript.

## Backend
The backend consists of AWS Lambda functions that handle user authentication:  
- **Login Lambda**: Validates user credentials by fetching user data from DynamoDB and comparing hashed passwords using bcrypt.  
- **Register Lambda**: Registers new users by hashing passwords with bcrypt and storing user data in DynamoDB.  

The backend uses AWS SDK's DynamoDB DocumentClient and client for DynamoDB to interact with the database.

## Frontend
The frontend is a simple web interface that allows users to:  
- Navigate between login and registration forms with smooth animations.  
- Submit login and registration requests to the backend API endpoints.  
- Receive success or error messages based on the backend response.

The frontend is built with:  
- HTML for structure  
- CSS for styling  
- TypeScript for client-side logic and API communication

## Setup and Installation
1. **Backend Deployment**  
   - Deploy the Lambda functions (`login` and `register`) to AWS Lambda.  
   - Ensure DynamoDB table named `Users` exists with `email` as the primary key.  
   - Configure API Gateway endpoints to trigger the Lambda functions for login and registration.

2. **Frontend Setup**  
   - Serve the frontend files (`index.html`, `style.css`, `script.js`) using any static file server or open `index.html` directly in a browser.  
   - Update the API endpoint URLs in `script.ts` if your backend API Gateway URLs differ.

## Usage
- Open the frontend in a browser.  
- Use the **Register** form to create a new user account.  
- Use the **Login** form to authenticate with your registered credentials.  
- Alerts will notify you of success or failure for each action.

## Technologies Used
- AWS Lambda  
- AWS DynamoDB  
- AWS SDK for JavaScript  
- bcryptjs for password hashing  
- HTML, CSS, TypeScript for frontend  
- Fetch API for client-server communication

## License
This project is open source and available under the MIT License.

## Contact
For any questions or feedback, please contact the project maintainer.
