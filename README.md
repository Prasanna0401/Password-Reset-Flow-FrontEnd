## Password Reset Flow Application

This is a full-stack application that implements a password reset flow with email verification. The front-end is built with React and styled using Tailwind CSS, while the back-end is powered by Node js, Express and MongoDB for database.

## Features

- User can request a password reset link via email.
- Users can reset their password using a secure link.
- Password reset token has an expiry time.
- Responsive UI built with Tailwind CSS.

## Technologies

- Front-End: React, Tailwind CSS
- Back-End: Node js, Express, MongoDB

## Usage

- Open your browser and navigate to URL
- Use the "Reset Password" feature to enter your email and receive a password reset link.
- Follow the link in your email to reset your password.

## API Endpoints

Authentication Routes

- `/`
- Description: Sends a password reset link to the provided email address.

- `/reset-password/:token`
- Description: Resets the password using the provided token.

## Explaination And Examples

- To use the URL you need to connect with database from back-end for testing.
- I have tested with my gmail id which was stored in database.
- I have attached the run time example image in the assets folder in src directory `../src/assets`.
- I have stored my gmail in databse before giving reset link `../src/assets/before-password-reset.png`.
- To send reset link for forgot password `../src/assets/reset-password.png`.
- The reset link was given to user by using nodemailer for sending email `../src/assets/reset-link-mail.png`.
- The token was generated and token will expire after 1 hour in database `../src/assets/token-for-reset.png`.
- After that using the link we can route to reset password page `../src/assets/forgot-password.png`.
- After that password was sucessfully reseted and token was cleared password was bcrypt(hashed) and stored in database `../src/assets/after-password-reset.png`.