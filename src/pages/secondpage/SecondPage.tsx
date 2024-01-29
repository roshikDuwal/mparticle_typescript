import Header from "../../components/shared/Header"
import { IoSearchOutline } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import AOS from "aos"
import 'aos/dist/aos.css'
import Select from 'react-select';
import ToolTip from "../../components/ui/secondpage/ToolTip";
import { Option } from "../../interface/interface.types";
import { imageArray, options } from "../../data/data";

const SecondPage = () => {

    const [query, setQuery] = useState<string>("")
    const [selectedData, setSelectedData] = useState<Option | null>(null)

    const handleSelectChange = (selected: any) => {
        setSelectedData(selected as Option | null);
        setQuery("")
    };

    useEffect(() => {
        if (selectedData) {
            setQuery(selectedData.label)
        }
    }, [selectedData])

    useEffect(() => {
        AOS.init({ duration: 1000 })
        window.scrollTo(0, 0)
    }, []);


    return (
        <>
            <Header islandingpage={false} />

            {/* //Featured  */}
            <section className="bg-white max-sm:px-[30px] px-[60px] pt-16 mb-[10rem]  xl:px-[120px] py-[10px] flex flex-col gap-10 ">
                <h1 className="text-2xl text-black font-extrabold">Featured Services </h1>
                <div className="flex flex-col md:flex-row gap-10">

                    <ToolTip listbox={false} image="https://static.mparticle.com/providerimg/forwarderlogo_145_AmazonAdvertising.svg" subname="Amazon Advertising" title="provides ad solutions to help you find, attract, and engage millions of Amazon customers at every stage of their journey." firstlink="User Acquisition" isRed={true} />

                    <ToolTip listbox={false} image="https://static.mparticle.com/providerimg/forwarderlogo_1231_Indicative.svg" subname="Indicative" title="is a customer journey analytics platform designed for product and marketing teams to leverage complex analysis to build better products that drive conversion, increase engagement, and retain customers." firstlink="User Analytics" isRed={false} secondlink="Data Subject Request" />

                    <ToolTip listbox={false} image="https://static.mparticle.com/providerimg/forwarderlogo_166_Vidora.svg" subname="Vidora" title=" provides a Machine Learning platform for Marketing, AdTech, and Product teams to transform user data into automated decisions powered by Machine Learning. These decisions include next-best-action, next-best-offer, and more." firstlink="Predictive Analytics" isRed={false} secondlink=" Business Intelligence" />
                </div>
            </section>

            {/* Categories  */}
            <section className="bg-[#f6f6f6] max-sm:px-[30px] px-[60px] pt-20  mt-[10rem] xl:px-[120px] py-[40px]">

                {/* Search and filter Input  */}
                <div className="flex flex-col lg:flex-row w-[100%] gap-3  ">
                    <div className="w-[100%] lg:w-[50%] ">
                        <h1 className="text-3xl font-extrabold ">Search our list of integrations</h1>
                    </div>
                    <div className=" w-[100%] flex flex-col md:flex-row gap-5 lg:w-[50%]">
                        <div className="w-[100%] md:w-[50%] relative ">
                            <input type="text" className=" p-3 bg-[#ededed] w-[100%] outline-none rounded-xl " placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
                            <IoSearchOutline className="absolute top-4 right-5" />
                        </div>

                        <Select
                            value={selectedData}
                            onChange={handleSelectChange}
                            options={options}
                            placeholder="Select an option"
                            styles={{
                                control: (provided) => ({
                                    ...provided,
                                    backgroundColor: '#ededed',
                                    borderRadius: '20px',
                                    minWidth: "12rem ",
                                }),
                                option: (provided, state) => ({
                                    ...provided,
                                    backgroundColor: '#1f1f1f',
                                    color: state.isFocused ? "#575cff" : "white",
                                    padding: '5px',
                                }),
                            }}
                        />
                    </div>
                </div>


                <div className="flex flex-col lg:flex-row w-[100%] gap-6 pb-[10rem]  ">

                    {/* Category Menu  */}
                    <div className="w-[100%] lg:w-[25%] bg-white border-2  mt-10 h-[30rem]   rounded-lg hidden lg:flex lg:flex-col items-start flex-col pt-10 px-5 gap-5 ">
                        <button onClick={() => { setQuery(""); setSelectedData(null); }} className="w-[100%] p-3  text-start font-bold text-md hover:rounded-xl hover:bg-[#ededed]">View All</button>
                        <div className="h-[1px]  bg-[#ededed] w-[100%]"></div>
                        <button className="font-bold text-md text-yellow-400 p-3 w-[100%] text-start hover:rounded-xl hover:bg-yellow-100">New</button>
                        <div className="h-[1px]  bg-[#ededed] w-[100%]"></div>
                        <div className="flex flex-col w-[100%]">
                            <h1 className="font-bold text-md mb-4">Category</h1>
                            <button onClick={() => { setQuery("Google"); setSelectedData(null); }} className=" p-2 w-[100%] font-medium text-sm text-start  hover:rounded-xl hover:bg-[#ededed]">Google</button>
                            <button onClick={() => { setQuery("Twitter"); setSelectedData(null); }} className=" p-2 w-[100%] font-medium text-sm text-start  hover:rounded-xl hover:bg-[#ededed]">Twitter</button>
                            <button onClick={() => { setQuery("Facebook"); setSelectedData(null); }} className=" p-2 w-[100%] font-medium text-sm text-start  hover:rounded-xl hover:bg-[#ededed]">Facebook</button>
                        </div>




                    </div>

                    {/* Searched Data  */}
                    <div className="w-[100%] lg:w-[75%] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-9 pt-10 place-items-center">
                        {
                            imageArray && imageArray.filter((item) => {
                                return query.toLowerCase() === "" ? item : item.subname.toLowerCase().includes(query.toLowerCase())
                            }).map((elem, index: number) => {
                                return (
                                    <React.Fragment key={index}>
                                        <ToolTip listbox={true} subname={elem.subname} isRed={elem.isRed} image={elem.image} firstlink={elem.firstlink} secondlink={elem?.secondlink} title={elem.title} />
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}





export default SecondPage