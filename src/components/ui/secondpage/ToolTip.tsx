import { ToolTipProps } from "../../../interface/interface.types"

const ToolTip = ({ image, subname, title, firstlink, secondlink, isRed,  listbox }: ToolTipProps) => {
    
    return (
        <div className={`tooltipbox ${listbox ?"h-[116px] p-8 bg-white w-[200px]":" h-[182px] w-[100%] md:w-[30%] bg-[#f6f6f6] p-16"} border-2    rounded-lg flex item-center justify-center hover:shadow-3xl  transform hover:scale-110 transition-transform duration-300 ease-in-out  `}>
            <div className={`tooltip ${listbox ?"":"max-md:hidden "}  bg-[#1f1f1f] text-white text-xs p-2 rounded mt-2`}>
                <div className="flex flex-start gap-5 flex-col">
                    <h1 className="text-white text-xl">{subname}</h1>
                    <p className="text-[#717171] text-md font-medium"> <span className="text-white">{subname}</span> {title}</p>
                    <p className="text-md font-medium  text-white"><span className={`${isRed ? "text-red-500" : "text-blue-500"}`}>{firstlink}</span>,{secondlink}</p>
                </div>
            </div>

            <img className="object-contain" src={image} alt="integration image" loading='lazy' />
        </div>
    )
}

export default ToolTip