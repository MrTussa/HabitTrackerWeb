import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider  } from '@mui/material/styles';

import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ProtectedRoute from './pages/ProtectedRoute';

import './App.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



const theme = createTheme({
  palette: {
    orange: {
      main: '#F97316',
      light: '#F97316',
      dark: '#F97316',
      contrastText: '#FFFFFF',
    },
  },
});


function App() {


  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route element={ <ProtectedRoute/> }>
          <Route index  path="/" element={<MainPage/>} />
        </Route>
        <Route path="/registration" element={ <RegistrationPage/> } />
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="*" element={<p>Error page not found: 404</p>}></Route>
      </Routes>
    </Router>
    </ThemeProvider>
  )
}

export default App
