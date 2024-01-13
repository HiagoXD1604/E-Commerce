import React, { useContext } from 'react'
import './CartItems.css'
import {LojaContext} from '../../Context/LojaContext'
import remove_icon from '../Assets/cart_cross_icon.png'

export const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(LojaContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Produtos</p>
            <p>Titulo</p>
            <p>Preço</p>
            <p>Quantidade</p>
            <p>Total</p>
            <p>Remover</p>
        </div>
        <hr />
            {all_product.map((e)=>{
                if(cartItems[e.id]>0){

                    return <div>
                            <div className="cartitems-format cartitems-format-main">
                        	<img className='carticon-product-icon' src={e.image} alt="" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                            </div>
                        </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Total do Carrinho</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <p>Custo de Remessa</p>
                            <p>Gratis</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Confirmar Pagamento</button>
                </div>
                <div className="cartitems-promocode">
                    <p>Se tiver um código promocional, coloque aqui</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='Código de Promoção' />
                    </div>
                </div>
            </div>
    </div>
  )
}
