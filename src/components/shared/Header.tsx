
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import "../../styles/header.css";

import { useEffect, useState } from "react";
import { HeaderProps, NavbarItem } from "../../interface/interface.types";
import Drawer from "./Drawer";
import LinkPath from "./LinkPath";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";


//Navbar List
export const NavbarList: NavbarItem[] = [
  {
    name: "Platform",
    submenu: true,
    titledescription: "Expert guidance to help you get the most from your data",
    submenudata: [
      {
        logo: <FaRegArrowAltCircleRight />,
        title: "Data Collection",
        description: "mParticle Joins Elite Ranks with AWS Advertising and Marketing Technology Competency",
      },
      {
        logo: <FaRegArrowAltCircleRight />,
        title: "Data Quality",
        description: "mParticle Joins Elite Ranks with AWS Advertising and Marketing Technology Competency",
      },
      {
        logo: <FaRegArrowAltCircleRight />,
        title: "Data Governance",
        description: "mParticle Joins Elite Ranks with AWS Advertising and Marketing Technology Competency",
      },
      {
        logo: <FaRegArrowAltCircleRight />,
        title: "Data Driven",
        description: "mParticle Joins Elite Ranks with AWS Advertising and Marketing Technology Competency",
      },
      {
        logo: <FaRegArrowAltCircleRight />,
        title: "Cortex",
        description: "mParticle Joins Elite Ranks with AWS Advertising and Marketing Technology Competency",
      },
    ]
  },
  {
    name: "Solution",
    submenu: true,
    titledescription: "Expert guidance to help you get the most from your data",
    submenudata: [
      {
        title: "By Use Case",
        descriptionlist: [
          {
            list: "Real-time customer data pipeline"
          },
          {
            list: "Real-time customer data pipeline"
          },
          {
            list: "Real-time customer data pipeline"
          }
        ],
      },
      {
        title: "By Verticle",
        descriptionlist: [
          {
            list: "Retailer"
          },
          {
            list: "Real-time customer data pipeline"
          },
          {
            list: "Real-time customer data pipeline"
          }
        ],
      },
      {
        title: "By Role",
        descriptionlist: [
          {
            list: "Developer"
          },
          {
            list: "Media Finance"
          },
          {
            list: "Manager"
          }
        ],
      },

    ]
  },
  {
    name: "Pricing",
    submenu: false,
  },
  {
    name: "Partners",
    submenu: false,
  },
  {
    name: "Docs",
    submenu: false,
  },
  {
    name: "Learn",
    submenu: true,
    titledescription: "Expert guidance to help you get the most from your data",
    submenudata: [
      {
        logo: <FaRegArrowAltCircleRight />,
        title: "Blogs",
        description: "mParticle Joins Elite Ranks with AWS Advertising and Marketing Technology Competency",
      },
      {
        logo: <FaRegArrowAltCircleRight />,
        title: "Resources",
        description: "mParticle Joins Elite Ranks with AWS Advertising and Marketing Technology Competency",
      },
      {
        logo: <FaRegArrowAltCircleRight />,
        title: "Customer Services",
        description: "mParticle Joins Elite Ranks with AWS Advertising and Marketing Technology Competency",
      },

    ]
  },

]

const Header = ({ islandingpage }: HeaderProps) => {
  const [isHovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isNavbarHovered, setNavbarHovered] = useState<boolean>(false);
  const [isLoginHovered, setLoginHovered] = useState<boolean>(false)
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState<boolean>(false)
  const pathname = useLocation().pathname;

  //Responsive
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setOpen(false);
    }
  }, [isMobile])

  //Scroll
  const sticky = useScroll({ offsetStart: 200, offsetEnd: Infinity });
  const stickyManagementBar = useScroll({ offsetStart: 1100, offsetEnd: 3500 });

  useEffect(() => {
    const handleWatchScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };

    document.addEventListener("scroll", handleWatchScroll);

    return () => {
      document.removeEventListener("scroll", handleWatchScroll);
    };
  }, []);

  return (
    <>
      <header className={` ${islandingpage ? "border-2 border-backgroundcolor" : "border-none"} w-full relative flex  flex-col ${islandingpage ? "border-2 h-[100vh] " : "h-[90vh]"} `}>

        {/* // Landing Page Video  */}
        {
          islandingpage ? (
            <video autoPlay loop muted playsInline className="back-video ">
              <source src="/video/video.webm" />
            </video>
          ) : null
        }

        {/* Navbar  */}
        <nav className={` ${isMobile ? "px-[20px]" : "px-[60px]"} ${sticky ? "nav-sticky " : "relative"} w-full h-[76px] ${islandingpage ? "hover:bg-white text-white hover:text-black " : "text-black bg-white"}   transition-all duration-200 ease-in-out`}
          onMouseEnter={() => setNavbarHovered(true)}
          onMouseLeave={() => setNavbarHovered(false)}
        >
          <div className="w-[calc(100% - 60px)] h-[100%] flex items-center justify-between xl:px-[1%]    ">

            <div className="flex   h-[100%] items-center font-bold cursor-pointer w-[100%] justify-between xl:w-[60%]  leading-10   ">
              <Link to={"/"}>
                <div className="flex">
                  <svg
                    width="40px"
                    height="36px"
                    viewBox="0 0 50 36"
                  >
                    <polygon id="Fill-1" fill={`${sticky || !islandingpage || isNavbarHovered ? "#1A1A1A" : "#ffffff"}`} points="28.1767956 26.7676389 28.1767956 35.6906077 42.2651934 26.7676389 42.2651934 17.8453039"></polygon>
                    <polygon id="Fill-2" fill={`${sticky || !islandingpage || isNavbarHovered ? "#1A1A1A" : "#ffffff"}`} points="14.0883978 26.7676389 14.0883978 35.6906077 28.1767956 26.7676389 28.1767956 17.8453039"></polygon>
                    <polygon id="Fill-3" fill={`${sticky || !islandingpage || isNavbarHovered ? "#1A1A1A" : "#ffffff"}`} points="0 26.7676389 0 35.6906077 14.0883978 26.7676389 14.0883978 17.8453039"></polygon>
                    <polygon id="Fill-4" fill={`${sticky || !islandingpage || isNavbarHovered ? "#1A1A1A" : "#ffffff"}`} points="42.2651934 0 28.1767956 8.92265193 28.1767956 17.8453039 42.2651934 8.92265193"></polygon>
                    <polygon id="Fill-5" fill={`${sticky || !islandingpage || isNavbarHovered ? "#1A1A1A" : "#ffffff"}`} points="28.1767956 0 14.0883978 8.92265193 14.0883978 17.8453039 28.1767956 8.92265193"></polygon>
                    <polygon id="Fill-6" fill={`${sticky || !islandingpage || isNavbarHovered ? "#1A1A1A" : "#ffffff"}`} points="14.0883978 0 0 8.92265193 0 17.8453039 14.0883978 8.92265193"></polygon>
                  </svg>


                  <h1 className="text-2xl ml-2">mparticle</h1>
                </div>
              </Link>


              {/* Desktop Nabar  */}
              <ul className="hidden xl:flex gap-5   h-[100%] items-center pl-10 ">
                {
                  NavbarList.map((elem, index) => {
                    return (
                      <LinkPath key={index} submenu={elem.submenu} pathname={pathname} name={elem.name} description={elem.titledescription} submenudata={elem.submenudata} setHovered={setHovered} />
                    )
                  })
                }
              </ul>

              {/* Mobile Navbar  */}
              <div className="flex items-center gap-2 xl:hidden ">
                <IoSearchOutline className="text-xl" />
                <button onClick={() => setOpen((prev) => !prev)}>  < GiHamburgerMenu className="text-xl relative " /></button>
              </div>
            </div>

            {/* Desktop Nabar  */}
            <div className=" hidden xl:flex w-[40%]  gap-1 items-center justify-end">
              <IoSearchOutline className="text-xl" />

              <ul className="flex gap-5 h-[100%] items-center pl-10 font-bold leading-10 ">
                <li className="relative" onMouseEnter={() => setLoginHovered(true)}
                  onMouseLeave={() => setLoginHovered(false)} >
                  <Link to={"/"} className={`${pathname === "/"
                    ? "mr-5    text-red"
                    : "mr-5 hover:text-gray-900"
                    } transition-all duration-300 hover:text-purple flex gap-2 items-center`}>Login {isLoginHovered? <MdOutlineKeyboardArrowUp className="text-lg" /> : <MdOutlineKeyboardArrowDown className="text-lg" />} </Link>

                    <div  className={`absolute  right-0 ${isLoginHovered ? "block" : "hidden"} bg-white p-2 shadow-2xl rounded-xl  w-[10rem]`}>
                      <div className="flex flex-col items-center ">
                      <Link to={"/"} className="text-medium font-bold text-[#2b2b2b]  hover:text-black">Customer</Link>
                      <Link to={"/"} className="text-medium font-bold text-[#2b2b2b] hover:text-black">USA-Trial</Link>
                      <Link to={"/"} className="text-medium font-bold  text-[#2b2b2b]hover:text-black">USA-Trial</Link>
                      </div>
                    </div>
                </li>
                <li >
                  <Link to={"/"} className={`${pathname === "/"
                    ? "mr-5    text-red"
                    : "mr-5 hover:text-gray-900"
                    } transition-all duration-300 hover:text-purple`}>Contact Us</Link>
                </li>

              </ul>

              {
                pathname === "/" ? (
                  <Link to={"/secondpage"} className={` px-[20px] py-[11px]  rounded-2xl text-sm font-bold hover:bg-[#171717] hover:text-white 
                      ${isNavbarHovered ? "bg-black text-white" : "bg-white text-black"}
                      ${sticky ? "button-sticky" : ""}
                      `}>Explore Second Page</Link>
                ) : (
                  <Link to={"/"} className={` px-[20px] py-[11px]  rounded-2xl text-sm font-bold bg-black text-white hover:bg-[#171717] hover:text-white  `}>Explore First Page Demo</Link>
                )
              }
            </div>
          </div>
        </nav>

        {/* Management Navbar  */}
        {
          islandingpage ? (<nav className={`${stickyManagementBar ? "navmanagement-sticky " : "hidden"} bg-[#262626] max-lg:hidden  ${isHovered ? "hidden" : ""} `}>
            <div className="mx-auto w-[100%]  lg:w-[50%] h-[100%]">
              <ul className="flex gap-8 h-[100%] items-center justify-center cursor-pointer">
                <li className={`${stickyManagementBar && (scrollY > 1100 && scrollY < 1850) ? "text-purple underline" : "text-white"}`}>
                  <a href="#Marketers">For Marketers</a>
                </li>
                <li className={`${stickyManagementBar && (scrollY > 1850 && scrollY < 2800) ? "text-purple underline" : "text-white"}`}> <a href="#Product Managers">For  Product Manager </a>
                </li>
                <li className={`${stickyManagementBar && (scrollY > 2800 && scrollY < 3500) ? "text-purple underline" : "text-white"}`}> <a href="#Developers">For Developers </a>
                </li>
              </ul>
            </div>

          </nav>) : null
        }

        {/* header Content  */}
        {
          islandingpage ? (
            <div className={` ${isMobile ? 'flex-col px-[20px] gap-2 absolute' : 'static flex-row px-[30px] lg:px-[120px] gap-0'} w-[95%] flex justify-evenly mt-8 top-10 `}>

              <div className={`${isMobile ? "w-[100%]" : "w-[50%]"}   flex flex-col  gap-10  `}>
                <h1 className={`${isMobile ? "w-[300px] text-[32px] leading-10" : "w-[450px] text-[46px]  lg:text-[58px] leading-none"}    font-extrabold text-white   `}>Amplify your customer data <span className="backgroundcolor"> with AI</span></h1>

                <p className="max-w-[450px] text-lg text-white font-medium md:font-bold">Combine real-time data quality and governance protections with AI-powered insights and predictions. Only with the mParticle Customer Data Platform.</p>

                <div className="flex flex-col w-[100%] md:w-[150px] gap-2 items-start  justify-center ">
                  <button className="bg-white text-black px-[20px] py-[12px]  rounded-3xl text-md font-bold  hover:bg-[#dde6f7] transition-all duration-200 ease-in-out w-[100%] ">Explore demo</button>
                  <Link className="text-medium font-bold underline text-white hover:text-purple w-[100%] text-center" to={"/"}> Download guide</Link>
                </div>
              </div>

              <div className="w-[100%] md:w-[50%]  pr-20 flex items-center  ">
                <img className="object-cover max-sm:w-[100%] max-md:w-[70%]" src="https://images.prismic.io/mparticle/8cc05031-4c74-42c5-9d2c-7fb7444dfda2_ai-unified-desktop.png?auto=compress,format" alt="hero section" loading="lazy" />
              </div>

            </div>
          ) : (
            <div className={` ${isMobile ? ' px-[20px] gap-5 absolute' : 'static px-[30px] lg:px-[120px] gap-0'} w-[95%] flex justify-evenly mt-10 top-20 flex-col gap-10 py-10 `}>

              <div>
                <span className="text-purple font-bold text-sm tracking-wide">INTEGRATIONS</span>
              </div>

              <div className={`w-[100%]   flex flex-col  gap-10 `}>
                <h1 className={`${isMobile ? " text-[32px] leading-10" : " text-[46px]  lg:text-[74px] leading-none"}    font-[900] text-black   `}>Connect your data anywhere</h1>
                <p className="max-w-[560px] text-lg text-[#7c7b7b] font-medium">Connect your customer data to the leading marketing, analytics, and data warehousing solutions with just a few clicks.</p>
              </div>
            </div>
          )
        }
      </header >

      {/* Drawer  */}
      < Drawer open={open} setOpen={setOpen} setHovered={setHovered} />

    </>
  );

};


//ScrollBar Function
interface ScrollProps {
  offsetStart: number;
  offsetEnd: number;
}
const useScroll = ({ offsetStart, offsetEnd }: ScrollProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const show = scrollY > offsetStart && scrollY < offsetEnd;
      setIsScrolled(show);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [offsetStart, offsetEnd]);

  return isScrolled;
};

export default Header;
