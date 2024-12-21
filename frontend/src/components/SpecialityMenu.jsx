import { Link } from 'react-router-dom'
import { specialityData } from '../assets/assets_frontend/assets'
const SpecialityMenu = () => {
  return (
    <div id="speciality" className='flex flex-col items-center gap-4 py-16 text-gray-800'>
        <h1 className='text-3xl font-medium'>Find by Speciality</h1>
        <p className='w-1/2 text-center text-sm'>Simply browse through our extensive list of Trusted Doctors,
        book an appointment that suits you best.</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {
                specialityData.map((data, index) => (
                        <Link onClick={()=>{
                          scrollTo(0,0)
                        }} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/docters/${data.speciality}`}>
                            <img className='w-16 sm:w-24 mb-2' src={data.image} alt="" />
                            <p>{data.speciality}</p>
                        </Link>
                ))
            }
        </div>
    </div>
  )
}

export default SpecialityMenu

// import { Link } from 'react-router-dom';
// import { specialityData } from '../assets/assets_frontend/assets';

// const SpecialityMenu = () => {
//   return (
//     <div id="speciality" className="container text-center py-5 text-dark">
//       <h1 className="h3 fw-bold">Find by Speciality</h1>
//       <p className="mx-auto w-75">
//         Simply browse through our extensive list of Trusted Doctors, book an appointment that suits you best.
//       </p>
//       <div className="flex flex-row justify-center flex-nowrap  overflow-auto py-4">
//         {specialityData?.length ? (
//           specialityData.map((data, index) => (
//             <Link
//               className="text-decoration-none text-center mx-3"
//               key={index}
//               to={`/doctors/${data.speciality}`}
//             >
//               <div className="transition-transform flex flex-col justify-center items-center " style={{ transform: 'translateY(0px)', transition: 'all 0.5s' }}
//                 onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
//                 onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}>
//                 <img className="img-fluid mb-2" src={data.image} alt={`${data.speciality} icon`} style={{ width: '80px' }} />
//                 <p className="small">{data.speciality}</p>
//               </div>
//             </Link>
//           ))
//         ) : (
//           <p>No specialities found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SpecialityMenu;
