import React from 'react';
import ItemCount from './itemCount/ItemCount';
//Import Link Router
import {Link,NavLink} from "react-router-dom";

const Item = ({ producto, onAdd, stock }) => {
    return (
        <div className='Item' style={styles.itemContainer}>
            <Link className='prod_a' to={`/item/${producto.id}`} href="index.html"><img src={producto.img} style={styles.itemImg} alt="img" /></Link>
            <div>
                <h5 style={styles.itemTitulo}>{producto.marca}</h5>
                <p style={styles.itemDesc}>{producto.nombre}</p>
            </div>
            <span style={styles.itemPrecio}>$ {producto.precio}</span>
        </div>
    )
}

//ESTILOS CSS
const styles = {
    itemContainer: {
        height: '380px',
        backgroundColor: 'white',
        color: 'black',
        margin: '20px 20px',
        padding: '18px 20px 45px',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    itemTitulo: {
        height: '45px',
        marginTop: '15px',
        fontSize: '20px',
    },

    itemImg: {
        width: '100%',
        backgroundColor: 'red',
    },

    itemDesc:{
        height: '45px',
        fontSize: '15px',
    },

    itemPrecio: {
        marginTop: '14px',
        fontSize: '21px',
        fontWeight: '500',
    },

}

export default Item
