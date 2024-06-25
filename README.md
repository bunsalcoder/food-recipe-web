# Food Recipe Web Application

Welcome to the Food Recipe Web Application! This project is built using React.js, Tailwind CSS, DaisyUI, and Redux. It aims to provide users with a seamless experience in browsing, searching, and saving their favorite recipes.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Browse Recipes**: Users can browse through a wide variety of recipes.
- **Search Recipes**: Users can search for recipes by keywords.
- **Recipe Details**: View detailed information about each recipe, including ingredients and instructions.
- **Save Favorite Recipes**: Users can save their favorite recipes for easy access later.
- **Responsive Design**: The application is fully responsive and works on all devices.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **DaisyUI**: A component library for Tailwind CSS.
- **Redux**: A state management library for JavaScript apps.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/bunsalcoder/food-recipe-web
    ```

2. **Navigate to the project directory**:
    ```sh
    cd food-recipe-web
    ```

3. **Install dependencies**:
    ```sh
    npm install
    # or
    yarn install
    ```

### Usage

1. **Start the development server**:
    ```sh
    npm run start:dev
    # or
    yarn start:dev
    ```

2. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```bash
food-recipe-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── RecipeCard.jsx
│   │   ├── RecipeDetail.jsx
│   │   └── ...
│   ├── features/
│   │   ├── recipes/
│   │   │   ├── recipesSlice.js
│   │   │   └── ...
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Favorites.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── index.js
│   └── ...
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
