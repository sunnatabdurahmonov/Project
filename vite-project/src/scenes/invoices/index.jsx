
import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataInvoices } from '../../data/mockData'
import { Header } from '../../componets/header'
 
 
const Invoices = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const columns = [
    {field : 'id', headerName : 'ID' },
    {
    field : 'name',
    headerName : 'Name', 
    flex: 1,
    cellClassName : 'name-column--cell' 
    },
    {
        field : 'phone',
        headerName : 'Phone Number', 
        flex: 1,
    },
    {
        field : 'email',
        headerName : 'Email', 
       flex: 1,
    },
    {
        field : 'cost',
        headerName : 'Cost', 
        flex: 1,
        renderCell: (params) => (
            <Typography color={colors.greenAccent[500]}>
               ${params.row.cost}
            </Typography>
        )

    },
    {
        field : 'date',
        headerName : 'Date', 
        flex: 1,
    },
]

  return (
    <Box m='20px'>
        <Header title='INVOICES' subtitle='List of Invoices balances'/>
        <Box
        m='40px 0 0 0'
        height='75vh'
        sx={{
            "& .MuiButtonBase-root" : {
                color:`${colors.grey[100]} !important`
            }
        }}
        >
            <DataGrid
            checkboxSelection rows ={mockDataInvoices}
            columns={columns}
            />
        </Box>
    </Box>
  )
}

export default Invoices