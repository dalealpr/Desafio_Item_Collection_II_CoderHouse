import React from 'react';
//Import Components
import ItemDetail from './itemDetail';


const Item2 = ({ item }) => {
    console.log('it2:',item.id)
    return (
        <div style={styles.ItemDtl} className='item2-container'>
            {/* {item.map((produ) => <ItemDetail  item={produ} key={produ.id} stock={produ.stock}/>)} */}
            <ItemDetail  item={item} key={item.id} stock={item.stock}/>
        </div>
    )
}

const styles = {
    ItemDtl: {
        width: 'max-width',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },

}
export default Item2