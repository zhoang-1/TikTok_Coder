import React from 'react';
// import { useState } from 'react';
import SlideShow from './SlideShow';
import './Wrapper.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { navbar } from '../../utils/navbar';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

// import { slideShow } from '../../utils/navbar';

function Wrapper() {
    return (
        <div className="navbar w-[15%]    ">
            <div className="navbar-toolbar border-box text-[18px] leading-[24px] font-semibold mb-[8px]">
                <ul>
                    {navbar.map((main) => (
                        <li className="border-box flex flex-row items-center rounded-[4px] p-[8px] hover:cursor-pointer hover:bg-slate-100 font-serif">
                            <Link to={`${main.link}`}>
                                <FontAwesomeIcon icon={main.icon} className=" border-box text-[20px] mr-[10px] " />
                                {main.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-note border-box px-[8px] pt-[20px] pb-[26px] relative ">
                {/* before:content-[''] before:absolute h-[1px] before:l-[8px] before:r-[8px] before:t-0 before:scale-x-50 before:bg-[rgba(22, 24, 35, .12)]  */}
                <div className="note">
                    <p>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
                </div>
                <div className="btn-login border-box  border-[1px] border-solid border-red-600 rounded-[12px] bg-white mt-[20px] hover:bg-[#fff3f5]">
                    <div className=" px-[10px] p-[10px]">
                        <button className=" border-box w-[100%] flex justify-center font-semibold text-lg text-red-700  ">
                            Đăng Nhập
                        </button>
                    </div>
                </div>
            </div>
            <div className="footer border-box px-[8px] pt-[20px] pb-[26px]">
                <div className="CreateEffect mb-[30px]">
                    <div className="Effect block flex flex-row justify-center items-center">
                        <img
                            className="h-[52px] block rounded-[12px]"
                            src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/045b2fc7c278b9a30dd0.png"
                            alt="create Effect"
                        />
                        <div className="absolute  px-[10px] p-[10px] flex justify-center font-semibold text-lg text-black items-center">
                            <FontAwesomeIcon icon={faIgloo} className="" />
                            <span className="ml-[8px]">Create Effect</span>
                        </div>
                    </div>
                </div>
                <div className="introduction">
                    <Link to="">Giới Thiệu</Link>
                    <Link to="">Bảng Tin</Link>
                    <Link to="">Liên Hệ</Link>
                    <Link to="">Sự Nghiệp</Link>
                </div>
                <div className="tiktok-develop">
                    <Link to="">TikTok for Good</Link>
                    <Link to="">Quảng cáo</Link>
                    <Link to="">Developers</Link>
                    <Link to="">Minh bạch</Link>
                    <Link to="">TikTok Rewards</Link>
                    <Link to="">TikTok Embeds</Link>
                </div>
                <div className="tiktok-help">
                    <Link to="">TikTok Embeds</Link>
                    <Link to="">TikTok Embeds</Link>
                    <Link to="">TikTok Embeds</Link>
                    <Link to="">TikTok Embeds</Link>
                    <Link to="">TikTok Embeds</Link>
                    <Link to="">TikTok Embeds</Link>
                </div>
                <div className="more">
                    <span>Thêm</span>
                </div>
                <span>"© " "2023 TikTok"</span>
            </div>
        </div>
    );
}

export default Wrapper;
