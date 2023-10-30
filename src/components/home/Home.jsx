import React from 'react';
import Header from '../header/Header';
import Wrapper from './Wrapper';
import SlideShow from './SlideShow';
const Home = () => {
    return (
        <div>
            <Header />
            <div className="body border-box mx-0 mt-auto">
                <div className="container flex flex-row border-none pl-[8px] pt-[20px] pt-[26px]">
                    <Wrapper />
                    <SlideShow />
                </div>
            </div>
        </div>
    );
};

export default Home;
