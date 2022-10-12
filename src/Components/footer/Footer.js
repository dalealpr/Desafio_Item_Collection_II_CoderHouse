import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer_cont-1" style={styles.fCont1}>

                <div style={styles.fCont1_img_cont} className="footer_cont-sn">
                    <a href="https://www.instagram.com/" target="_blank"><img style={styles.fCont1_img} src="https://i.ibb.co/GF9f9NH/ico-instagram.png" /></a>
                    <a href="https://www.facebook.com/" target="_blank"><img style={styles.fCont1_img} src="https://i.ibb.co/tcmRbsy/ico-facebook.png" /></a>
                    <a href="https://twitter.com/" target="_blank"><img style={styles.fCont1_img} src="https://i.ibb.co/S5BK5Bz/ico-twitter.png" /></a>
                    <a href="https://www.youtube.com/" target="_blank"><img style={styles.fCont1_img} src="https://i.ibb.co/KmkxsHD/ico-youtube.png" /></a>
                </div>

            </div>

            <div style={styles.fCont2_3}>
                <div  className="footer_cont-2">
                    <div style={styles.fCont2} className="footer_cont-2t">
                        <img  style={styles.fCont2_img} src="https://i.ibb.co/X7k09mc/logo-01-white.png" alt="" />

                        <p style={styles.fCont2_text}>Nuestro proposito es traerte los mejores instrumentos musicales, de las mejores marcas al mejor
                            precio</p>
                    </div>
                </div>

                <div className="footer_cont-3" style={styles.fCont3}>

                    <div className="footer-cont-3p1">
                        <h4 style={styles.fCont3h4}>Servicio al cliente</h4>
                        <ul style={styles.fCont3_ul}>
                            <li><a style={styles.fCont3_a} href="">Productos</a></li>
                            <li><a style={styles.fCont3_a} href="">Nosotros</a></li>
                            <li><a style={styles.fCont3_a} href="">Contacto</a></li>
                            <li><a style={styles.fCont3_a} href="">Mi cuenta</a></li>

                        </ul>
                    </div>

                    <div className="footer-cont-3p2">
                        <h4 style={styles.fCont3h4}>DX System Store</h4>
                        <ul style={styles.fCont3_ul}>
                            <li><a style={styles.fCont3_a} href="">Productos</a></li>
                            <li><a style={styles.fCont3_a} href="">Nosotros</a></li>
                            <li><a style={styles.fCont3_a} href="">Contacto</a></li>
                            <li><a style={styles.fCont3_a} href="">Mi cuenta</a></li>

                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <p style={styles.fCont4}> © 2022 daleal Instruments  todos los derechos reservados</p>
            </div>
        </footer>
    )
}


//Estilos CSS
const styles = {
    fCont1: {
        width: "100%",
        backgroundColor: '#616161',
        color: 'white',
        padding: '14px 0',
        fontWeight: '300',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    fCont1_img_cont: {
        display: 'flex',
        gap: '30px',
    },

    fCont1_img: {
        width: '32px',

    },

    //-----------------------------------------------//

    fCont2_3: {
        width: "100%",
        height:'130px',
        backgroundColor: '#131313',
        color: 'white',
        padding: '40px 0',
        fontWeight: '300',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '70px',
    },

    fCont2: {
        width: "400px",
        backgroundColor: '#131313',
        color: 'white',
        fontWeight: '400',
        fontSize: '14px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
    },

    fCont2_img:{
        width: '190px',
    },

    fCont2_text:{
        textAlign: 'center',
    },

    fCont3: {
        backgroundColor: '#131313',
        color: 'white',
        fontWeight: '400',
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '40px',
    },

    
    fCont3_ul: {
        backgroundColor: '#131313',
        color: 'white',
        fontWeight: '400',
        fontSize: '14px',
    },

    fCont3_a: {
        backgroundColor: '#131313',
        color: 'white',
        fontWeight: '400',
        fontSize: '13px',
    },

    fCont3h4: {
        marginBottom: '7px',
        fontSize: '16px',
    },

    fCont4: {
        height: '52px',
        backgroundColor: 'black',
        color: 'white',
        fontSize: '15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
}
export default Footer