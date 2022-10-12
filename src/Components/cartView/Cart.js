import React from 'react';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import { useCartContext } from '../../context/CartContext';


const Cart = () => {
    const { cart, preciTotal } = useCartContext()

    console.log('lenght: ', cart.length)

    if (cart.length === 0) {

        return (
            <>
                <div style={styles.divSinElem}>
                    <img style={styles.imgW} src='https://i.ibb.co/44F4ZZW/warning-png.png" alt="warning-png' />
                    <p>No hay elementos en el carrito</p>
                    <Link style={styles.btnLink} to='/' cursor >Hacer Compras</Link>
                </div>
            </>
        )
    }

    return (
        <div style={styles.cartCont} className='cart_container'>
            <div style={styles.cartTitle}>
                <p style={styles.producto}>PRODUCTO</p>
                <p style={styles.cantidad}>CANTIDAD</p>
                <p style={styles.subtotal}>SUBTOTAL</p>
            </div>

            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }

            <p style={styles.total}>TOTAL: $ {preciTotal()}</p>

        </div>
    )
}

//ESTILOS CSS
const styles = {
    divSinElem: {
        width: '100%',
        height: '500px',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    imgW: {
        width: '130px',
        marginBottom: '20px',

    },

    btnLink: {
        marginTop: '20px',
        backgroundColor: 'transparent',
        padding: '16px 34px',
        backgroundColor: '#F4D03F',
        borderRadius: '4px',
        fontWeight: '500',
        fontSize: '15px',
    },

    //-----------------------------------------------------//
    cartCont:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },

    cartTitle:{
        width: '70%',
        display: 'flex',
        marginTop:'30px',
        paddingBottom: '10px',
        borderBottom:'2px solid #F4D03F',

    },

    producto: {
        width: '60%',
        fontSize: '20px',
        fontWeight: '700',
    },

    cantidad: {
        width: '20%',
        fontSize: '20px',
        fontWeight: '700',
        textAlign: 'center',

    },

    subtotal: {
        width: '20%',
        fontSize: '20px',
        fontWeight: '700',
        textAlign: 'center',
    },

    total:{
        width: '70%',
        height: '40px',
        margin: '63px 0',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: '30px',


    }

}


export default Cart