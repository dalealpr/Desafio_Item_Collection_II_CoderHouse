import React, { useEffect, useState, } from 'react';
import Item from './item/Item';
//Import Spinner
import FadeLoader from "react-spinners/FadeLoader";


const ItemList = ({ products, onAdd }) => {

    let [loading, setLoading] = useState(true);

    return (
        < div style={styles.itemList}>
            <h3>ItemList</h3>
            <div style={styles.itemsCont}>


                {products.map((producto) => <Item key={producto.id} producto={producto} onAdd={onAdd} stock={producto.stock} />)}
                {/* <Item key={products.id} producto={products} onAdd={onAdd} stock={products.stock} /> */}

            </div>
        </div>
    )
}

//ESTILOS CSS
const styles = {
    itemList: {
        width: '77%',
        backgroundColor: '#c6c6c6',
        color: 'black',
        padding: '25px 0',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',

    },

    itemsCont: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        justifyItems: 'start',
    }

}

export default ItemList