import React, { useEffect, useState } from 'react'
import {FiArrowLeft} from 'react-icons/fi'
import { Link, useLocation, useHistory } from 'react-router-dom'

import logoImg from '../images/logoTipo2.svg'

import '../styles/pages/handle-user.css'

function HandleUser() {

  const location = useLocation();
  const history = useHistory();
  const [login, setLogin] = useState(false);
  const [forgotPassword, setforgotPassword] = useState(false);
  const [passwordReset, setPasswordReset] = useState(false);
  const [formLegend, setFormLegend] = useState('')
  const [formInstruction, setFormInstruction] = useState('')
  // const [email, setEmail] = useState('');
  // const [userPassword, setUserPassword] = useState('');

  // async function handleSubmit(event: FormEvent) {
  //   const data = new FormData();

  //   data.append('email', email);
  //   data.append('userPassword', userPassword);
  // }
  useEffect(() => {
    if(location.pathname === '/login') {
      setFormLegend('Fazer login');
      setLogin(true);
  
    } else if(location.pathname === '/forgot-password') {
      setFormLegend('Esqueci a senha');
      setFormInstruction('Sua redefinição de senha será enviado para o email cadastrado');
      setforgotPassword(true);
  
    } else if(location.pathname === '/password-reset') {
      setFormLegend('Redefinição de senha');
      setFormInstruction('Escolha uma nova senha para você acessar o dashboard do Happy');
      setPasswordReset(true);
    }
  }, [location.pathname]);

  return(
    <div id="page-handle-user">
      <div className="landing-content">
        <img src={logoImg} alt="Happy" />

        <div className="location">
            <strong>Hortolândia</strong>
            <span>São Paulo</span>
        </div>
      </div>
      <main>
        { (login || forgotPassword) &&(
          <button type="button" className="back-page" onClick={history.goBack}>
            <FiArrowLeft size={26} color="rgba(21, 195, 214, 1)"></FiArrowLeft>
          </button>
        )}
        <form className="user-form">
          <fieldset>
            <legend>{formLegend}</legend>
            { (forgotPassword || passwordReset) && (
              <p>{formInstruction}</p>
            ) }

            {login ? (
              <>
                <div className="input-block">
                  <label htmlFor="email">Email</label>
                  <input id="email" />
                </div>
                <div className="input-block">
                  <label htmlFor="password">Senha</label>
                  <input type="password" id="password" />
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
              </>
            ) : forgotPassword ? (
              <div className="input-block">
                <label htmlFor="email">Email</label>
                <input id="email" />
              </div>
            ) : passwordReset && (
              <>
                <div className="input-block">
                  <label htmlFor="password">Senha</label>
                  <input type="password" id="password" />
                </div>
                <div className="input-block">
                  <label htmlFor="passwordConfirmation">Repetir senha</label>
                  <input type="password" id="passwordConfirmation" />
                </div>
              </>
            )}
            <Link to="/dashboard">
              <button disabled={ false } className="confirm-button" type="submit">
                Entrar
              </button>
            </Link>
          </fieldset>
        </form>
      </main>
    </div>
  );
}

export default HandleUser;