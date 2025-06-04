import React from 'react'
import Sidebar from '../components/Sidebar'
import Box from '@mui/material/Box'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    
    <div>
      <Navbar/>
      <Box height={30}/>
        <Box sx={{ display: 'flex' }}>
        <Sidebar/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <h1>About</h1>
    
       
      </Box>
    </Box>
    </div>
   
  )
}
