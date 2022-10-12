import React from 'react';
import CartImg from '../../assets/img/nav/cart_01_white.png';
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {

    const {totalProductos}= useCartContext()

    return (
        <div style={styles.btn_cont} className="cart-conteiner">
        <span style={styles.num_cart}>{totalProductos() || ''}</span>
        <button style={styles.btn}><img src={CartImg} style={styles.btn_img} onMouseOver={hoverImg} onMouseOut={ofHoverImg} className='img_cart' id='img_cart'></img></button>
        </div>
    )
}

//Cambio de Img Cart
function hoverImg(){
    document.getElementById('img_cart').src ="https://i.ibb.co/DrSJJPT/cart-01-hover1.png" 
}

function ofHoverImg(){
    document.getElementById('img_cart').src ="https://i.ibb.co/ZcLY4WM/cart-01-white.png"
}

//ESTILOS CSS
const styles = {
    btn_cont:{
        width: '210px',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'end',
    },

    num_cart:{
        padding: '5px',
        fontSize: '13px',
        fontWeight: '500',
        color: 'black',
        backgroundColor: '#d7d7d7',
        borderRadius: '15px',
    },

    btn:{
        display:'flex',
        justifyContent: 'end',
    },

    btn_img: {
        width: '34px',
    },
}

export default CartWidget