import { FaFacebook,FaTwitter,FaWhatsapp,FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-16 mx-auto flex flex-col lg:flex-row">
                <div className="w-[100%] lg:w-[30%] flex items-start justify-center mb-10  ">
                <Link to={"/"}> <img className="w-36 h-10" src="/logo.png" alt="logo" loading="lazy" /></Link>
                </div>
                <div className="w-[100%] lg:w-[70%] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 max-md:place-items-center">
                    <div className=" px-4 ">
                        <h2 className="title-font font-bold text-purple tracking-widest text-sm mb-3 ">PLATFORM</h2>
                        <nav className="list-none mb-10">
                            <li className="hover:underline">
                                <Link to={"/"} className="text-black hover:text-gray-800 text-sm">Data Connection</Link>
                            </li>
                            <li className="hover:underline">
                                <Link to={"/"} className="text-black hover:text-gray-800 text-sm">Data Quality</Link>
                            </li>
                            <li className="hover:underline">
                                <Link to={"/"} className="text-black hover:text-gray-800 text-sm">Data Quality</Link>
                            </li>
                            <li className="hover:underline">
                                <Link to={"/"} className="text-black hover:text-gray-800 text-sm">Data Governance</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="px-4 ">
                        <h2 className="title-font font-bold text-purple tracking-widest text-sm mb-3 ">SOLUTIONS</h2>
                        <nav className="list-none mb-10">
                            <li className="hover:underline">
                                <Link to={"/"} className="text-black hover:text-gray-800 text-sm">Data Connection</Link>
                            </li>
                    
                            <li className="hover:underline">
                                <Link to={"/"} className="text-black hover:text-gray-800 text-sm">Data Quality</Link>
                            </li>
                            <li className="hover:underline">
                                <Link to={"/"} className="text-black hover:text-gray-800 text-sm">Data Governance</Link>
                            </li>
                        </nav>
                    </div>

                    <div className=" px-4">
                        <h2 className="title-font font-bold text-purple tracking-widest text-sm mb-3 ">COMPANY</h2>
                        <nav className="list-none mb-10">
                            <li className="hover:underline">
                                <Link to={"/"} className="text-black hover:text-gray-800 text-sm">Data Connection</Link>
                            </li>
                       
                        </nav>
                    </div>

                    <div className=" px-4">
                        <h2 className="title-font font-bold text-purple tracking-widest text-sm mb-3 ">RESOURCE CENTER</h2>
                        <nav className="list-none mb-10">
                            <li className="hover:underline">
                                <Link to={"/"} className="text-black hover:text-gray-800 text-sm">Data Connection</Link>
                            </li>
                            <li className="hover:underline">
                                <Link to={"/"} className="text-black hover:text-gray-800 text-sm">Data Quality</Link>
                            </li>
                       
                        </nav>
                    </div>
                    <div className=" px-4">
                        <h2 className="title-font font-bold text-purple tracking-widest text-sm mb-3 ">LEGAL</h2>
                        <nav className="list-none mb-10">
                            <li className="hover:underline">
                                <Link to={"/"} className="text-black hover:text-gray-800 text-sm">Privacy and policy</Link>
                            </li>
                            <li className="hover:underline">
                                <Link to={"/"} className="text-black hover:text-gray-800 text-sm">Cookie policy</Link>
                            </li>
                 
                        </nav>
                    </div>

                </div> 
            </div>
            
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-24 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-black text-sm text-center sm:text-left">© 2020 mParticle —Inc.All rights reserved.
                    </p>
                    <span className="inline-flex items-center sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <FaFacebook className="text-gray-500 text-lg ml-3"/>
                        <FaTwitter className="text-gray-500 text-lg ml-3"/>
                        <FaWhatsapp className="text-gray-500 text-lg ml-3"/>
                        <FaLinkedin className="text-gray-500 text-lg ml-3"/>
 
                    </span>
                </div>
            </div>
        </footer>



    )
}

export default Footer