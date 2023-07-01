import React from 'react';
import { NavLink } from 'react-router-dom';
// const source = "https://www.multirecruit.com/wp-content/uploads/2022/05/Skills-needed-to-be-a-web-Developer.png";
// const source1 = "https://igrowth.ch/wp-content/uploads/2021/07/webdev.png";

const Common = (props) => {

    return (
        <>
            <section id='header' className='d-flex align-items-center'>
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                                    <h1 className='brand-title'>{props.name} <strong className='brand-name'>Gabani</strong></h1>
                                    <h2 className='my-3'>
                                        we have very telented team. and provide best result as possible
                                    </h2>
                                    <div className='mt-3'>
                                        <NavLink to={props.visit} className="btn-get-started">Go Started</NavLink>
                                    </div>
                                </div>

                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img src={props.imgsrc} className='img-fluid animated' alt='home image' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Common;
