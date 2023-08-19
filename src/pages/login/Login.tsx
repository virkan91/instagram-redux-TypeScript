import React from 'react'
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div>
      <div>
        <Link to="/home">
          <button>Вход</button>
        </Link>
        <Link to="/registration">
          <button>Регистрация</button>
        </Link>
      </div>
    </div>
  );
}

export default Login