
import { useState, useEffect, useCallback } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



import Login from './components/Login.js';
import Logout from './components/Logout.js';


// Images
// import BookImage from "./images/book.jpeg"

// Styles
import "./App.css";
// Test Branch
// Pages
import MainPage from './pages/mainPage';
import Groups from './pages/groups';
import TopBooks from './pages/topBooks';

// Book file that calls services
// import Book from './components/Book';
import BookDataService from './services/books';
// import { responsiveFontSizes } from "@mui/material"; 

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function App() {

  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTitle, setSearchTitle] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(0);
  const [currentSearchMode, setCurrentSearchMode] = useState("");

  // Map the get book data into Book Data similar to the movies

  // Setting the book data hard code. THIS WILL BE UPDATED WITH AN API
  // This information ends up in the bookCard.js file.
  // const BData = {
  //   title : "Test Title",
  //   description : "This is the book description and is very exciting. I cant wait to see what is in it",
  //   cover: BookImage
  // }

  useEffect(() => {
    let loginData = JSON.parse(localStorage.getItem("login"));
    if (loginData) {
      let loginExp = loginData.exp;
      let now = Date.now()/1000;
      if (now < loginExp) {
        // Not expired
        setUser(loginData);
      } else {
        // Expired
        localStorage.setItem("login", null);
      }
    }
  }, []);

  const BookData = useCallback(()=> {
      //console.log("debugging Book Data")
      BookDataService.getAll(currentPage)
    .then(response=>{
      let stored = response.data.books
      setBooks(
        stored.map((element) => {
          return ({
            id: element.isbn13,
            title: element.title,
            rating: element.average_rating
          })
        }));
        //setCurrentPage(response.data.page);
        //setEntriesPerPage(response.data.entries_per_page);
    })
    .catch(e=>{
        console.log(e);
    });
  },[currentPage]);

  useEffect(() => {
      BookData();
      //console.log("use effect book card")
    },[BookData]);

    const find = useCallback((query, by) => {
      BookDataService.find(query, by, currentPage)
          .then(response => {
           setBooks(response.data.books);
      })
      .catch(e=> {
          console.log(e);
      });
  }, [currentPage]);

  const findByTitle = useCallback(() => {
    setCurrentSearchMode("findByTitle");
    find(searchTitle, "title");
}, [find, searchTitle]);

const retrieveNextPage = useCallback(() => {
  if (currentSearchMode === "findByTitle") {
      findByTitle();
  } else {
      BookData();
  }
}, [currentSearchMode, findByTitle, BookData]);


useEffect(() => {
  setCurrentPage(0);
}, [currentSearchMode]);

//retrieve the next pageif currentPage value Changes
useEffect(() => {
  retrieveNextPage();
}, [currentPage, retrieveNextPage]);

// Other functions that are not depeneded on by useEffect
const onChangeSearchTitle = e => {
  const searchTitle = e.target.value;
  setSearchTitle(searchTitle);
}

    /*BookDataService.getAll(0).then(response=>{
      let setBooks = response.data.books;
      console.log(setBooks)
      /*books.map((setBooks) => {
        return ({
          id: setBooks.id,
          title: setBooks.title,
        })
      }) */
    //})

   const test = () => {
    console.log("test for function")
    return "string or whatever"
   }


   return (
    <GoogleOAuthProvider clientId={clientId}>
    <div className="App">

    <Navbar expand="xxl" sticky="top" variant="light" style={{backgroundColor: "#dff9fb"}}>
        <Container className="container-fluid">
        <Navbar.Brand className="brand" href="/" style={{color: "black"}}>
          {/* <img src="/images/movies-logo.png" alt="movies logo" className="moviesLogo"/> */}
          Tour De React: A Book Review Website |
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="ml-auto">
            <Nav.Link as={Link}  to={"/"}>
              Home
            </Nav.Link>
            {
              user &&
              <Nav.Link as={Link}  to={"/groups"}>
                Groups
              </Nav.Link>
            }
              <Nav.Link as={Link}  to={"/topBooks"}>
                Top Books
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        { user ? (
                <Logout setUser={setUser} />
              ) : (
                <Login setUser={setUser} />
              )}
        </Container>
      </Navbar>

      <Routes>
        <Route exact path={"/"} element={
            <MainPage data = {books} function = {test}/>
          }
        />
        <Route exact path={"/groups"} element={
          <Groups user={user}/>  
          }
        />
        <Route exact path={"/topBooks"} element={
          <TopBooks user={user}/>  
          }
        />
      </Routes>
      </div>
      </GoogleOAuthProvider>
  );
}
export default App;