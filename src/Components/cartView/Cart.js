//Hook States
import React, { useEffect, useState } from 'react';
//Firebase
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import { useCartContext } from '../../context/CartContext';


const Cart = () => {
    const { cart, precioTotal, limpiarCarrito } = useCartContext()
    const [idOrden, setIdOrden] = useState('')
    //State
    const [emitirCompra, setEmitirCompra] = useState(false)

    const order = {
        buyer: {
            name: 'Pablo',
            email: 'pablo@gmail.com',
            phone: '1233123',
            adress: 'calle 123',
        },

        items: cart.map(product => ({ id: product.id, nombre: product.nombre, precio: product.precio, stock: product.stock })),
        total: precioTotal(),
    }

    const handlerClick = () => {
        const db = getFirestore();
        const orderCollection = collection(db, 'orders')

        addDoc(orderCollection, order)
            .then(({ id }) => setIdOrden(id))

        setEmitirCompra(true)
    }

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

            <div style={styles.cartProd}>
                <div style={styles.cartTitle}>
                    <p style={styles.producto}>PRODUCTO</p>
                    <p style={styles.cantidad}>CANTIDAD</p>
                    <p style={styles.subtotal}>SUBTOTAL</p>
                </div>

                {
                    cart.map(product => <ItemCart key={product.id} product={product} />)
                }


            </div>

            <div style={styles.cartTot}>
                <div style={styles.cartTotY} >
                    <p style={styles.totalP}>TOTAL:</p>
                    <p style={styles.total}>$ {precioTotal()}</p>
                </div>

                <div style={styles.btnSecCont}>
                    <Link to='/' style={styles.btnSec}>Seguir Comprando</Link>
                    <button style={styles.btnSec} onClick={limpiarCarrito}>Vaciar Carrito</button>
                </div>

                {emitirCompra ?
                    <div style={styles.contIdOrdenCompra}>
                        <p style={styles.idOrdenCompra}>ID Orden de compra:</p>
                        <p style={styles.idOrdenComprad}>{idOrden}</p>
                    </div>
                    :
                    <button style={styles.btnPr} onClick={handlerClick}>Emitir Compra</button>
                }



            </div>

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
    cartCont: {
        width: '100%',
        margin: '35px 0 50px',
        display: 'flex',
        justifyContent: 'center',


    },

    cartProd: {
        width: '55%',
    },

    cartTitle: {
        width: '95%',
        display: 'flex',
        marginTop: '30px',
        paddingBottom: '10px',
        borderBottom: '2px solid #F4D03F',

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

    cartTot: {
        width: '25%',
        height: '440px',
        marginTop: '62px',
        backgroundColor: '#ececec',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    cartTotY: {
        width: '70%',
        display: 'flex',
        alignItems: 'center',
        paddingBottom: '5px',
        borderBottom: '2px solid #b9b9b9',
    },

    totalP: {
        fontWeight: '700',
        fontSize: '22px',
    },

    total: {
        width: '100%',
        fontWeight: '700',
        fontSize: '22px',
        textAlign: 'right',
    },


    //------------------------------------------------------------//

    btnSecCont: {
        width: '70%',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
    },

    btnSec: {
        width: '50%',
        height: '40px',
        marginTop: '18px',
        backgroundColor: '#454545',
        color: 'white',
        fontSize: '12px',
        fontWeight: '400',
        borderRadius: '4px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },

    btnPr: {
        width: '70%',
        height: '50px',
        marginTop: '18px',
        backgroundColor: '#F4D03F',
        color: 'black',
        fontSize: '16px',
        fontWeight: '700',
        borderRadius: '4px',
        textAlign: 'center',

    },


    contIdOrdenCompra:{
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    idOrdenCompra: {
        fontSize: '17px',
        fontWeight: '500',
    },

    idOrdenComprad: {
        marginTop: '10px',
        fontSize: '17px',
        fontWeight: '700',
    },

}


export default Cart