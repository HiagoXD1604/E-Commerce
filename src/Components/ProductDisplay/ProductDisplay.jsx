import React,{useContext} from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { LojaContext } from '../../Context/LojaContext'

export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(LojaContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
            </div>
            <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Uma boa descrição do produto.......
            </div>
            <div className="productdisplay-right-size">
                <h1>Selecione o Tamanho</h1>
                <div className="productdisplay-right-size">
                    <div>pp</div>
                    <div>P</div>
                    <div>M</div>
                    <div>G</div>
                    <div>GG</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Adicione ao Carrinho</button>
            <p className='productdisplay-right-category'><span>Categoria: </span>Mulher, Blusa, Top</p>
            <p className='productdisplay-right-category'><span>Tags: </span>Moderno, Recente</p>
        </div>
    </div>
  )
}
