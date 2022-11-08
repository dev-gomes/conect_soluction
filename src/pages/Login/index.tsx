import { FormEvent, useState } from 'react';
import { RedirectFunction } from "react-router-dom";

import './styles.scss';

import { FaUserAlt, FaLock, FaKey, FaQuestionCircle } from 'react-icons/fa'

import logoCopa from '../../assets/copa.png';

export function Login() {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    function handleUserLogin(event: FormEvent) {
        event.preventDefault()

        if(user === 'gomes' && password === 'qwe123') {
            window.location.href = "/pages"
        }
    }

    return(
        <div className='login--container'>
            <img src={logoCopa} className='login--logo' />
            <h1>Faça login na sua conta</h1>
            <p>Entre em sua conta para acessar seus albúns de figurinhas</p>
            <form onSubmit={handleUserLogin} className='login--form'>
                <small>Qual seu usuário?</small>
                <div className='login-input'>
                    <FaUserAlt className='login--inputIcon' color='#9a1032' />
                    <input 
                        type="text" 
                        placeholder='Nome'
                        onChange={event => setUser(event.target.value)}
                        value={user}
                    />
                </div>
                <small>Qual sua senha?</small>
                <div className='login-input'>
                    <FaLock className='login--inputIcon' color='#9a1032' />
                    <input 
                        type="password" 
                        placeholder='Senha'
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                    />
                </div>

                <a href='#'>
                    <FaQuestionCircle />
                    Esqueceu sua senha?
                </a>

                <button type="submit">
                    Entrar
                    <FaKey className='login--buttonIcon' />
                </button>
            </form>
        </div>   
    );
}