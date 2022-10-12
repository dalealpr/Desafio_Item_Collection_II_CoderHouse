import React from 'react';
//Import Components


const Nosotros = () => {
    return (
        <div className='nosotros-container'>
            <div style={styles.imgTitle}>
                <h2 style={styles.title}>QUIENES SOMOS</h2>
            </div>

            <div style={styles.contPr}>
                <div style={styles.contOne}>
                    <p style={styles.prf}>daleal Instruments es una empresa chilena, que comenzó sus operaciones en Enero del año 2021,

                        transformándose durante este tiempo, en una de las la mayores cadena de tiendas especialista en instrumentos musicales del país.<br></br><br></br>

                        Empezamos nuestra historia enfocados en el rubro de las guitarras, pero crecimos sin parar hasta lograr un mix inigualable de instrumentos musicales, para todo publico.<br></br><br></br>

                        Tenemos opciones en guitarras, bajos, baterias y teclados.</p>
                </div>

                <div style={styles.contTwo}>
                    <div style={styles.tiendas}>
                        <p>12</p>
                        <p>Tiendas</p>
                    </div>
                    <div style={styles.colab}>
                        <p>+300</p>
                        <p>Colaboradores</p>
                    </div>
                </div>

            </div>

        </div>
    )
}



//ESTILOS CSS
const styles = {
    imgTitle:{
        width:'100%',
        height:'400px',
        background: 'url("https://i.ibb.co/jrmKZr9/fondo-nosotros.jpg")',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title:{
        fontSize: '70px',
        fontWeight: '700',
        color: 'white',
        borderBottom: '3px solid #F4D03F',
    },

    contPr:{
        width:'100%',
        height:'450px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    contOne:{
        width:'50%',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
    },

    contTwo:{
        width:'50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    prf:{
        width:'60%',
        paddingRight: '40px',
        fontSize: '19px',
        fontWeight: '300',

    },

    tiendas:{
        width:'250px',
        height:'200px',
        fontSize: '30px',
        fontWeight: '300',
        backgroundColor: '#dfb800',
        marginRight: '30px',
        color: 'white',
        fontWeight: '700',
        borderRadius: '10px',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },

    colab:{
        width:'250px',
        height:'200px',
        fontSize: '30px',
        fontWeight: '300',
        backgroundColor: '#dfb800',
        color: 'white',
        fontWeight: '700',
        borderRadius: '10px',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
}


export default Nosotros