//Hook States
import React, { useEffect, useState } from 'react';


const ItemCount = ({ stock, initial, onAdd }) => {

    //states
    const [contador, setContador] = useState(1);



    useEffect(() => {
         
    })

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

    // Funcion agregar 
    const AddCart = () => {
        onAdd(contador)
    }

    return (
        <div style={styles.countContainer} className="Count-container">
            <span style={styles.countStock}>Max Stock: {stock}</span>

            <div style={styles.countInfo} >
                <button style={styles.countBtn} onClick={restar}>-</button>
                <span style={styles.span}>{contador}</span>
                <button style={styles.countBtn} onClick={sumar}>+</button>
            </div>

            <button style={styles.countBtnCart} onClick={AddCart}>Agregar al Carrito</button>
        </div>
    )
}


//ESTILOS CSS
const styles = {
    countContainer: {
        width: '100%',
        height: '150px',
        margin: '30px 0',
        color: 'white',
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
        marginBottom: '15px',
    },

    //Contador
    countInfo: {
        width: '13%',
        border: 'solid 1px #c4c4c4',
        fontSize: '16px',
        fontWeight: '300',
        margin: '10px 0 20px 0',

        display: 'flex',
        justifyContent: 'space-between',
    },

    countBtn: {
        width: '45px',
        backgroundColor: '#393939',
        border: 'solid 1px #393939',
        color: 'white',
        fontWeight: '500',
        textAlign: 'center',
    },

    span:{
        width: '100%',
        backgroundColor: 'white',
        color: 'black',
        textAlign: 'center',
        fontWeight: '400',
    },

    countStock: {
        fontWeight: '300',
    },

    //Btn Agregar al carrito
    countBtnCart: {
        padding: '10px 18px',
        backgroundColor: '#F4D03F',
        color: 'black',
        fontSize: '14px',
        fontWeight: '500',
        borderRadius: '4px',
    },
}
export default ItemCount