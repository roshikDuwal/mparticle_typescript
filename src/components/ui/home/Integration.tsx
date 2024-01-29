
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { IntegrationDataProps } from '../../../interface/interface.types';


const Integration = ({ data }: { data: IntegrationDataProps }) => {
    return (
        <>
            {
                data && data.map((elem, index) => {
                    return (
                        <section key={index} className={`${elem.subname.toLowerCase() === "integrations" ? "bg-[#f2f2f2]" : "bg-white"} max-sm:px-[30px] px-[60px] pt-16  xl:px-[120px] py-[40px] `}>

                            <div className={`flex w-[calc(100% - 120px)] flex-col lg:flex-row   gap-5 `}>

                                <div className="w-[100%] lg:w-[50%] text-black flex flex-col items-start gap-5">
                                    <div>
                                        <span className="text-black font-extrabold text-sm tracking-wide">{elem.subname.toUpperCase()}</span>
                                    </div>
                                    <div className="w-[100%] flex flex-col items-start  gap-8">
                                        <h1 className="max-w-[495px] max-sm:text-[38px] text-[48px] font-extrabold leading-12">{elem.title}</h1>

                                        <p className="max-w-[430px] text-[14px] sm:text-[20px] text-black">{elem.description}</p>
                                        <div className=" flex items-center gap-2 hover:gap-4 transition-all duration-200 ease-in-out ">
                                            <Link className="text-lg font-bold text-purple  " to={"/"}>{elem.link}</Link>
                                            <FaArrowRight className="text-sm font-light text-purple" />
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[100%]  lg:w-[50%] h-[100%] object-cover">
                                    <div className={`${elem.subname.toLowerCase() === "integrations" ? "sm:grid-cols-2 md:grid-cols-3" : "grid-cols-2"} grid max-sm:grid-cols-1   gap-6`}>
                                        {
                                            elem.subname.toLowerCase() === "integrations" ? (

                                                elem.imageArray.map((elem, index) => {
                                                    return (
                                                        <div key={index} className="px-5 py-3 h-[102px] w-[165px] bg-white rounded-lg flex item-center justify-center hover:shadow-3xl  transform hover:scale-110 transition-transform duration-300 ease-in-out ">
                                                            <img src={elem.image} alt="integration image" loading='lazy' />
                                                        </div>
                                                    )
                                                })

                                            ) : (

                                                elem.imageArray.map((elem, index) => {
                                                    return (
                                                        <div key={index} className="p-3 flex item-start flex-col ">
                                                            <div>
                                                                <img src={elem.image} alt="integration image" loading='lazy' />
                                                            </div>
                                                            <p className="text-lg pb-2 font-extrabold text-black ">{elem.listtitle}</p>
                                                            <p className="text-md font-sm text-[#727171] ">{elem.listdescription}</p>
                                                        </div>
                                                    )
                                                })


                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                })
            }
        </>

    )
}

export default Integration