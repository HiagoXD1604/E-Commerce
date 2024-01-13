import React from 'react'
import './CSS/CadastroAcesso.css'

const CadastroAcesso = () =>{
    return(
        <div className='loginsignup'> 
            <div className="loginsignup-container">
                <h1>Cadastrar</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='Seu Nome'/>
                    <input type="email" placeholder='Endereço Email'/>
                    <input type="password" placeholder='Senha'/>
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Já tem uma conta? <span>Logue aqui</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id=''/>
                    <p>Ao continuar o cadastro, eu aceito os termos de uso & politica de privacidade. </p>
                </div>
            </div>
        </div>
    )
}
export default CadastroAcesso