# Frontend React Take-Home Project

This is a simple frontend application built utilizing **React  Zustand PrimeReact Tailwind Axios** and **Google-React-Maps-Api**. The UI matches the figma designs given for the project with a few minor additions. The frontend displays a list of markers retrieved from the backend API provided for the project, and displays a map from **Google-React-Maps**. 

## Purpose
To be used as a companion with the backend API provided to showcase React and frontend knowledge by illustrating the complettion of the assigned tasks. 

## Features
- **NestJs Backend Integration & Data Fetching:** Frontend is integrated with the provided nestjs backend and fetches data.

- **Google Maps Integration:** Frontend is integrated with Google Maps displaying markers that are fetched from the backend at their respective coordinates.
- **Marker List View:** Markers are rendered according to figma design, and when selected will navigate on the map to the location of the marker centering the screen on the marker selected. The marker list will then highlight which marker is currently selected.

- **Marker Details:** When a marker pin on the map is selected by a user it creates a popup to display the marker details.

- **Responsive Design:** The application is responsive for desktop and mobile displays.

## Prerequisites
- **Node.js** (version 14.x or higher)

## Getting Started

### 1. Clone Project 
From ```https://github.com/jmorales89/IntrepidNetworks.git```

### 2. Install Dependencies
```npm install```

### 3. Update MARKER-TAKE-HOME-API to enable cors
Navigate to ```src\main.ts``` and add the following line to ```async function bootstrap``` **app.enableCors();**

### 4. Start the React Application
```npm run start```

### 5. Open in Browser Window
Navigate to http://localhost:3000

### 6. Enjoy!!


