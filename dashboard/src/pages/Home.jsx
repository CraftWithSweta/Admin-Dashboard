import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import StorefrontIcon from '@mui/icons-material/Storefront';

export default function Home() {
  return (
    
    <div>
      <Navbar/>
      <Box height={30}/>
        <Box sx={{ display: 'flex' }}>
        <Sidebar/>
         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <Grid container spacing={2}>
        <Grid size={8}>
          <Stack spacing={2} direction={"row"}>
          <Card sx={{ maxWidth: 49 + "%", height:140 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Dash
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta optio sapiente veritatis? Laborum aspernatur minima cupiditate quia! Explicabo, rerum voluptate. Delectus atque similique ipsam nobis eos corporis neque voluptate corrupti!
        </Typography>
      </CardContent>
      
    </Card>

     <Card sx={{maxWidth: 49 + "%", height:140 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Dash
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore praesentium pariatur repellendus, cum explicabo vitae tempora corrupti eius officia ipsam alias? Tempora temporibus sit harum animi. Amet, esse molestias? Facere!
        </Typography>
      </CardContent>
      
    </Card>
  </Stack>


        </Grid>
        <Grid size={4}>
          <Stack spacing={2} >
           <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
        <Stack spacing={2} direction='row' >
          <div className='iconstyle'>
        <StorefrontIcon/>
        </div>
        <div className='paddingAll'>
        <span className='pricetitle'>$203K</span>
        <br />
        <span className='pricesubtitle'>Total Income</span>
        </div>
        </Stack>
      </CardContent>
      
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
        
        
      </CardContent>
    
    </Card>
          </Stack>
        </Grid>
        
        
      </Grid>







<Box height={20}/>
       <Grid container spacing={2}>
        <Grid item xs={8}>
          <Card sx={{ height: 60 + "vh" }}>
      
      <CardContent>
      
        
      </CardContent>
      
    </Card>
     <Card sx={{ height: 60 + "vh" }}>
      
      <CardContent>
      
        
      </CardContent>
      
    </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
      
        
      </CardContent>
      
    </Card>
        </Grid>
        
        
      </Grid>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
        </Box>
      </Box>
   </Box>
    </div>
   
  )
}
