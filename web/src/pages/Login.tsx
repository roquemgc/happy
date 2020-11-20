import React from 'react'
import {FiArrowLeft} from 'react-icons/fi'
import {Link} from 'react-router-dom'

import logoImg from '../images/logoTipo2.svg'

import '../styles/pages/login.css'

function Login() {

  // const [email, setEmail] = useState('');
  // const [userPassword, setUserPassword] = useState('');

  // async function handleSubmit(event: FormEvent) {
  //   const data = new FormData();

  //   data.append('email', email);
  //   data.append('userPassword', userPassword);
  // }

  return(
    <div id="page-login">
      <div className="landing-content">
        <img src={logoImg} alt="Happy" />

        <div className="location">
            <strong>Hortolândia</strong>
            <span>São Paulo</span>
        </div>
      </div>

      <main>
        <Link className="back-page" to="/">
            <FiArrowLeft size={26} color="rgba(21, 195, 214, 1)"></FiArrowLeft>
        </Link>

        <form className="login-form">
          <fieldset>
            <legend>Fazer login</legend>

            <div className="input-block">
              <label htmlFor="email">Email</label>
              <input id="email" />
            </div>

            <div className="input-block">
              <label htmlFor="password">Senha</label>
              <input type="password" id="senha" />
            </div>

            <div className="input-block input-checkbox">

                <label htmlFor="remind-me">                  
                  <input type="checkbox" id="remind-me"/>
                  <span className="checkmark"></span>
                  Lembrar-me   
                </label>
            </div>

            <Link id="forgot-password" to="/forgot-password">
              Esqueci minha senha
            </Link> 

          </fieldset>

          <Link to="/dashboard">
            <button disabled={ false } className="confirm-button" type="submit">
              Entrar
            </button>
          </Link>
        </form>
      </main>
    </div>
  );
}

export default Login;