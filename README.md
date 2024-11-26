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

## Example

- I have attached the run time example image in the assets directory