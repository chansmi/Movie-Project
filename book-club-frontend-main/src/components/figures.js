import Figure from 'react-bootstrap/Figure';
import { Button} from '@mui/material';
import * as React from 'react';

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function Figures(props) {
  const [open, setOpen] = React.useState(false);
  const [msg, setMSG] = React.useState("")

  const handleClick = (id) => {
    console.log(`click is made on button ${id}`)
    setMSG(`click is made on button ${id}`)
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        {/* UNDO */}
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const images = () => {
    if (props.image !== "none") {
      return (
        <Figure.Image
        width={250}
        height={400}
        alt="171x180"
        src={props.image}
      />
      )
    } 
  }

  const button = () => {
    if (props.button === "true") {
      return (
        <div>
          <Button variant='danger' style={{ color : "Black", backgroundColor: "White"}} onClick={() => handleClick(props.id)}>Click to join</Button>
          <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message={msg}
          action={action}/>
          
        </div>
        
      )
    }    
  }
    
  return (
    <Figure style={{paddingTop: "100px", paddingRight:"30px"}}>
      <Figure.Caption>
        <h2 style={{color: "white"}}>{props.title}</h2>
      </Figure.Caption>
      
      {images()}
      {button()}
      
      <Figure.Caption >
        <h3 style={{color: "white"}}> {props.text} </h3>
      </Figure.Caption>
    </Figure>
  );
}

export default Figures;