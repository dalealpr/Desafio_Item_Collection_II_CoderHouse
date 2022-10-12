//Hook States
import React, { useState } from 'react';


const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(1);
    // Funcion sumar productos
    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }
    // Funcion sumar productos
    const restar = () => {
        if (contador > initial) {
            setContador(contador - 1);
        }
    }

    // Funcion sumar productos
    const AddCart = () => {
        onAdd(contador)
    }

    return (
        <div style={styles.countContainer} className="Count-container">

            <div style={styles.countInfo} >
                <button style={styles.countBtn} onClick={restar}>-</button>
                <span style={styles.countNumber}>{contador}</span>
                <button style={styles.countBtn} onClick={sumar}>+</button>
            </div>

            <span style={styles.countStock}>Stock: {stock}</span>

            <button style={styles.countBtnCart} onClick={AddCart}>Agregar al Carrito</button>
        </div>
    )
}


//ESTILOS CSS
const styles = {
    itemCountContainer: {
        color: 'black',
        display: 'flex',
        justifyContent: 'center',

    },

    countContainer: {
        color: 'black',
        fontWeight: '200',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Titulo del producto
    countTitle: {
        fontSize: '20px',
        fontWeight: '300',
    },

    //Contador
    countInfo: {
        width: '87px',
        height: '22px',
        border: 'solid 1px #c4c4c4',
        fontSize: '20px',
        fontWeight: '300',
        margin: '30px 0 20px 0',

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    countBtn: {
        width: '23px',
        height: '21px',
        backgroundColor: '#393939',
        border: 'solid 1px #393939',
        color: 'white',
        fontWeight: '500',
        textAlign: 'center',

        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    countNumber: {
        width: '23px',
        color: 'black',
        fontSize: '16px',
        fontWeight: '300',
        textAlign: 'center',
    },

    countStock: {
        fontWeight: '300',
        marginBottom: '20px',
        fontSize: '14px',
    },

    //Btn Agregar al carrito
    countBtnCart: {
        padding: '12px 22px',
        backgroundColor: '#F4D03F',
        color: 'black',
        fontSize: '16px',
        fontWeight: '500',
        borderRadius: '4px',
    },
}
export default ItemCount