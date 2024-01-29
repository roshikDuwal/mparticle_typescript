import { useState } from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { LinkPathProps } from '../../interface/interface.types';
import "../../styles/animation.css"

const LinkPath = ({ pathname, name, submenu, description, submenudata, setHovered }: LinkPathProps) => {
  const [localHovered, setLocalHovered] = useState(false);

  const handleMouseEnter = () => {
    setLocalHovered(true);
    setHovered(true);

  };

  const handleContentMouseEnter = () => {
    setLocalHovered(true);
    setHovered(true);

  };

  const handleMouseLeave = () => {
    setLocalHovered(false);
    setHovered(false);

  };

  const handleContentMouseLeave = () => {
    setLocalHovered(false);
    setHovered(false);
  };


  return (
    <>
      {
        submenu ? (
          <>
            <li className={` transition-all duration-300 hover:text-purple flex items-center gap-1 `}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {name}  {localHovered ? <MdOutlineKeyboardArrowUp className="text-lg" /> : <MdOutlineKeyboardArrowDown className="text-lg" />}
            </li>

            {/* //Mega Menu  */}
            {
              localHovered ? (
                <div className="absolute top-[80%]   w-[100%] left-0 bg-white h-[23rem] text-black px-[120px] py-[30px] flex z-2  "
                  onMouseEnter={handleContentMouseEnter}
                  onMouseLeave={handleContentMouseLeave}
                >
                  <div className=" flex flex-col w-[20%] items-start justify-start  p-5 gap-3" data-aos="fade-right-with-movement" >
                    <h1 className="text-3xl font-extrabold">{name}</h1>
                    <p className="leading-5 font-medium text-sm">{description}</p>
                  </div>

                  <div className='flex flex-col  w-[100%]'>
                    <div className="grid grid-cols-3 gap-5 w-[100%] px-[30px]">
                      {submenudata?.map((elem, index) => (
                        <div key={index} className="flex">
                          {name.toLowerCase() === "solution" ? (
                            <>
                              <div data-aos="fade-right" data-aos-delay={`${index * 200}`} className="flex flex-col mt-10">
                                <h1 className="text-lg font-bold text-purple transition-all 0.3s ease-in-out">{elem.title}</h1>
                                <div className='flex flex-col gap-2'>
                                  {
                                    elem.descriptionlist && elem.descriptionlist.map((elem, index) => {
                                      return (
                                        <p key={index} className="leading-5  font-medium text-sm">{elem.list}</p>
                                      )
                                    })
                                  }
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="w-[10%] pt-[12px] text-xl text-purple" data-aos="fade-right" data-aos-delay={`${index * 100}`}>
                                {elem.logo}
                              </div>
                              <div className="flex w-[90%] flex-col" data-aos="fade-right" data-aos-delay={`${index * 100}`}>
                                <h1 className="text-md font-extrabold hover:text-purple transition-all 0.3s ease-in-out">{elem.title}</h1>
                                <p className="leading-5 font-medium text-sm">{elem.description}</p>
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>

                    {
                      name.toLowerCase() === "solution" ? null : name.toLowerCase() === "learn" ? (
                        <>
                          <div className='flex flex-col'>
                            <div className='border-t-2 mt-5'></div>
                            <div className='flex flex-col gap-3 '>
                              <p className='text-purple text-md' data-aos="fade-right" >FROM THE BLOG</p>
                              <p className="text-sm font-medium hover:font-extrabold" data-aos="fade-right" data-aos-delay="100">Turn customer journey insights into action with Indicative Segment Activation →</p>
                              <p className="text-sm font-medium hover:font-extrabold  " data-aos="fade-right" data-aos-delay="200">AI and Data Privacy: How to ensure your AI programs are safe, responsible, and effective →</p>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className='flex flex-col'>
                            <div className='border-t-2 mt-5'></div>
                            <div className='flex gap-3 items-center' data-aos="fade-right">
                              <FaRegArrowAltCircleRight className='text-purple' />
                              <h1 className="text-md font-extrabold  ">Integrations</h1>
                            </div>
                          </div>
                        </>
                      )
                    }
                  </div>
                </div>
              ) : null
            }
          </>
        ) : (
          <li >
            <Link to={"/"} className={`${pathname === "/"
              ? "mr-5    text-red"
              : "mr-5 hover:text-gray-900"
              } transition-all duration-300 hover:text-purple`}>{name}</Link>
          </li>
        )
      }
    </>
  )
}

export default LinkPath