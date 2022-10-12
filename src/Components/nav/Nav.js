import React, { useEffect, useState } from 'react';
//Import Link Router
import { Link, NavLink } from "react-router-dom";
//Import IMG
import Logo from '../../assets/img/logo/logo_01_white.png';
import Flecha from '../../assets/img/nav/flecha_01.png';
//Import Components
import CartWidget from './CartWidget';
//Import Lista de productos .JSON
import categoriasProducts from "../../categoriasProductos.json";


const Nav = () => {

    return (
        <div style={styles.navConteiner} className='nav-conteiner'>
            {/* Imagen Logo del eCommerce */}
            <Link className='a_logo' style={styles.logo} to={'/'}><img src={Logo} style={styles.logoImg} alt="logo" /></Link>
            {/* Nav de la pagina */}
            <nav style={styles.nav}>
                <ul className='menu_horizontal' style={styles.nav_ul}>

                    <li className='nav_li' style={styles.nav_li}>

                        <NavLink className='nav_a' id='btnProducto' style={styles.nav_a} >PRODUCTOS<img src={Flecha} style={styles.flecha} /></NavLink>
                        <ul className='menu_vertical' style={styles.prodList_ul}>

                            {/* categoria de productos */}
                            {categoriasProducts.map((categoria) =>
                                <li style={styles.prodList_li} key={categoria.id}>
                                    <NavLink  className='nav_a_list' to={categoria.ruta} style={styles.NavLink}>{categoria.nombre}</NavLink>
                                </li>
                            )}
                        </ul>
                    </li>


                    <li className='nav_li' style={styles.nav_li}>
                        <NavLink className='nav_a' style={styles.nav_a} to={'/nosotros'}>NOSOTROS</NavLink></li>
                    <li className='nav_li' style={styles.nav_li}>
                        <NavLink className='nav_a' style={styles.nav_a} to={'/contacto'}>CONTACTO</NavLink>
                    </li>
                    <li className='nav_li' style={styles.nav_li}>
                        <NavLink className='nav_a' style={styles.nav_a} to={'/usuario'}>USUARIO</NavLink>
                    </li>

                </ul>
            </nav>

            {/* Icono Carrito */}
            <Link to={'/cart'}><CartWidget /></Link>

        </div>
    )
}



//ESTILOS CSS
const styles = {
    //Contenedor del Nav
    navConteiner: {
        gridArea: 'nav',
        height: '70px',
        // border: `solid 2px red`,
        color: 'white',
        paddingLeft: '50px',
        paddingRight: '50px',
        backgroundColor: '#333333',

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    //----------------------------------------------//

    // Logo eCommerce
    logo: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    logoImg: {
        width: '210px',
    },

    //----------------------------------------------//

    //Nav
    nav: {
        height: '100%',
        display: 'flex',
    },

    //Nav-ul
    nav_ul: {
        height: '100%',

        display: 'flex',
        alignItems: 'center',
    },

    //Nav-ul-li-a
    nav_li: {
        height: '100%',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    //Nav-ul-li-a
    nav_a: {
        height: '100%',
        color: 'white',

        padding: `0px 30px`,
        fontSize: '15px',
        fontWeight: '500',

        display: 'flex',
        justifyContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
    },

    nav_ax: {
        height: '100%',
        color: 'white',
        backgroundColor: '#181818',

        padding: `0px 30px`,
        fontSize: '15px',
        fontWeight: '500',

        display: 'none',
        justifyContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
    },

    flecha: {
        width: '9px',
        marginLeft: '4px',
    },
    //----------------------------------------------//
    //LISTA DE CATEGORIAS
    prodList_ul: {
        width: '100%',
        height: '85px',
        marginTop: '150px',
        position: 'absolute',
        right: '0',

        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#505050',
        gap: '50px',
    },

    //Nav-ul-li-a
    prodList_li: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },

    NavLink: {
        height: '100%',
        fontSize: '16px',
        fontWeight: '400',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    btn_img: {
        width: '34px',
    },
}
export default Nav