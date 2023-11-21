import React, { useContext } from 'react'
import { Box,Button, TextField } from '@mui/material'
import { Formik } from 'formik'
import * as yup from 'yup'
// import useMediaQuery from '@mui/material/useMediaQuery'
import { Header } from '../../componets/header'
import axios from 'axios'
import { BaseUrl } from '../../Url'
import { SectionContext } from '../../Context/Context'


const initialValues = {
    userName: '',
    password: '',
};


const userSchema = yup.object().shape({
    userName : yup.string()
    .min(4, 'Password must contain at least 4 characters!')
    .required("required"),
    password : yup.string()
    .min(4, 'Password must contain at least 4 characters!')
    .max(6,'Password must not exceed 6 characters!')
    .required("required"),
})

const Login = () => {
    const { setToken } = useContext(SectionContext)
    


    const handleFormSubmit = (value) => {
        const info = {
            username: value.userName,
            password:value.password
        }

        axios.post(`${BaseUrl}/admin/login`,info)
        .then(res => {
            // console.log(res);
            if(res.request.status === 200){
               localStorage.setItem('token',res.data.data.token) 
            //    localStorage.setItem('token2',res?.config?.data) 
               setToken(res.data.data.token)
            }

        })
        .catch(err => {
            alert('This Username Not Found!')
        })
}
    
  return (
    <Box m='60px'
    textAlign='center'
    >
        <Header title="LOGIN" subtitle="Log in with your login"/>
        <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
        >
            {({ values, errors, touched,handleBlur, handleChange, handleSubmit  }) => (
                <form onSubmit={handleSubmit} className='form'>
                    <Box 
                    display='flex'
                    gap='30px'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    width='50%'
                    margin='0 auto'
                    >
                    <TextField 
                        fullWidth
                        variant='filled'
                        type='text'
                        label='UserName'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.userName}
                        name='userName'
                        error={ !!touched.userName && !!errors.userName }
                        helperText={touched.userName && errors.userName}
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
                        />
                    </Box>
                    <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    mt='20px'
                    >
                        <Button type='submit' color='secondary' variant='contained' >
                           Login
                        </Button>
                    </Box>
                </form>
            )}
        </Formik>
    </Box>
  )
}

export default Login
