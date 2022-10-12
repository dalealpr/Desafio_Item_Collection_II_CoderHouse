//Hook States
import React, { useEffect, useState } from 'react';
//Import Link Router
import { Link, NavLink } from "react-router-dom";
//Import Context
import { useCartContext } from '../../../../context/CartContext';
import ItemCount from './itemCount/ItemCount';//Import SweetAlerts
import Swal from 'sweetalert2';


const ItemDetail = ({ item, stock, }) => {

    //State
    const [irCarrito, setIrCarrito] = useState(false)
    const {agregarProducto} = useCartContext();

    //Funcion onAdd Agregar al carrito
    const onAdd = (count) => {
        //Funcion Agregar Producto
        agregarProducto(item, count)
        console.log('Numero Producto(s): '+ count)


        //Alert
        window.Swal = Swal

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: count + ' Producto(s) Agregado(s)',
            showConfirmButton: false,
            timer: 1500
        })

        setIrCarrito(true)
    }

    return (
        < div className='itemDetail' style={styles.ItemDetail}>


            <h3 style={styles.h3}>ItemDetail</h3>

            <div style={styles.DetailCont}>

                <img style={styles.DetailImg} src={item.img} />

                <div style={styles.DetailContText}>
                    <h4 style={styles.h4}>{item.nombre}</h4>
                    <span style={styles.precio}>${item.precio}</span>
                    <p style={styles.parrafo}>{item.descrp}</p>

                    {/* if Ternario Cambio Count por Boton */}
                    {irCarrito ? <Link to='/cart' style={styles.linkcount}> <button style={styles.countBtnCart} >Terminar Compra</button></Link> :
                        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    )
}

const styles = {
    ItemDetail: {
        width: '65%',
        padding: '30px 80px',
        backgroundColor: '#333333',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },

    h3: {
        color: 'white',
    },

    h4: {
        fontSize: '27px',
        marginBottom: '30px',
    },

    DetailCont: {
        display: 'grid',
        height: '460px',
        gridTemplateColumns: "repeat(2, 1fr)",
        padding: '40px 70px',
        gap: '90px',
    },

    DetailContText: {
        width: '600px',
    },

    DetailImg: {
        width: '370px',
    },

    precio: {
        fontSize: '30px',
        marginBottom: '30px',
    },

    parrafo: {
        marginTop: '30px',
        textAlign: 'left',
    },


    //Btn Agregar al carrito
    countBtnCart: {
        padding: '15px 28px',
        backgroundColor: '#F4D03F',
        color: 'black',
        fontSize: '16px',
        fontWeight: '500',
        borderRadius: '4px',
    },

}
export default ItemDetail;