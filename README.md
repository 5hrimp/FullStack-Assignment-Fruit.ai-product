# FullStack-Assignment-Fruit.ai-product

Overview
This project is a React-based dashboard application that offers services like chatbot interactions and language translation. It includes user authentication (Login and Signup), navigation, and functionality for language translation.

Features
- Dashboard: Provides access to different services (ChatBot, Translator).
- Login/Signup: Handles user authentication.
- Translation: Translates text between different languages using an external API.
- Language Services: Users can interact with services like ChatBot or Translator.

Project Structure

```
├── public
│   ├── index.html
│   └── assets
│       ├── chatbot.jpeg
│       ├── translator.jpg
├── src
│   ├── components
│   │   ├── Dashboard.jsx
│   │   ├── LoginCard.jsx
│   │   ├── SignupCard.jsx
│   │   ├── ServicesCard.jsx
│   │   ├── Translator.jsx
│   ├── styles
│   │   ├── dashboard.css
│   │   ├── login.css
│   │   ├── servicescard.css
│   │   ├── translator.css
│   ├── App.js
│   ├── index.js
│   └── data.js
```


Steps to Run

1. Clone the Repository:
   git clone <repository-url>

2. Install Dependencies:
   Navigate to the project directory and install necessary packages:
   npm install

3. Run the Application:
   Start the React development server:
   npm run dev


Project Components

1. Dashboard.jsx: Displays a simple dashboard with links to services like ChatBot and Translator.

2. ServicesCard.jsx: Reusable component that holds service cards. Users can click to navigate to specific services.

3. LoginCard.jsx: User login functionality, uses basic local authentication.

4. SignupCard.jsx: User signup form to collect new user data.

5. Translator.jsx: Translates text between selected languages using an external translation API.

6. ChatBot.jsx: (Not yet Implemented)

Design Decisions

- React Router is used for navigation between different routes such as Login, Signup, and Dashboard.
- LocalStorage is used to manage the login state.
- Translation API: Used the Microsoft translator text API to translate text between languages.
- ServicesCard Component: Implemented to ensure reusable and dynamic cards across the dashboard. 

API Integration

Translation API: 
- Utilizes Microsofts's translation API to translate between languages.
