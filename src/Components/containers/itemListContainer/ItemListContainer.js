import React, { useEffect, useState, } from 'react';
import ItemList from './itemList/ItemList';
import { customPromise } from '../../../customPromise';
//Firebase
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
//Import Spinner
import FadeLoader from "react-spinners/FadeLoader";
import { productos } from '../../../stockProductos';
//Hook useParams (traer cont IdCategoria)
import { useParams } from "react-router-dom";


//Funcion Componente "ItemListContainer"
const ItemListContainer = ({ greeting }) => {

    let { IdCategoria } = useParams()


    //State
    const [products, setProducts] = useState([])
    let [loading, setLoading] = useState([true]);

    useEffect(() => {

        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos')



        if (IdCategoria) {
            const queryFilter = query(queryCollection, where('categoria', '==', IdCategoria))
            getDocs(queryFilter)
                .then(res => setProducts(res.docs.map(product => ({ id: product.id, ...product.data() }))))

        } else {
            getDocs(queryCollection)
                .then(res => setProducts(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        }

    }, [IdCategoria])



    return (
        <div className='ItemListContainer' style={styles.ItemListContainer}>
            <h2 style={styles.h1}>{greeting}</h2>
            <ItemList products={products} />

        </div>
    )
}

//ESTILOS CSS
const styles = {
    ItemListContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 0',
    },

    h1: {
        padding: '10px 0',
        color: 'black',
    }

}

export default ItemListContainer