import React from 'react'
import Sidebars from '../components/Sidebar';

function Login() {

  return(
    <div id="dashboard" >
      <Sidebars dashboard={true} ></Sidebars>

      <header>
        <h1>
          Orfanatos cadastrados
        </h1>
        <p>
          2 orfanatos
        </p>
      </header>

    </div>
  );
}

export default Login;