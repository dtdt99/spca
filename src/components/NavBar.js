import {Box,Typography,AppBar,Toolbar,Container,Grid, Button} from '@mui/material';
import {Link} from 'react-router-dom';
import React from 'react'



const NavBar = () => {
  return (


    <div>
    <AppBar position='relative'>
    <Toolbar className = 'navBar'>
      <Typography variant ='h4' ><Link to='/' className='title'>PetStop</Link></Typography>
      <Button variant="contained" className="btn"
      sx = {{
        backgroundColor:'#47bfaf',
        fontFamily:'gotham'
      }}>
            Consult Vet
          </Button>
      <img src={"../images/navbarImg.jpeg"} alt="rabbit" className="titleImg"></img>
      <ul className = 'links'>
        {/* <li><Link to='/services'>Link1</Link></li>
        <li>link2</li>
        <li>link3</li> */}
      </ul>
    </Toolbar>
  </AppBar>
  </div>
  )
}

export default NavBar