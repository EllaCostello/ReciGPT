# ReciGPT

ReciGPT is a full-stack web application where users can enter ingredients they have at home and receive recipe suggestions.

The application uses the Spoonacular API to fetch recipes based on user input.

---

## Features

- User registration and login (Spring Security)
- Secure authentication with database-backed users
- Search for recipes based on ingredients
- Displays 3 recipe suggestions with images
- Direct links to full recipes

---

## Tech Stack

- Backend: Spring Boot (Java)
- Frontend: HTML, CSS, JavaScript
- Database: H2 (in-memory)
- API: Spoonacular

---

## Setup

1. Clone the repository

2. Add your Spoonacular API key as an environment variable:


SPOONACULAR_API_KEY=your_api_key_here


3. Run the Spring Boot application

4. Open the app in your browser:


http://localhost:8080/auth.html


---

## Usage

1. Create an account
2. Log in
3. Enter ingredients (e.g. "chicken, rice, tomato")
4. View recipe suggestions and open full recipes

---

## Notes

- The application returns 3 recipes per search
- Data is fetched from the Spoonacular API
- The database is in-memory and resets on restart

---

## Future Improvements

- Save favorite recipes
- Display full cooking instructions inside the app
- Add dietary filters (e.g. vegetarian, vegan)

---

## NOTICE
The app was meant to have AI integration but due to monetary neccesity it has not been implemented
