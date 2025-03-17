# Password Reset Flow - FrontEnd

This project implements a password reset flow that includes email verification and updating the user's password securely in the database.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Routes](#Route-Values)

## Features
- **User Registration Form**: Register new users with hashed passwords. 
- **User Login Form**: Authenticate users and issue JWTs for authorized access. These were done by Backend.
- **JWT-Based Authorization**: Protect routes using httpOnly tokens.
- **Secure User Info Retrieval**: Users can retrieve their information using valid tokens.
- **Error Handling and Validation**: Proper error messages and input validations.
- **Route Documentation**: Detailed documentation using Postman, with sample requests and responses.

## Tech Stack
- **React**: JavaScript library for building the user interface.
- **React Router**: For handling navigation and routing between pages.
- **Tailwind CSS**: For styling the app, making it responsive.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Prasanna0401/Password-Reset-Flow-FrontEnd.git
   ```

2. Install dependencies:

    ```bash 
    npm install axios
    npm install react-router-dom
    npm install validator
    ```

4. Run the Application
    ```bash
    npm run dev
    ```

## Routes
    baseURL:https://passwordresetflowfe.netlify.app/
1. [Home Route](https://passwordresetflowfe.netlify.app/) `('/')`-> **Home URL**
2. [Login Route](https://passwordresetflowfe.netlify.app/signin) `('/signin')`-> **Login URL**
3. [Registration Route](https://passwordresetflowfe.netlify.app/register) `('/register')`-> **Registration URL**
4. [Forget Password Route](https://passwordresetflowfe.netlify.app/PasswordReset) `('/PasswordReset')`-> **Forget Password URL**
4. [UserInfo Route](https://passwordresetflowfe.netlify.app/userInfo) `('/userInfo')`-> **Get User Information URL** - This is a protected route. It works only when the user is logged in.

> [!NOTE]
> We generate Emails after the successful registration of the user. The application emails the credentials to the user.
> Incase if the user forgot their password, using the email, we forward them the tokens which will be valid for 3 Hours. Within that three hours, they can use the token to reset their password for the application. Unless it will invalid.