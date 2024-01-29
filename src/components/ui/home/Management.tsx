import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DataProps } from "../../../interface/interface.types";


const Management = ({ data }: { data: DataProps }) => {
    return (
        <>
            {
                data && data.map((elem: any, index: number) => {
                    return (
                        <section id={elem.ManagerName} key={index} className="bg-backgroundcolor  max-sm:px-[30px] px-[60px] pt-16  xl:px-[120px] py-[20px] ">
                            <div className={`flex w-[calc(100% - 120px)] ${(index + 1) % 2 === 0 ? "flex-col-reverse lg:flex-row-reverse" : "flex-col-reverse lg:flex-row"}   gap-5 `}>
                                <div className="w-[100%] lg:w-[50%] text-white flex flex-col items-start">
                                    <div className="w-[100%] flex flex-col items-start  gap-8">
                                        <h1 className="max-w-[495px] max-sm:text-[38px] text-[48px] font-extrabold leading-12"><span className="text-purple">{elem.ManagerName}</span> {elem.title}</h1>
                                        <p className="max-w-[430px] text-[14px] sm:text-[20px] text-[#bbbbbb]">{elem.description}</p>
                                        <div className=" flex items-center gap-2 hover:gap-4 transition-all duration-200 ease-in-out ">
                                            <Link className="text-lg font-bold text-purple  " to={"/"}>{elem.link}</Link>
                                            <FaArrowRight className="text-sm font-light text-purple" />
                                        </div>
                                    </div>

                                    <div className="grid max-sm:grid-cols-1  grid-cols-2 gap-4">
                                        {
                                            elem.marketerArray.map((elem: any, index: number) => {
                                                return (
                                                    <div key={index} className="p-3 flex item-start flex-col ">
                                                        <p className="text-lg pb-2 font-bold text-white ">{elem.listtitle}</p>
                                                        <p className="text-md font-medium text-[#bbbbbb] ">{elem.listdescription}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                                <div className="w-[100%]  lg:w-[50%] h-[100%] object-cover">
                                    <img className="object-cover w-[100%]" src={elem.image} alt="advertise image" loading="lazy" />
                                </div>
                            </div>
                        </section>
                    )
                })
            }
        </>


    )
}

export default Management