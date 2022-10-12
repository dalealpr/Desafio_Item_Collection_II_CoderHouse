import React from 'react';
//Import Components
import Header from '../header/Header';
import MainIndex from '../mainIndex/MainIndex';


const Home = () => {
    return (
        <div className='home-container'>
            <Header />
            <MainIndex/>
        </div>
    )
}


export default Home