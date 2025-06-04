import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


export default function Home() {
  return (
    
    <div>
      <Navbar/>
      <Box height={30}/>
        <Box sx={{ display: 'flex' }}>
        <Sidebar/>
    <h1>Home</h1>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
        </Box>
      </Box>
   
    </div>
   
  )
}
