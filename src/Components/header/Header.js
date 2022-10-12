import React from 'react';
import ItemListContainer from '../containers/itemListContainer/ItemListContainer';

const Header = () => {
    return (
        <div className='header-container' style={styles.headerCont}>

        </div>
    )
}

//ESTILOS CSS
const styles = {
    headerCont:{
        height: '600px',
        gridArea: 'header',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default Header