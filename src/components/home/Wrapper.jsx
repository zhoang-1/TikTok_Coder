import React from 'react';
// import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { navbar } from '../../utils/navbar';
// import { slideShow } from '../../utils/navbar';

function Wrapper() {
    return (
        <div className="body border-box mx-0 mt-auto">
            <div className="container flex flex-row border-none pl-[8px] pt-[20px] pt-[26px]">
                <div className="navbar w-[15%]    ">
                    <div className="navbar-toolbar border-box text-[18px] leading-[24px] font-semibold mb-[8px]">
                        <ul>
                            {navbar.map((main) => (
                                <li className="border-box items-center rounded-[4px] p-[8px] ">
                                    <Link to={`${main.link}`}>
                                        <FontAwesomeIcon
                                            icon={main.icon}
                                            className=" border-box text-[20px] mr-[10px] "
                                        />
                                        {main.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="navbar-note border-box px-[8px] pt-[20px] pb-[26px] ">
                        {/* before:content-['-'] before:absolute h-[1px] before:l-[8px] before:r-[8px] before:bg-[rgba(22, 24, 35, .12)]  */}
                        <div className="note">
                            <p>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
                        </div>
                        <div className="btn-login border-solid rounded bg-[#fe2c55] text-red  ">
                            <div className="login border-box items-center px-[10px]">
                                <button className="text-red  ">Đăng Nhập</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slideshow w-[85%]">
                    <div className="videosTiktok">helo may thang nhoc</div>
                </div>
            </div>
        </div>
    );
}

export default Wrapper;
