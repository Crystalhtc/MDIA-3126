# MDIA-3126

## 3 things I want to try during this course
- Image recognition AI 
- CSS animation
- Passing users' input from frontend to backend

## 2 things I learned today
- Tabs
- Useful shortcuts for coding

## How I'm feeling today
- Tired

npx create-next-app@latest

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {...}

1. Atoms
- Button: The "Fetch 📸" button can be an atom because it is a simple component that could be reused.
- Text: Basic text elements (e.g., titles, descriptions) could be individual atoms if you anticipate reusing them elsewhere in the app.

1. Molecules
- Header: A molecule that consists of a title and a button. This component allows you to fetch images.
- ImageCard: A molecule that displays an individual anime image, title, duration, and synopsis. This combines image and text atoms.
1. Organisms
- ImageListContainer: This component contains multiple ImageCard molecules and manages the display logic based on loading, error, and imageData states. It also displays loading and error messages.
1. Templates
- Home Template: A template that organizes the Header and ImageListContainer organisms. This will be used in the main Home page.


sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px	@media (min-width: 1536px) { ... }