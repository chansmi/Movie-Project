import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import ImageDataService from  '../../services/image';
import { useState, useEffect } from 'react';



function BookCard(props) {
    //const data = [{id: "123", title: "Book1 is the best"},{id: "124", title: "Book2 is good too"}]
    const data = props.data
    //console.log(data)
    //const id = props.data.id
    //console.log(props.data)
    
    // add a use effect to gather data
    const [image, setimage] = useState("/images/NoPosterAvailable-crop.jpeg");

    useEffect(() => {
        //ImageDataService.getImage(data.id).then((res) => {
         //   console.log(res)
        //})
        // Google API 
        if(data.id){
            ImageDataService.getImage(data.id).then((res) => {
             if(res.data.items && res.data.items.length > 0 && res.data.items[0].volumeInfo && res.data.items[0].volumeInfo.imageLinks && res.data.items[0].volumeInfo.imageLinks.thumbnail ){
                setimage(res.data.items[0].volumeInfo.imageLinks.thumbnail);
                //console.log(res.data.items[0].volumeInfo.imageLinks.thumbnail);
             }
            })
        } 
    }, [data.id]);

    // working solution with double data in view.
    return (
      //  <>{data.map(item => {return <div>{item.id}</div>})}</>
    <Card sx={{ maxWidth: "auto" }}>
                    {  
                    <CardMedia
                    component="img"
                    //height="400"
                    //style="width: 100%"
                    flex="1"
                    width="null"
                    height="null"
                    resizeMode="contain"
                    image={image}
                    alt="green iguana" 
                       /> }  
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                     <span key={data.id}> {data.title}</span>
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                    <span key={data.rating}> {"Average Rating: " + data.rating}</span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    <span key={data.id}> {"ISBN: " +data.id}</span>
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" onClick={props.function}>Share</Button>
                    <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
    )
    
    //   link to solve problem: https://stackoverflow.com/questions/68706635/reactjs-loop-with-map-function-not-rendering-view
    // link to solve a different problem https://stackoverflow.com/questions/41928567/div-cannot-appear-as-a-descendant-of-p

}
export default BookCard