import React from 'react'
import { Box, useTheme, Typography } from '@mui/material'
import { Header } from '../../componets/header'
import  Accordion  from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme'
import Sidebar2 from '../global/Sidebar'
import Topbar from '../global/Topbar'

const FAQ = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  return (
    <Box className="layout">
        <Sidebar2/>
        <Box className="content">
            <Topbar/>
        <Box m='20px' overflow='scroll'>
        <Header title='FAQ' subtitle='Frequently Asked Question Page'/>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste, consequatur. Odio ipsa consequatur possimus, explicabo officia magnam rerum!
                   
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion  defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    Another Importan Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste, consequatur. Odio ipsa consequatur possimus, explicabo officia magnam rerum!
              
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion  defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    Your Favorite Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste, consequatur. Odio ipsa consequatur possimus, explicabo officia magnam rerum!
                  
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion  defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                Some Random Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste, consequatur. Odio ipsa consequatur possimus, explicabo officia magnam rerum!
         
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion  defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    The Final Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste, consequatur. Odio ipsa consequatur possimus, explicabo officia magnam rerum!
                
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
        </Box>
    </Box>
  )
}

export default FAQ
