import { Route, Routes } from 'react-router-dom'
import { ColorModeContext , useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Dashboard from './scenes/dashboard'
import Team from './scenes/team'
import Contacts from './scenes/contacts'
import Invoices from './scenes/invoices'
import Form from './scenes/form'
import Calendar from './scenes/calendar'
import Login from './componets/login'
import { SectionContext, SectionContextProvider } from './Context/Context'
import { Layout } from './Layout/Layout'
import { useContext } from 'react'


function App() {
  const [theme,colorMode] = useMode()
  const {token} = useContext(SectionContext)
  if(token){
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme} >
          <CssBaseline/>
          <Layout>
              <Routes>
                <Route path='/' element={<Dashboard/>} />
                <Route path='/team' element={<Team/>} /> 
                <Route path='/invoices' element={<Invoices/>} /> 
                <Route path='/contacts' element={<Contacts/>} /> 
                <Route path='/form' element={<Form/>} /> 
                <Route path='/calendar' element={<Calendar/>} /> 
              </Routes>
              </Layout>
         </ThemeProvider>
        </ColorModeContext.Provider>
       )
    
  }else{
    return (
      <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme} >
        <CssBaseline/>
      <Routes>
      <Route path='/' element={<Login/>}/>
      </Routes>
        </ThemeProvider>
        </ColorModeContext.Provider>
    )
  }
}

export default App
