Currency Converter in React.js

Project Overview:

The Currency Converter is a web application built with React.jsthat allows users to convert amounts between different currencies using the latest exchange rates. This project leverages a third-party exchange rate API to fetch up-to-date conversion rates and perform real-time currency conversions.

Key Features:

User-Friendly Interface: The app provides a clean and intuitive interface where users can easily input the amount they wish to convert, select the source and target currencies, and view the converted amount instantly.

Real-Time Exchange Rates: By integrating with a reliable exchange rate API, the app ensures that users get accurate and real-time conversion rates.

Responsive Design: The application is designed to be responsive, making it accessible on various devices, including desktops, tablets, and smartphones.

Error Handling: The app includes robust error handling to manage network issues and API errors gracefully, ensuring a smooth user experience.

Technical Details:

React Hooks: Utilizes React hooks like useState and useEffect to manage state and side effects.

Axios: Employs Axios for making HTTP requests to the exchange rate API.

CSS Modules: Uses CSS Modules for styling components, ensuring a modular and maintainable CSS structure.

Input Validation: Implements input validation to ensure that users provide valid amounts for conversion.

How It Works:
User Input: Users enter the amount they wish to convert.

Currency Selection: Users select the source and target currencies from dropdown menus.

API Request: Upon selection, the app sends a request to the exchange rate API to fetch the latest conversion rate.

Display Result: The app calculates the converted amount and displays it to the user in real-time.

API => let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
