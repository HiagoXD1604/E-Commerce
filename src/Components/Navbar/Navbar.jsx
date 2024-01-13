import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { LojaContext } from '../../Context/LojaContext'


const Navbar = () =>{

    const [menu,setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(LojaContext);
    return(
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt=""/>
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => {setMenu("loja")}}><Link style={{textDecoration:'none'}} to='/'>Loja</Link>{menu==="loja"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("masculino")}}><Link style={{textDecoration:'none'}} to='/masculino'>Masculino</Link>{menu==="masculino"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("feminina")}}><Link style={{textDecoration:'none'}} to='/feminina'>Feminina</Link>{menu==="feminina"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("criancas")}}><Link style={{textDecoration:'none'}} to='/criancas'>Crianças</Link>{menu==="criancas"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/acessar'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt=""/></Link>
                <div className="nav-cart-count">
                    {getTotalCartItems()}
                </div>
            </div>
        </div>
    )
}
export default Navbar