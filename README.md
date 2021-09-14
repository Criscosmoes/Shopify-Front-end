# Shopify Frontend Internship Challenge 2021

- [**Challenge App**](https://shopify-front-end.vercel.app/)
- [**Challenge Requirements**](https://shopify-front-end.vercel.app/)

## Features

The user can:

- See the last 7 days of NASA's Astronomy Picture of The Day
- Save likes if the user leaves or reloads the page
- See description, date, and other data about each image
- See a loading state while waiting for NASA's API to return data
- Save image link on click to share to others
- Search a picture of the day by a specific date (from 2000 - 2021)

## Other features used

- Used local storage to save state of images, so that when a user likes and leaves a page, it persists
- Used local storage as a small caching system. Since we only need to make 1 call a day, we can cache the result for faster load times
- Used Material UI for well-tested/accessible/reliable components
- Used React.js for it's simplicity, lightweightness, and versatility
- Used Semantic HTML tags for improved accessability, making our app accessible to everyone
- Used media queries to ensure my site look awesome/accessible on EVERY screen size
- Score for Lighthouse on Chrome console: 99 Performance, 100 Accessibility, 100 Best Practices, 100 SEO

## Tech used

- HTML, SCSS, React, Redux, Material UI

## Design

- Used instagram-like design since this is named "Spacestagram"
