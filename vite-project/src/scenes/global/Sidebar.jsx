import { useState } from 'react';
import {  Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import  HomeOutlinedIcon  from '@mui/icons-material/HomeOutlined'
import  PeopleOutlinedIcon  from '@mui/icons-material/PeopleOutlined'
import  ContactsOutlinedIcon  from '@mui/icons-material/ContactsOutlined'
import  ReceiptOutlinedIcon  from '@mui/icons-material/ReceiptOutlined'
import  PersonOutlinedIcon  from '@mui/icons-material/PersonOutlined'
import  CalendarTodayOutlinedIcon  from '@mui/icons-material/CalendarTodayOutlined'
import  HelpOutlinedIcon  from '@mui/icons-material/HelpOutlined'
import  BarchartOutlinedIcon  from '@mui/icons-material/BarChartOutlined'
import  PieChartOutlineOutlinedIcon  from '@mui/icons-material/PieChartOutlineOutlined'
import  TimeLineOutlinedIcon  from '@mui/icons-material/TimeLineOutlined'
import  MenuOutlinedIcon  from '@mui/icons-material/MenuOutlined'
import  MapOutlinedIcon  from '@mui/icons-material/MapOutlined'
import sunnat from '../../assets/sunnat.jpg'


const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme()
    const colors  = tokens(theme.palette.mode)
    return (
     <Link to={to} 
     style={{textDecoration:'none'}}
     >
      <MenuItem
        active={ selected === title }
        style={{ color : colors.grey[100]}} 
        onClick={() => setSelected(title)} 
        icon={icon}>
        <Typography>{title}</Typography>
        </MenuItem>
     </Link>
    )

}

const Sidebar2 = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [iscollapsed, setCollapsed] = useState(false)
    const [selected, setSelected] = useState('Dashboard')

  return (
    <Box
    sx={{
        "& .ps-sidebar-container" : {
            background: `${colors.primary[400]} !important`,
            height:'100vh'
        },
        "& .ps-menuitem-root:hover" : {
            color:'#868dfb !important'
        },
        "& .MuiTypography-root:hover" : {
            color:'#868dfb !important'
        },
        " & .ps-menu-button:hover" : {
            background: `${colors.primary[400]} !important`,
        }
    }}
    >


        <Sidebar collapsed={iscollapsed} >
            <Menu iconShape="square">
                <MenuItem 
                onClick={() => setCollapsed(!iscollapsed)}
                icon={iscollapsed ? <MenuOutlinedIcon /> : undefined}
                rootStyles={{
                    margin:'10px 0 20px 0',
                    color: colors.grey[100],
                }}
                >
                    {!iscollapsed && (
                        <Box 
                        display="flex"
                        justifyContent='space-between'
                        alignItems="center"
                        ml="15px"
                        >
                            <Typography variant='h3' color={colors.grey[100]}>
                                ADMINIS
                            </Typography>
                            <IconButton onClick={() => setCollapsed(!iscollapsed)}>
                                <MenuOutlinedIcon/>
                            </IconButton>
                        </Box>
                    )}
                </MenuItem>


                {/* USER */}

                {!iscollapsed && (
                    <Box mb="25px">
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <img 
                            alt="Profile-User"
                            width="100px"
                            height="100px"
                            src={sunnat}
                            style={{cursor: 'pointer',borderRadius:"50%", objectFit:"cover"}}
                            /> 
                        </Box>

                        <Box textAlign="center">
                            <Typography
                            variant='h2'
                            color={colors.grey[100]}
                            fontWeight="bold"
                            sx={{m: "10px 0 0 0 "}}
                            >
                                Sunnat
                            </Typography>
                            <Typography variant='h5' color={colors.greenAccent[500]}>
                                VP Fancy Admin
                            </Typography>
                        </Box>
                    </Box>
                )}

                {/* MENU ITEMS */}

                <Box paddingLeft={iscollapsed ? undefined : '1%'}>
                    <Item
                    title='Dashboard'
                    to='/'
                    icon={<HomeOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />

                    <Typography
                    variant='h6'
                    color={colors.grey[300]}
                    sx={{ m: '15px 0 5px 20px'}}
                    >
                        Data
                    </Typography>

                    <Item
                    title='Manage Team'
                    to='/team'
                    icon={<PeopleOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />

                    <Item
                    title='Contacts Information'
                    to='/contacts'
                    icon={<ContactsOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                     <Item
                    title='Invoices Balanes'
                    to='/invoices'
                    icon={<ReceiptOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />

                    <Typography
                    variant='h6'
                    color={colors.grey[300]}
                    sx={{m : '15px 0 5px 20px'}}
                    >
                        Pages
                    </Typography>

                     <Item
                    title='Profile Form'
                    to='/form'
                    icon={<PersonOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title='Calendar'
                    to='/calendar'
                    icon={<CalendarTodayOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title='FAQ Page'
                    to='/faq'
                    icon={<HelpOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />

                    <Typography
                    variant='h6'
                    color={colors.grey[300]}
                    sx={{m : '15px 0 5px 20px'}}
                    >
                        Charts
                    </Typography>

                    <Item
                    title='Bar Chart'
                    to='/bar'
                    icon={<BarchartOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title='Pie Chart'
                    to='/pie'
                    icon={<PieChartOutlineOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title='Line Chart'
                    to='/line'
                    icon={<TimeLineOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title='Geography Chart'
                    to='/geography'
                    icon={<MapOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                </Box>
            </Menu>
        </Sidebar>
    </Box>
  )
}

export default Sidebar2
