import React, { useState, useEffect} from 'react';
import BookDataService from '../services/books';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import "./Book.css";

const Book = ({ user }) => {
    
    let params = useParams();

    const [ book, setBook] = useState({
        id: null,
        title: "",
 
    });

    useEffect(() => {
        const getBook = id => {
            //IMPLEMENT GETMOVIE
            BookDataService.getBook(id)
                .then(response => {
                    setBook(response.data)
                })
                .catch(e => {
                    console.log(e);
                });
        }
        getBook(params.id)
    }, [params.id]);

     const deleteReview = (reviewId, index) => {
        let data = {
            review_id: reviewId,
            user_id: user.googleId
        }
        BookDataService.deleteReview(reviewId, user.googleId)
          .then(response => {
            setBook((prevState) => {
              prevState.reviews.splice(index, 1);
              return ({
                ...prevState
              })
            })
          })
          .catch(e => {
            console.log(e);
          });
    } 

return (
    <div>
        <Container>
            <Row>
                 <Col>
                 <div className="poster">
                    <Image
                    className="bigPicture"
                    src={book.poster+"/100px2500"} 
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src="/images/NoPosterAvailable-crop.jpeg";
                    }}
                    fluid />
                    </div>
                </Col>
                <Col>
                    <Card>
                        <Card.Header as="h5">{book.title}</Card.Header>
                       <Card.Body>
                            <Card.Text>
                                {book.plot}                            
                            </Card.Text>
                                { user &&
                                    <Link to={"/books/" + params.id + "/review"}>
                                    Add Review
                                </Link>}
                        </Card.Body>
                    </Card>
                    <h2>Reviews</h2>
                    <br></br>
                    { book.reviews.map((review, index) => {
                    return (
                        <div  className="d-flex">
                        <div className="flex-shrink-0 reviewsText">
                            <h5>{review.name + " reviewed on "} { moment(review.date).format("Do MMMM YYYY") }</h5>
                            <p className="review">{review.review}</p>

                            { user && user.googleId === review.user_id &&
                            <Row>
                                <Col>
                                <Link to={{
                                    pathname: "/books/"+
                                            params.id+
                                            "/review"
                                }}
                                state = {{
                                    currentReview: review
                                }} >
                                    Edit
                                </Link>
                                </Col>
                                <Col>
                                <Button variant="link" onClick={ () => 
                                {deleteReview(review._id, index) } }>
                                    Delete
                                </Button>
                                </Col>
                            </Row>
                            }
                        </div>
                        </div>
                    )
                    })}
                </Col>
                </Row>
            </Container>
            </div>
        )
}

export default Book;