# Service App

## Overview

The **Service App** is a simple modern React web application designed for managing and displaying healthcare services. It allows users, particularly admins, to add, edit, and delete services effortlessly. The app employs a clean, responsive design utilizing **Tailwind CSS** for styling, offering a personalized theme for logged-in admins.

## Features

- **Admin Login**: login functionality for administrators using the credentials:
  - **Username**: `admin`
  - **Password**: `password123`
- **Service Management**: Add, edit, and delete healthcare services with ease.
- **Global State Management**: Utilizes React Context to manage the global state across the app.
- **Local State Management**: Employs `useState` for managing local component states.
- **Responsive Design**: The app adapts well to different screen sizes for accessibility.
- **Personalized Theme**: Admins who are logged in experience a customized theme.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for modern styling.
- **React Context API**: For global state management.
- **React Hooks**: Including `useState` for handling local state.

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1. Clone the repository:
   git clone https://github.com/treezycoder/service-app.git

2. Navigate to the project directory:
   cd services-app
3. Install the dependencies:
   npm install
4. Running the App
   npm start

## Usage

Usage
Once the app is running, you can:

1. Sign in with the provide username and password
2. Add a New Service: Fill out the form and click the "Add Service" button.
3. Edit a Service: Click on the edit icon to edit its details, then save the changes.
4. Delete a Service: Click the "Delete" button next to the service you want to remove.
