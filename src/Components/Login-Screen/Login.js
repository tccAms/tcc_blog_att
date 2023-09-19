import React from 'react';
import Login from './Login.css';

function Tela() {
  return (
    <div className='login-Screen'>
      <body>


        <form>
          <h1>Ams Blog</h1>
          <br />
          <br />
          <br />
          
          <div class="white-box">
            <input type='email' placeholder='Insira o Email ' />
            <input type='password' placeholder='Insira a Senha ' />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          
          <input type='submit' value='Fazer Login' />

          <p><a href="">Esqueceu a senha?</a></p>
        </form>
      </body>
    </div>
  )
}

export default Tela;