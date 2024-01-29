import { Link } from "react-router-dom"
import Header from "../../components/shared/Header"
import { FaArrowRight } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import Management from "../../components/ui/home/Management";
import Integration from "../../components/ui/home/Integration";
import Blog from "../../components/ui/home/Blog";
import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { blogdata, data, integrationData } from "../../data/data";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <Header islandingpage={true} />

      {/* Trusted Partner  */}
      <section className="bg-backgroundcolor px-[5px]  lg:px-[60px] py-[30px] pb-[40px] ">
        <div className="px-[30px] flex flex-col lg:flex-row w-[100%] gap-4 ">
          <div className="flex flex-col w-[100%] lg:w-[12rem] gap-2">
            <p className="text-medium font-bold  text-white ">Trusted by innovative companies of all sizes:</p>
            <div className=" flex items-center gap-2 hover:gap-4 transition-all duration-200 ease-in-out ">
              <Link className="text-medium font-bold underline text-purple  " to={"/"}> Customer stories </Link>
              <FaArrowRight className="text-sm font-light text-purple" />
            </div>
          </div>

          <div className="  gap-3 grid grid-cols-2 lg:grid-cols-4 place-items-center w-[100%]  lg:w-[calc(100%-12rem)] lg:px-[5rem]  ">
            <svg width="63px" height="28px" viewBox="0 0 63 28" xmlns="http://www.w3.org/2000/svg" fill="#B2B7BB">
              <path d="M9.937,6.309C3.734,6.309,0,11.166,0,17.154s3.419,5.846,9.937,5.846c4.983,0,8.119-2.702,9.321-6.65L13.929,16.507 c-0.801,1.451-2.164,2.422-3.008,2.422c-2.404,0-3.887-1.48-4.431-3.686l14.215,0c0.075-0.6,0.116-1.217,0.116-1.846 c0-5.994-3.683-11.086-9.88-11.086H9.937z M5.578,14.811c0.63-2.057,2.148-3.422,4.342-3.422c2.308,0,3.883,1.32,4.456,3.422 L5.578,14.811z M29.129,6.731H20.297v20.857h5.337V21.88h3.573c4.146,0,7.428-3.373,7.428-7.614C36.631,10.086,33.401,6.731,29.129,6.731z M31.271,14.366c0,1.309-0.957,2.27-2.142,2.27H25.635v-4.885h3.494c1.185,0,2.142,0.955,2.142,2.27L31.271,14.366z M63,27.589 L56.631,27.589L52.559,21.274L48.476,27.589L37.141,27.589V6.731h5.338V26.851L49.489,16.52L43.459,6.731L49.621,6.731L52.559,12.303 L55.686,6.731L61.969,6.731L55.635,16.52L63,27.589z M42.811,2.994c0,1.653-1.343,2.993-3,2.993c-1.657,0-3-1.34-3-2.993 c0-0.794,0.316-1.555,0.879-2.117c0.563-0.561,1.325-0.877,2.121-0.877c1.657,0,3,1.34,3,2.993H42.811z" fillRule="nonzero" />
              <path d="M42.811,2.994c0,1.653-1.343,2.993-3,2.993c-1.657,0-3-1.34-3-2.993c0-0.794,0.316-1.555,0.879-2.117 c0.563-0.561,1.325-0.877,2.121-0.877c1.657,0,3,1.34,3,2.993H42.811z" />
            </svg>

            <svg width="119px" height="29px" viewBox="0 0 119 29" xmlns="http://www.w3.org/2000/svg" fill="#B2B7BB">
              <path d="M7.01315,17.0483 C6.79265,18.2761 5.91693,23.9993 5.65862,25.6172 C5.63972,25.7323 5.59562,25.7771 5.46962,25.7771 L0.769717,25.7771 C0.290907,25.7771 -0.0556005815,25.355 0.00740076128,24.8882 L3.69928,1.1063 C3.79378,0.49240641 4.33559,0.0255929661 4.95931,0.0255929661 C14.5544,0.0255929661 15.36083,-0.211011108 17.81158,0.754589303 C21.59796,2.2445555 21.94447,5.83837955 20.58364,9.72636 C19.22911,13.7294452 16.016042,15.4496207 11.7571512,15.5007784 C9.02289292,15.5455413 7.37855787,15.053149 7.01315,17.0483 Z M22.49258,7.84632 C22.37918,7.76319 22.33508,7.73121 22.30358,7.92945 C22.17757,8.65844 21.98227,9.36826 21.74916,10.07807 C19.23541,17.3552 12.26746,16.7222 8.86539,16.7222 C8.48108,16.7222 8.22908,16.9332 8.17867,17.32327 C6.75484,26.3014 6.47134,28.1751 6.47134,28.1751 C6.40834,28.6291 6.69184,29 7.13915,29 L11.13974,29 C11.68155,29 12.12886,28.5971 12.23596,28.04719 C12.28006,27.70187 12.16666,28.43727 13.14318,22.20882 C13.43299,20.80199 14.0441,20.94907 14.98912,20.94907 C19.46222,20.94907 22.95249,19.10739 23.99201,13.76781 C24.40152,11.54246 24.28182,9.20199 22.49258,7.84632 Z" fill="#B2B7BB" />
            </svg>

            <svg width="63px" height="28px" viewBox="0 0 63 28" xmlns="http://www.w3.org/2000/svg" fill="#B2B7BB">
              <path d="M9.937,6.309C3.734,6.309,0,11.166,0,17.154s3.419,5.846,9.937,5.846c4.983,0,8.119-2.702,9.321-6.65L13.929,16.507 c-0.801,1.451-2.164,2.422-3.008,2.422c-2.404,0-3.887-1.48-4.431-3.686l14.215,0c0.075-0.6,0.116-1.217,0.116-1.846 c0-5.994-3.683-11.086-9.88-11.086H9.937z M5.578,14.811c0.63-2.057,2.148-3.422,4.342-3.422c2.308,0,3.883,1.32,4.456,3.422 L5.578,14.811z M29.129,6.731H20.297v20.857h5.337V21.88h3.573c4.146,0,7.428-3.373,7.428-7.614C36.631,10.086,33.401,6.731,29.129,6.731z M31.271,14.366c0,1.309-0.957,2.27-2.142,2.27H25.635v-4.885h3.494c1.185,0,2.142,0.955,2.142,2.27L31.271,14.366z M63,27.589 L56.631,27.589L52.559,21.274L48.476,27.589L37.141,27.589V6.731h5.338V26.851L49.489,16.52L43.459,6.731L49.621,6.731L52.559,12.303 L55.686,6.731L61.969,6.731L55.635,16.52L63,27.589z M42.811,2.994c0,1.653-1.343,2.993-3,2.993c-1.657,0-3-1.34-3-2.993 c0-0.794,0.316-1.555,0.879-2.117c0.563-0.561,1.325-0.877,2.121-0.877c1.657,0,3,1.34,3,2.993H42.811z" fillRule="nonzero" />
              <path d="M42.811,2.994c0,1.653-1.343,2.993-3,2.993c-1.657,0-3-1.34-3-2.993c0-0.794,0.316-1.555,0.879-2.117 c0.563-0.561,1.325-0.877,2.121-0.877c1.657,0,3,1.34,3,2.993H42.811z" />
            </svg>

            <svg width="119px" height="29px" viewBox="0 0 119 29" xmlns="http://www.w3.org/2000/svg" fill="#B2B7BB">
              <path d="M7.01315,17.0483 C6.79265,18.2761 5.91693,23.9993 5.65862,25.6172 C5.63972,25.7323 5.59562,25.7771 5.46962,25.7771 L0.769717,25.7771 C0.290907,25.7771 -0.0556005815,25.355 0.00740076128,24.8882 L3.69928,1.1063 C3.79378,0.49240641 4.33559,0.0255929661 4.95931,0.0255929661 C14.5544,0.0255929661 15.36083,-0.211011108 17.81158,0.754589303 C21.59796,2.2445555 21.94447,5.83837955 20.58364,9.72636 C19.22911,13.7294452 16.016042,15.4496207 11.7571512,15.5007784 C9.02289292,15.5455413 7.37855787,15.053149 7.01315,17.0483 Z M22.49258,7.84632 C22.37918,7.76319 22.33508,7.73121 22.30358,7.92945 C22.17757,8.65844 21.98227,9.36826 21.74916,10.07807 C19.23541,17.3552 12.26746,16.7222 8.86539,16.7222 C8.48108,16.7222 8.22908,16.9332 8.17867,17.32327 C6.75484,26.3014 6.47134,28.1751 6.47134,28.1751 C6.40834,28.6291 6.69184,29 7.13915,29 L11.13974,29 C11.68155,29 12.12886,28.5971 12.23596,28.04719 C12.28006,27.70187 12.16666,28.43727 13.14318,22.20882 C13.43299,20.80199 14.0441,20.94907 14.98912,20.94907 C19.46222,20.94907 22.95249,19.10739 23.99201,13.76781 C24.40152,11.54246 24.28182,9.20199 22.49258,7.84632 Z" fill="#B2B7BB" />
            </svg>
          </div>
        </div>
      </section>

      {/* Advertise  */}
      <section className="bg-backgroundcolor  px-[60px]  xl:px-[120px] py-[20px] ">
        <div className="flex w-[calc(100% - 120px)] flex-col lg:flex-row ">
          <div className="w-[100%]  lg:w-[50%] h-[100%] object-cover">
            <img className="max-lg:rounded-t-3xl lg:rounded-l-3xl object-cover w-[100%]" src="https://images.prismic.io/mparticle/48d0e179-a5b4-49f3-8a7a-aa590aa555f5_home-banner.jpeg?auto=compress%2Cformat&fit=max&w=300&h=150&fm=webp 300w,https://images.prismic.io/mparticle/48d0e179-a5b4-49f3-8a7a-aa590aa555f5_home-banner.jpeg?auto=compress%2Cformat&fit=max&w=600&h=300&fm=webp 600w,https://images.prismic.io/mparticle/48d0e179-a5b4-49f3-8a7a-aa590aa555f5_home-banner.jpeg?auto=compress%2Cformat&fit=max&w=1200&h=600&fm=webp 1200w" alt="advertise image" loading="lazy" />
          </div>
          <div className="w-[100%] lg:w-[50%]  bg-white max-lg:rounded-b-3xl lg:rounded-r-3xl flex flex-col items-start p-[2rem]  lg:pl-[2rem] xl:pl-[3rem] justify-center gap-2">
            <h1 className="text-[20px] sm:text-[30px] xl:text-[35px] font-bold">The Recipe for QSR Success</h1>
            <p className="max-w-[430px] text-[14px] sm:text-[18px]">Ready to win more customers and increase your revenue with a best-in-class digital dining experience? Download this guide now.</p>
            <button className="bg-purple text-white px-[35px] py-[12px]  rounded-3xl max-sm:text-sm text-md font-bold  hover:bg-[#3b388e] hover:shadow-2xl transition-all duration-200 ease-in-out ">Download</button>
          </div>

        </div>
      </section>

      {/* Management  */}
      <Management data={data} />

      {/* See How it Works  */}
      <section className="max-md:hidden bg-backgroundcolor  px-[60px] py-[30px] pb-[40px]">
        <div className="px-[60px] flex ">
          <div className=" w-[40%] rounded-l-lg  bg-[#26282B] flex flex-col pl-12 items-start justify-center text-start  gap-2">
            <p className="text-[58px] font-extrabold  text-white leading-12  ">See how it works</p>
            <div className=" flex items-center gap-2 text-purple  hover:gap-4 hover:text-white transition-all duration-200 ease-in-out ">
              <Link className="text-lg font-extrabold   " to={"/"}> Explore demo now</Link>
              <GoArrowUpRight className="text-sm font-light" />
            </div>
          </div>

          <div className="w-[60%] ">
            <img className="rounded-r-lg" src="https://images.prismic.io/mparticle/34da2f61-e348-4b0c-bd79-6934f5360a55_See+how+it+works-crop.png?auto=compress%2Cformat&fit=max&w=353&h=193&fm=webp%20353w,%20https://images.prismic.io/mparticle/34da2f61-e348-4b0c-bd79-6934f5360a55_See+how+it+works-crop.png?auto=compress%2Cformat&fit=max&w=707&h=387&fm=webp%20707w,%20https://images.prismic.io/mparticle/34da2f61-e348-4b0c-bd79-6934f5360a55_See+how+it+works-crop.png?auto=compress%2Cformat&fit=max&w=1413&h=774&fm=webp%201413w" alt="see how it works" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Customer Data Integration  */}
      <Integration data={integrationData} />

      {/* Blog  */}
      <Blog data={blogdata} />

      {/* Tryout  */}
      <section className=" bg-black mt-20  lg:p-[60px] pb-[40px]">
        <div className="px-[20px] md:px-[60px] flex flex-col items-center justify-center  gap-10 p-[40px] ">
          <p className="text-[2.5rem] lg:text-[4.5rem] font-extrabold  text-white leading-12  ">Try out mParticle</p>
          <p className="max-w-[600px] text-[14px] lg:text-[18px] text-white">See how leading multi-channel consumer brands solve E2E customer data challenges with a real-time customer data platform.</p>

          <div className="flex gap-2 ">
            <button className="bg-white text-black px-[20px] py-[15px]  rounded-3xl text-sm font-bold  hover:bg-[#dde6f7] transition-all duration-200 ease-in-out  ">Explore demo</button>
            <button className="bg-black text-white border-2 border-white px-[20px] py-[15px]  rounded-3xl text-sm font-bold  hover:border-[#d1d1d1] transition-all duration-200 ease-in-out ">Contact us</button>
          </div>
          <p className="text-center text-[0.9rem] text-[#bbbbbb]"> Startups can now receive up to one year of complimentary access to mParticle. <span><Link to={"/"} className="underline hover:white">Receive access</Link></span></p>
        </div>
      </section>
    </>

  )
}

export default Home