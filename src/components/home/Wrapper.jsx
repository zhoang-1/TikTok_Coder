import React from 'react';
// import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { navbar } from '../../utils/navbar';
// import { slideShow } from '../../utils/navbar';

function Wrapper() {
    return (
        <div className="body border-box mx-0 mt-auto">
            <div className="container flex flex-row border-none">
                <div className="navbar  text-[18px] leading-[24px] font-semibold">
                    <ul>
                        {navbar.map((main, i) => (
                            <li className="">
                                <Link to={`${main.link}`} key={i}>
                                    <FontAwesomeIcon icon={main.icon} className="text-[20px] mr-[9px]" />
                                    {main.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="slideshow">
                    <div className="videosTiktok"></div>
                </div>
            </div>
        </div>
    );
}

export default Wrapper;
