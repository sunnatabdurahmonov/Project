import React from 'react'
import { Header } from '../../componets/header'
import { Box } from '@mui/material'

const Dashboard = () => {
  return (
    <Box m='20px'>
      <Box
      // display='flex' 
      // justifyContent='space-between' 
      // alignItems='center'
      >
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard"/>
      </Box>
    </Box>
  )
}

export default Dashboard
