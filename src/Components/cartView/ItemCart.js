import React from 'react';
import { useCartContext } from '../../context/CartContext';


const ItemCart = ({ product }) => {
    const { borrarProducto } = useCartContext()

    return (
        <div style={styles.itemcartC} className="itemCart_container">
            <div style={styles.contone}>
                <img style={styles.img} src={product.img} alt={product.nombre} />
                <p style={styles.cartTitle}>{product.nombre}</p>
            </div>
            <div style={styles.contonex}>
                <p style={styles.cartPrice}>$ {product.precio}</p>
            </div>

            <div style={styles.contwo}>
                <p style={styles.cartStock}>{product.stock}</p>
            </div>
            <div style={styles.conthre}>
                <p style={styles.cartSubT}>$ {product.stock * product.precio}</p>
                <button onClick={() => borrarProducto(product.id)}><img style={styles.Basurero} src="https://i.ibb.co/9mX868h/basurero.png" /></button>
            </div>
        </div>
    )
}


//ESTILOS CSS
const styles = {
    itemcartC: {
        width: '95%',
        padding: '20px 0',
        margin: '20px 0',
        borderBottom: '2px solid #F4D03F',
        display: 'flex',
    },



    //-------------------------------------------------------//
    contone: {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',

    },

    img: {
        width: '160px',
        marginRight: '50px',
    },

    cartTitle: {
        fontSize: '18px',
        fontWeight: '400',
    },

    //-------------------------------------------------------//

    contonex: {
        width: '10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    cartPrice: {
        fontSize: '20px',
        fontWeight: '700',
        textAlign: 'center',
    },

    //-------------------------------------------------------//
    contwo: {
        width: '20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },

    cartStock: {
        fontSize: '15px',
        padding: '10px 20px',
        margin: '0 50px',
        fontWeight: '300',
        border: '1px solid #d2d2d2',
    },


    //-------------------------------------------------------//
    conthre: {
        width: '20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },

    cartSubT: {
        fontSize: '20px',
        fontWeight: '700',
        textAlign: 'center',
    },

    Basurero: {
        width: '26px',
        marginLeft: '30px',
    },

    //-------------------------------------------------------//


}

export default ItemCart