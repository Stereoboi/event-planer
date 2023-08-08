# Event Planner - Next.js Application

Welcome to the Event Planner application's README! Here you'll find details about the functionality and features of the app, along with technical insights into its implementation.

## Features:

Event Listing: The main page displays a list of upcoming events. All events are stored in a MongoDB database on the backend.

Category Sorting: Users can sort events by categories, enhancing their ability to find specific types of events.

Keyword Search: Utilizing the search bar in the navbar, users can quickly find events by entering keywords, which accelerates the process of finding desired events.

Event Creation: The app includes a dedicated page for creating events. Users can add event details, including photos. If no photo is provided, a default image is used.

Form Validation: Event creation forms are powered by Formik, ensuring that all fields are properly validated to ensure correct form completion.

Event Preview: When users click on an event, a modal window opens to display event details. Thanks to the "Intercepting routes" concept in Next.js, the modal window has its own URL. This feature allows users to easily share event links with friends, providing an improved user experience.

Editing and Deletion: Users have the ability to edit and delete their created events, giving them control over the content they've added.

Responsive Design: The application's layout is responsive, with breakpoints for mobile (320px), tablet (768px), and desktop (1024px) screens.

Styling: Tailwind CSS has been used for styling, ensuring a clean and modern visual appearance.

## Technical Insights:

The Event Planner application is built using Next.js, a powerful React framework. The app utilizes a MongoDB database for storing event information. Formik is employed for form handling and validation, streamlining the process of creating events. The "Intercepting routes" technique in Next.js is utilized to create a seamless modal experience with shareable URLs for events.

## Installation:

To run the application locally, follow these steps:

- Clone the repository: git clone
- Navigate to the project directory:
- Install dependencies: npm install
- Run the development server: npm run dev

## Contributions:

Contributions are welcome! If you find issues or have suggestions for improvements, feel free to submit a pull request.

Thank you for considering the Event Planner application. We hope you enjoy planning and discovering events like never before!
