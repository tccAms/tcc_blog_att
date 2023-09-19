import React from 'react';
import register from './register.css';
function Register_Screen() {
    return (
        <div className='login-Screen'>

            <body>

                <form>
                    <h1 className='h1'>Cadastrar Conta</h1>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="white-box">
                        <input type='email' placeholder='Insira o Email ' />
                        <br />
                        <input type='password' placeholder='Insira a Senha ' />
                        <br />
                        <input type='text' placeholder='Insira o nome de usuario ' />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br/>
                    <br/>

                    <input type='submit' value='Registrar-se' />
                    <p><a href="">Possui uma conta?</a></p>
                </form>
            </body>

        </div>
    )
}

export default Register_Screen