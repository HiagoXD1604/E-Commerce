import React, { useContext } from 'react'
import './CSS/Categorias.css'
import { LojaContext } from '../Context/LojaContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const Categorias = (props) =>{
    const {all_product} = useContext(LojaContext);
    return(
        <div className="shop-category">
            <img className='shopcategory-banner' src={props.banner} alt=""/>
            <div className="shopcategory-indexSort">
                <p>
                    <span>Mostrando 1-12</span> 36 produtos fora
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt=""/>
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item,i)=>{
                    if(props.category === item.category){
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    }
                    else{
                        return null;
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">
                Explore Mais
            </div>
        </div>
    )
}
export default Categorias