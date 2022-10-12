import React from 'react';
import ItemListContainer from '../containers/itemListContainer/ItemListContainer';

const MainIndex = ({greeting}) => {
    return (
        <div className='mainIndex-container' style={styles.mainIndex}>
            <ItemListContainer greeting={greeting}/>
        </div>
    )
}

//ESTILOS CSS
const styles = {
    mainIndex:{
        gridArea: 'mainIndex',
        padding:'40px 0',
        color:'black',
        textAlign:'center',
        backgroundColor: '#ebebeb',
    }

}
export default MainIndex