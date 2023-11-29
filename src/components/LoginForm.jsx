import React, {useState} from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent'; 

const Login = ({getLogin}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
 
  const handleSubmit = (event) => {
    event.preventDefault()
 
    setEmailError(false)
    setPasswordError(false)
 
        if (email == '') {
            setEmailError(true)
        }
        if (password == '') {
            setPasswordError(true)
        }
 
        if (email && password) {
            getLogin({email: email ,password: password})
        }
    }
     
    return ( 
    <Card sx={{ minWidth: 275 }} className="!shadow-card !min-w-[448px]">
     <form autoComplete="on" onSubmit={handleSubmit}>
       <CardContent className="flex gap-2 flex-col">
        <label>
        E-Mail
            <TextField 
                onChange={e => setEmail(e.target.value)}
                required
                variant="outlined"
                color="orange"
                type="email"
                fullWidth
                value={email}
                error={emailError}
             />
        </label>
        <label>
            Password
             <TextField 
                onChange={e => setPassword(e.target.value)}
                required
                variant="outlined"
                color="orange"
                type="password"
                value={password}
                error={passwordError}
                fullWidth
             />
        </label>
      </CardContent>
      <CardActions className=" flex justify-between !p-4">
        <Button variant="outlined" color="orange" type="submit">Login</Button>

        <small>Need an account? <Link to="/register" className="text-orange">Register here</Link></small>
      </CardActions> 
     </form>
    </Card>
        
    );
}
 
export default Login;