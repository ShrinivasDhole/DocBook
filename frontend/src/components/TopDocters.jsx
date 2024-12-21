
import { useNavigate } from 'react-router-dom'
import DocterCard from './DocterCard'
const TopDocters = () => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx10 '>
        <h1 className='text-3xl font-medium'>Top Docters to Book</h1>
        <p className='sm:w-1/3 text-center text-sm '>Simple browse through our extensive list of trusted docters.</p>
         <DocterCard/>
         <button className='bg-blue-100 text-gray-700 px-12 py-3 rounded-full mt-10 hover:bg-blue-400' onClick={()=>{navigate(`/docters`) ; scrollTo(0,0)}}>more</button>
    </div>
  )
}

export default TopDocters