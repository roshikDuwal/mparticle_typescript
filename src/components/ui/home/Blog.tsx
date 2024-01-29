import { BlogDataProps } from "../../../interface/interface.types"

const Blog = ({ data }: { data: BlogDataProps[] }) => {
    return (
        <section className={`bg-white max-sm:px-[30px] px-[60px] pt-16  xl:px-[120px] py-[20px] `}>

            <div className={`flex w-[calc(100% - 120px)] flex-col    gap-10 `}>

                <div className="w-[100%]  text-black flex flex-col items-start gap-5">
                    <div className="w-[100%] flex flex-col items-start  gap-8">
                        <h1 className="max-w-[495px] max-sm:text-[38px] text-[48px] font-extrabold leading-12">Latest from mParticle</h1>
                    </div>
                </div>

                <div className="flex gap-10 flex-wrap ">

                    {
                        data && data.map((elem, index) => {
                            return (
                                <div key={index} className="w-[250px] h-[350px] lg:w-[280px] bg-[#f2f2f2]  lg:h-[400px]   rounded-xl flex flex-col item-center justify-center hover:shadow-3xl  transform hover:scale-110 transition-transform duration-300 ease-in-out ">
                                    <img className="h-[45%] rounded-t-xl" src={elem.image} alt="integration image" loading='lazy' />

                                    <div className="flex flex-col h-[55%]  gap-2 justify-start items-start bg-[#f2f2f2] rounded-b-xl p-[30px]">
                                        <div className="h-[90%]">
                                            <p className="text-[13px] text-purple font-extrabold">{elem.subname.toUpperCase()}</p>
                                            <h1 className="text-[18px] lg:text-[24px] font-extrabold leading-7 ">{elem.title}</h1>
                                        </div>

                                        {
                                            !!elem.author && (
                                                <div className="flex items-center h-[10%]">
                                                    <p className="text-[12px]">{elem.author} - <span>{elem.date}</span></p>


                                                </div>

                                            )
                                        }


                                    </div>


                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </section>
    )
}

export default Blog