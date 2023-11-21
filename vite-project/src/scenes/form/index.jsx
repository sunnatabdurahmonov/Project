import React, { useContext, useEffect } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { Formik } from 'formik'
import * as yup from 'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Header } from '../../componets/header'
import axios from 'axios'
import { BaseUrl } from '../../Url'
import { SectionContext } from '../../Context/Context'


const initialValues = {
    firstName: '',
    lastName: '',
    UserName: '',
    password:'',
};



const userSchema = yup.object().shape({
    firstName : yup.string().required("required"),
    lastName : yup.string().required("required"),
    UserName : yup.string().required("required"),
    password: yup.string()
    .min(4, 'Password is too short - should be 4 chars minimum.')
    .max(8, 'Password is too long - should be 8 chars maximum')
})


const Form = () => {
    const {token} = useContext(SectionContext)
    const isNonMobile = useMediaQuery("(min-width:600px)")



  


    const handleFormSubmit = (values) => {
        const info = {
            first_name: values.firstName,
            last_name : values.lastName,
            username : values.UserName,
            password : values.password
        }

    axios.post(`${BaseUrl}/admin/add`,info,{
        headers:{
            Authorization:`${token}`
        }
    }).then(res => {
        if(res.status ==  201 || res.status === 200){
            alert("Success")
        }else {
            alert('error')
        }
    })

    }

  return (
    <Box m='20px'>
        <Header title="CREATE USER" subtitle="Create a New User profile"/>


        <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
        >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit  }) => (
                <form onSubmit={handleSubmit}>
                    <Box 
                    display='grid' 
                    gap='30px' 
                    gridTemplateColumns='repeat(4, minmax(0, 1fr))'
                    sx={{
                        "& > div" : {gridColumn: isNonMobile ? undefined : "span 4"}
                    }}
                    >
                    <TextField 
                        fullWidth
                        variant='filled'
                        type='text'
                        label='First Name'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.firstName}
                        name='firstName'
                        error={ !!touched.firstName && !!errors.firstName }
                        helperText={touched.firstName && errors.firstName}
                        sx={{ gridColumn:"span 2" }}
                        />

                    <TextField 
                        fullWidth
                        variant='filled'
                        type='text'
                        label='Last Name'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.lastName}
                        name='lastName'
                        error={ !!touched.lastName && !!errors.lastName }
                        helperText={touched.lastName && errors.lastName}
                        sx={{ gridColumn:"span 2" }}
                        />

                    <TextField 
                        fullWidth
                        variant='filled'
                        type='text'
                        label='UserName'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        name='UserName'
                        error={ !!touched.UserName && !!errors.UserName }
                        helperText={touched.UserName && errors.UserName}
                        sx={{ gridColumn:"span 2" }}
                        />

                    <TextField 
                        fullWidth
                        variant='filled'
                        type='text'
                        label='Password'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        name='password'
                        error={ !!touched.password && !!errors.password }
                        helperText={touched.password && errors.password}
                        sx={{ gridColumn:"span 2" }}
                        />

                   
                    </Box>
                    <Box
                    display='flex'
                    justifyContent='center'
                    mt='20px'
                    >
                        <Button type='submit' color='secondary' variant='contained'>
                            Create new User
                        </Button>
                    </Box>
                </form>
            )}


        </Formik>
    </Box>
  )
}

export default Form
