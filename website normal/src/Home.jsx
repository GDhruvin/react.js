import React from 'react';
import { NavLink } from 'react-router-dom';
import Common from './Common';



const Home = () => {

    return (
        <>
            <Common name="Grow your business with"
                visit = "./service"
                btname="Get Started"
                imgsrc={"https://www.multirecruit.com/wp-content/uploads/2022/05/Skills-needed-to-be-a-web-Developer.png"}
            />
        </>
    );
};

export default Home;

