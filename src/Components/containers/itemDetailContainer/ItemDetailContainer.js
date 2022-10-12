import React, { useEffect, useState } from 'react';
//Hook useParams (traer cont IdCategoria)
import { useParams } from "react-router-dom";
//Import Spinner
import FadeLoader from "react-spinners/FadeLoader";
//Firebase
import { getFirestore, doc, getDoc } from 'firebase/firestore';

import { productos } from '../../../stockProductos';
import { customPromise } from '../../../customPromise';
import Item2 from './intemDetail/item2';


//PASOS FIREBASE
//1.- Traer el servicio de firestore
//2.- Crear un puntero al dato que queremos traer
//3.- Traer el datyo con una promesa



const ItemDetailContainer = () => {

    //State
    const [producto, setProducts] = useState([])
    let [loading, setLoading] = useState([true]);
    const { IdProducto } = useParams();

    //solucion 1
    useEffect(() => {

        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'productos', IdProducto)



        getDoc(queryDoc)
            .then(res => setProducts({ id: res.id, ...res.data() }))

    }, [IdProducto])


    console.log(producto);
    return (

        <div className='ItemDetailContainer' style={styles.ItemDetailContainer} >
            <h2 style={styles.h2}>ItemDetailContainer</h2>

            <Item2 item={producto} />

        </div>
    )
}

//ESTILOS CSS
const styles = {
    ItemDetailContainer: {
        width: '100%',
        padding: '30px 0px',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    h2: {
        color: 'white',
    }

}

export default ItemDetailContainer