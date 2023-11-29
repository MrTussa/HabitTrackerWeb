import React from "react";
import {useNavigate } from 'react-router-dom'
import axios from 'axios'

import LoginForm from '../components/LoginForm'
function LoginPage() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const getLogin = async (data) => {
    const {email, password} = data
    try {
      const response = await axios.post(`${BASE_URL}/api/login`, {
        email: email,
        password: password,
      });
      const { token } = response.data;
      localStorage.setItem('jwtToken', token);
      navigate(to="/")
    } catch (error) {
      console.error('Ошибка при входе:', error.response.data.error);
    }
  };
  return (
    <div className="flex-1 justify-center items-center  flex">
      <LoginForm getLogin={getLogin}/>
    </div>
  );
}

export default LoginPage;
