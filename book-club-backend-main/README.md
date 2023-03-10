
# CS 5610 Final Project

For our group project, we have decided to create a web application designed to facilitate online book clubs. The goal of this application is to enable users to:
- Get book recommendations
- Discuss the content with others
- Manage and maintain private book club groups using various permission levels
- Write and read book ratings

As a stretch goal, we may add the functionality for users to meet and/or exchange books offline. We can also add custom recommendations based on previous read history. One of the biggest challenges we anticipate facing is having different forums for different groups who read the same book.


Pages:
- Homepage for all bookclubs
- Search and recommendation page
- Forum page for each group
- Individual book page
- User management page

## Group Project Iteration 1
**Chance:**

Chance's contributions included hosting the front end on Heroku, working on
the web applications UI and constrution, and assiting with finding book data for
the database. 

**Chandler:**

Chandler's contributions included building out the web applications's backend and APIs the group may need when constructing the front end. Chandler also hosted the backed on Heroku and worked on getting data loaded into the database.

**Luocheng:**

Luocheng worked on uploading data to the database.

## Group Project Iteration 2
**Chance:**

Chance added a grid pattern in landing page.

**Chandler:**

Chandler got books populated on local database and linked to backend.

**Luocheng:**

Luocheng added and tested review function.



## Group Project Iteration 3
Main landing page
![Screen Shot 2022-08-17 at 11 09 28 PM](https://media.github.ccs.neu.edu/user/8362/files/b89fa3fe-fca7-40c7-9a05-ef8540340aee)

Groups page
![Screen Shot 2022-08-17 at 11 07 50 PM](https://media.github.ccs.neu.edu/user/8362/files/216b9573-45ea-4fe1-943a-31a9ef19e9ab)

Top Books page 1
![tb1](https://media.github.ccs.neu.edu/user/8362/files/899443ec-0a52-4f81-bc19-7aa1525ddf76)

Top Books page 2 - next photo in carousel
![tb2](https://media.github.ccs.neu.edu/user/8362/files/38a871eb-279b-4a37-837c-d07d5fe0ab58)

**Chance:** 

Chance found two 3rd party react library's: `Material UI` and `Inspirational-quotes`. He collaborated with Chandler on `bookTable.js`, `bookCard.js`, `topBooks.js`, `topBooks.css` and UI and general css styling. 
He also worked with Luocheng on `Login/logout`. Another page that he touched was `groups.js`. Lastly Chance implemented the carousel on the top books page. 

**Chandler:** 

Chandler built the home page, piped in move information from local db, piped image information from google api. Chandler also collaborated 
with Chance on the `bookTable.js`, `bookCard.js`, `topBooks.js`, `topBooks.css` and UI and general css styling.. Chandler worked on styling for topBook. Added image.js services and mapped out search and
pagination in `app.js`.  


**Luocheng:** 

Luocheng worked on `login/logout` function, added `groups.controller.js`, `groupsDAO.js` in backend, updated groups route, added `GroupDataService` and `group.css` styling in frontend, and helped with page routing.
Luocheng also designed a prototype database for groups that will be implemented in future iterations of the project. 


### How we the Requirements
- At least 2 CRUD operations with the ability to read and update from both a local db and a googleAPI which connects to an online db.
- 3 UI route: Main Page, Top Books, and Groups
- Bootstrap components used include: [carousel](https://react-bootstrap.github.io/components/carousel/) and [figures](https://react-bootstrap.github.io/components/figures/)
- Layout is completely different from demo application, specifically when viewing the top books and groups pages which utilize a new suite of bootstrap and css styling. Even the cards on the home page are completely custom using the Material UI components.
- We did not use GraphQL or Redux in our app. We did two 3rd party libraries for React. The libraries include [inspiration-quotes](https://vinitshahdeo.github.io/inspirational-quotes/), and [Material UI](https://mui.com/material-ui/getting-started/overview/).

## Links
**Github Repos**\
[Frontend Repo](https://github.ccs.neu.edu/NEU-CS5610-SU22/book-club-frontend)\
[backend Repo](https://github.ccs.neu.edu/NEU-CS5610-SU22/book-club-backend)

**Website**\
[Home page](https://cs5610-webdev-final.herokuapp.com)\
[Backend](https://book-club-backend-tour.herokuapp.com/)


## Authors
Chance Lamberth\
Chandler Smith\
Luocheng Zhu


## Notes
[How merge main changed into git branch](https://stackoverflow.com/questions/20101994/how-to-git-pull-from-master-into-the-development-branch)
[How to do git tag](https://stackoverflow.com/questions/37594459/fatal-failed-to-resolve-head-as-a-valid-ref#comment99121098_37850950)
