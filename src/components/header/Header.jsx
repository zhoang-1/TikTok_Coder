import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    return (
        <div className='header box-border px-[20px] mt-[10px] drop-shadow-[0_1px_0_1px_rgba(0, 0, 0, 0.12)] z-[1]  '>
            <div className="navbar  w-[100%] h-[60px]  leading-4  items-center">
                <div className="body flex flex-row flex-nowrap  justify-between text-center ">

                    <div className="logo flex min-w-[300px]  m-0 pl-0 ">
                        <a href="/">
                            <img src="https://pngimg.com/uploads/tiktok/tiktok_PNG29.png" alt="Logo" className='w-[118px] h-[38px]' />
                        </a>

                    </div>

                    <div className="search box-border w-[30%] h-[46px] items-center p-2 border-2 rounded-3xl border-slate-200 border-solid hover:border-slate-400 bg-[#f1f1f2]">
                        <form action="" role="search" className=' flex flex-row justify-between pr-[5px] '>
                            <input type="search" placeholder='Search' className=' block border-none outline-none  w-[80%] mt-[2px] bg-transparent items-center ' />
                            <span className="text-[20px] item-center ml-[40px]">|</span>
                            <button type='submit' className='  border-none items-center text-[20px] p-[12px] -ml-[12px] -mr-[13px] -my-[10px]  bg-transparent hover:text-black  '>
                                <span className=" "><i class="fa-solid fa-magnifying-glass" ></i></span>

                            </button>
                        </form>
                    </div>

                    <div className="settingBox box-border  w-[20%]  content-center  ">
                        <div className="block  items-center not-italic text-base font-semibold text-center ">
                            <div className="update float-left border-[1px] border-inherit border-solid p-[8px] ">
                                <Link to="" className="upvideo ">
                                    <i class="fa-solid fa-plus"></i>
                                    <span className='ml-[8px]'>Tải Lên</span>
                                </Link>
                            </div>
                            <div className="login float-left min-w-[100px] ml-[16px] p-[8px] border-none rounded bg-[#fe2c55] text-white  ">
                                <Link to="" className=' px-[8px] py-[8px] '>
                                    <span >Đăng Nhập</span>
                                </Link>
                            </div>

                            <div className="Setting float-left ml-[20px] ">
                                <div className="cham  p-[7px] text-xl font-normal">
                                    <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </div >
    )
}

export default Header