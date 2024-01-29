import { SwipeableDrawer } from '@mui/material';
import { IoMdClose } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { NavbarList } from './Header';
import React, { SetStateAction, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';


interface DrawerProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setHovered: React.Dispatch<SetStateAction<boolean>>;
}

const Drawer = ({ open, setOpen, setHovered }: DrawerProps) => {
    const pathname = useLocation().pathname;
    const [localHovered, setLocalHovered] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setLocalHovered(true);
        setHovered(true);
        setHoveredItem(index);
    };

    const handleContentMouseEnter = () => {

        setLocalHovered(true);
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setLocalHovered(false);
            setHovered(false);
            setHoveredItem(null);
        }, 300)


    };

    const handleContentMouseLeave = () => {
        setLocalHovered(false);
        setHovered(false);

    };

    return (
        <SwipeableDrawer open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)} anchor="right">
            <div className="z-10 w-[100vw] font-bold cursor-pointer bg-white p-5 px-10 h-[100%]">
                <div className="w-full flex justify-between">
                    <div className="flex   h-[100%] items-center font-bold cursor-pointer w-[100%] justify-between xl:w-[60%]  leading-10   ">
                        <Link to={"/"}>
                            <div className="flex">
                                <svg
                                    width="40px"
                                    height="36px"
                                    viewBox="0 0 50 36"
                                >
                                    <polygon id="Fill-1" fill="#1A1A1A" points="28.1767956 26.7676389 28.1767956 35.6906077 42.2651934 26.7676389 42.2651934 17.8453039"></polygon>
                                    <polygon id="Fill-2" fill="#1A1A1A" points="14.0883978 26.7676389 14.0883978 35.6906077 28.1767956 26.7676389 28.1767956 17.8453039"></polygon>
                                    <polygon id="Fill-3" fill="#1A1A1A" points="0 26.7676389 0 35.6906077 14.0883978 26.7676389 14.0883978 17.8453039"></polygon>
                                    <polygon id="Fill-4" fill="#1A1A1A" points="42.2651934 0 28.1767956 8.92265193 28.1767956 17.8453039 42.2651934 8.92265193"></polygon>
                                    <polygon id="Fill-5" fill="#1A1A1A" points="28.1767956 0 14.0883978 8.92265193 14.0883978 17.8453039 28.1767956 8.92265193"></polygon>
                                    <polygon id="Fill-6" fill="#1A1A1A" points="14.0883978 0 0 8.92265193 0 17.8453039 14.0883978 8.92265193"></polygon>
                                </svg>


                                <h1 className="text-2xl ml-2">mparticle</h1>
                            </div>
                        </Link>
                    </div>

                    <div className="flex gap-5 items-center">
                        <IoSearchOutline className="text-xl font-extrabold" />
                        <button onClick={() => setOpen(false)}>
                            <IoMdClose className="text-xl relative font-extrabold" />
                        </button>
                    </div>
                </div>

                <div className='flex flex-col gap-4 h-[100%] pt-[3rem] md:px-[2rem]' >
                    {NavbarList.map((elem, index) => (
                        <React.Fragment key={index}>
                            {elem.submenu ? (
                                <li
                                    className={` transition-all duration-300 hover:text-purple font-3xl flex items-center gap-1 list-none relative   `}
                                    onClick={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {elem.name} {localHovered && hoveredItem === index ? <MdOutlineKeyboardArrowUp className="text-lg" /> : <MdOutlineKeyboardArrowDown className="text-lg" />}

                                    {localHovered && hoveredItem === index && (
                                        <div
                                            className="absolute top-6 right-0 bg-white md:px-12 py-8 z-10 text-black   w-[100%]  "
                                            onMouseEnter={handleContentMouseEnter}
                                            onMouseLeave={handleContentMouseLeave}
                                        >
                                            <div className=" bg-white w-[100%] flex flex-col gap-5   ">
                                                {elem.submenudata?.map((subelem, index) => (
                                                    <div key={index} className="flex w-[100%]  ml-[2rem] " data-aos="fade-right" >
                                                        {elem.name && elem.name.toLowerCase() === "solution" ? (
                                                            <>
                                                                <div className="flex flex-col w-[100%]"  data-aos="fade-top" data-aos-delay={`${index * 200}`} >
                                                                    <h1 className="text-lg font-bold text-purple transition-all 0.3s ease-in-out">{subelem.title}</h1>
                                                                    <div className='flex flex-col gap-2'>
                                                                        {
                                                                            subelem.descriptionlist && subelem.descriptionlist.map((elem, index) => {
                                                                                return (
                                                                                    <p key={index} className="leading-5  font-medium text-sm" >{elem.list}</p>
                                                                                )
                                                                            })
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <div className="w-[10%] pt-[12px] text-xl text-purple"  data-aos="fade-top" data-aos-delay={`${index * 200}`}>
                                                                    {subelem.logo}
                                                                </div>
                                                                <div className="flex w-[90%] flex-col"  data-aos="fade-top" data-aos-delay={`${index * 200}`}>
                                                                    <h1 className="text-md font-extrabold hover:text-purple transition-all 0.3s ease-in-out">{subelem.title}</h1>
                                                                    <p className="leading-5 font-medium text-sm">{subelem.description}</p>
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ) : (
                                <li>
                                    <Link
                                        to={'/'}
                                        className={`${pathname === '/' ? 'mr-5 text-red' : 'mr-5 hover:text-gray-900'} transition-all duration-300 hover:text-purple`}
                                    >
                                        {elem.name}
                                    </Link>
                                </li>
                            )}


                        </React.Fragment>
                    ))}

                    <div className=" flex flex-col w-[100%]  gap-3 items-center justify-end   ">

                        <ul className="flex gap-5 h-[100%] items-center pl-10 font-bold leading-10 w-[100%]  ">

                            <li className='w-[100%] flex '  >
                                <Link to={"/"} className="rounded-2xl text-sm font-bold bg-black text-white hover:bg-[#353535] hover:text-white w-[100%] px-[20px] py-[11px] text-center   ">Login</Link>
                            </li>
                        </ul>

                        {
                            pathname === "/" ? (
                                <li className='w-[100%] flex '  >
                                    <Link to={"/secondpage"} className={` w-[100%] px-[20px] py-[11px]  rounded-2xl text-center text-sm font-bold  text-black bg-white border-2  border-black"`}>Explore Second Page Demo</Link>
                                </li>
                            ) : (
                                <li className='w-[100%] flex '  >
                                    <Link to={"/"} className={` w-[100%] px-[20px] py-[11px]  rounded-2xl text-center text-sm font-bold  text-black bg-white border-2  border-black"`}>Explore First Page Demo</Link>
                                </li>
                            )
                        }
                    </div>
                </div>


            </div>
        </SwipeableDrawer>
    );
};

export default Drawer;
