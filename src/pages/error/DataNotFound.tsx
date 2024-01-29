import { Link } from 'react-router-dom'
import NodataImage from '../../assets/Nodata.png'
import '../../styles/datanotfound.css'

const DataNotFound = () => {
  return (

    <div className='data-not-found' >
      <img src={NodataImage} />
      <div className='title' >          
      <Link to={"/"} className="bg-black text-white border-2 border-white px-[20px] py-[15px]  rounded-3xl text-sm font-bold  hover:border-[#d1d1d1] transition-all duration-200 ease-in-out ">Go to Home</Link>
          </div>
    </div>
  )
}

export default DataNotFound