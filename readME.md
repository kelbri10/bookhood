# Bookhood 
Book tracking should be easy to use and easy to understand. Bookhood invites users to create their own little neighborhood of personalized book lists.

## Languages, Framework, Software used 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

## Inspiration 
This past year I've been rekindling my love for books. I have increased the number of books I'm reading and I follow content creators who vlog and stream their own reading journeys. After researching present competitors such as Bookshelf, Basmo, and Italic Type, I wanted to present my own version of a book tracking app that creates a cozy atmosphere.

## Design 
Before I started programming, I first designed a hi-res wireframe to layout the design and the look I wanted to go for.
![Wireframe of Bookhood home page, dropdown menu, and account creation pages](image.png)

Using color contrast testers, I intentionally chose a natural color palette. Natural colors such as brown and green are soothing to look at. I felt they would enhance the overall feel and aesthetic of the application.

![Color Palette featuring dark green, dark brown, tan, medium brown, and medium green, Also shows font conversions for mobile and desktop layouts from px to rem](image-1.png)

I chose to pair a serif font, Libre Bakersville, with a sans-serif font, Source Sans Pro. I felt the font pairing added simplicity and a level of intelligence to the design. The contrast was very interesting to look at.

Below features an alternative look I pictured for iOs and Android applications if I extended to mobile development in React Native at a later time.
![](image-2.png)

## Features 
- Authentication: Users can choose to create an account or they can login into a pre-existing account. The books they add are saved under their user id.

- Private pages: If a user is not logged in, they are unable to access the library page to view book lists.

- Authenticated users can add books to their list. Lists are saved in the Firestore database, logging the book, author, and rating given by the logged in user.

- Responsive Web Design 

## Visuals
Homepage on the desktop version, small screen: 

![Top of the screen with hamburger menu and bookhood logo displayed, image text says "Bookhood, A cozy book app to curl up with", there is an icon that displays an illustrated girl showcasing an open book](image-3.png) 

How It works section with a prototype mobile only design displaying future mobile design: 

![Displays "How it Works" section with a prototype mobile only design](image-4.png)

Current view of the work in progress page that allows user to add book to the page and to their list: 

![Work in Progress User Page that allows user to add book](image-6.png)

## To-Do List 
-[ ] Add profile customization page to allow user to customize preferences 

-[ ] Integrate 3rd-party API that will allow user's to receive personalized recommendations and to add books via API with book cover

-[ ] Allow users to add an image to their saved book

-[ ] User comment/note section to state thoughts

-[ ] Tags to track "in progress", "not started", and "completed"

-[ ] Loading icon to provide user feedback

## Installation 
To install the project on your local environment, first make sure you have an account on Google's Firebase platform. 

Reference this [documentation](https://firebase.google.com/docs/web/setup) for step by step guide on setting up your project.

Next, open up the terminal and type ```npm install``` in the client directory to install the project dependencies. 

Once the project is set up, create a .env file in the root folder and save the keys with the VITE prefix. Ex. ```VITE_PUBLIC_KEY``` 

With vite, you can expose .env variables using ```import.meta.env.VITE_KEY_NAME_HERE```.

Read more about on Vite's [website](https://vitejs.dev/guide/env-and-mode.html).

Type ```npm run dev``` in the terminal to start the vite server. Live updates will appear as you make changes to the files.

