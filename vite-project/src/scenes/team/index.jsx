import React, { useContext, useState } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid,GridToolbarQuickFilter} from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataTeam } from '../../data/mockData'
import  AdminPanelSettingsOutlinedIcon  from '@mui/icons-material/AdminPanelSettingsOutlined'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { Header } from '../../componets/header'
import { useEffect } from 'react'
import axios from 'axios'
import { BaseUrl } from '../../Url'
import { SectionContext } from '../../Context/Context'



 
 
const Team = () => {
    const {token} = useContext(SectionContext)
    const [data,setData] = useState([])


    useEffect(() => {
        const myFunction = async () => {
            const response = await axios.get(`${BaseUrl}/admin`,{
                headers: {
                    Authorization: `${token}`
                }
            }).then(res => {
          for (let i = 0; i < res.data.data.length; i++) {
             res.data.data[i].id=i   
            }
            setData(res.data.data);
            })
        }
        myFunction()
    },[])
    console.log(data);


   

    const handleDelete = (id) => {
        // console.log(id);
        // axios.delete(`${BaseUrl}/admin/${id}`,{
        //     headers:{
        //         Authorization:`${token}`
        //     }
        // }).then(res => {
        //     // console.log(res);
        // })
    }

  







    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const columns = [
    {field : "id", headerName : 'ID',}, 

    {
    field : 'first_name',
    headerName : 'First Name', 
    flex: 1,
    cellClassName : 'name-column--cell' 
    },
    {
        field : 'last_name',
        headerName : 'Last Name', 
        flex: 1,
    },
    {
        field : '_id',
        headerName : 'Delete', 
        flex: 1,
        renderCell : ({ row : { access }}) => {
            return (
            <button
            // onClick={() => data.map(info => {
            //    console.log(info.id);
            // })}
            cursor='pointer'
            width='20%'
            p='5px'
            display='flex'
            justifyContent='center'
            textAlign='center'
            alignItems='center'
            backgroundColor={
                 colors.redAccent[500]
            }
            borderRadius='4px'
            >   
                { <DeleteIcon style={{cursor:'pointer'}}/>}
            </button>
            )

        }
    },
    {
        field : 'edit',
        headerName : 'Edit', 
        flex: 1,
        renderCell : ({ row : { access }}) => {
            return (
            <Box
            cursor='pointer'
            width='20%'
            p='5px'
            display='flex'
            justifyContent='center'
            textAlign='center'
            alignItems='center'
            backgroundColor={
                 colors.greenAccent[500]
            }
            borderRadius='4px'
            >   
                { <ModeEditOutlineIcon style={{cursor:'pointer'}}/>}            
            </Box>
            )

        }
    },
    {
        field : 'admin',
        headerName : 'access Level', 
        flex: 1,
        renderCell : ({ row : { access }}) => {
            return (
            <Box
            cursor='pointer'
            width='50%'
            p='5px'
            display='flex'
            justifyContent='center'
            textAlign='center'
            alignItems='center'
            backgroundColor={
                 colors.greenAccent[500]
            }
            borderRadius='4px'
            >   
                { <AdminPanelSettingsOutlinedIcon style={{cursor:'pointer'}}/>}
                <Typography color={colors.grey[100]} sx={{ ml:'5px' }} style={{cursor:'pointer',textAlign:'center'}}>
                    Admin
                </Typography>
                
            </Box>
            )

        }
    },

]

  return (
    <Box m='20px'>
        <Header title='TEAM' subtitle='Managing the Team Members'/>
        <Box
        m='40px 0 0 0'
        height='75vh'
        >
            <DataGrid
            rows={data}
            columns={columns}
            components={{Toolbar: GridToolbarQuickFilter}}
            />
        </Box>
      
    </Box>
  )
}

export default Team
