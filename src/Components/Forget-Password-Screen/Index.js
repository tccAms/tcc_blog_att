import React from 'react';
import Index from './Index.css';
function Forget_Password() {


return (



    <div className='login-Screen'>

        <body>

            <form>
                <h1 className='h1'>Esqueci a Senha</h1>
                <br />
                <br />
                <br />
                <br />
                <br />
                
                <div className="white-box">
                    
                    <input type='email' placeholder='Insira o Email ' />
                    <input type='password' placeholder='Insira a nova senha ' />
                    <input type='password' placeholder='Confirme a nova senha ' />
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <input type='submit' value='Alterar Senha' />
                <p><a href="">Possui uma conta?</a></p>
            </form>
        </body>

    </div>
)
}

export default Forget_Password