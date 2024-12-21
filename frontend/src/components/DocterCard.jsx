import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
const DocterCard = () => {
    const navigate = useNavigate();
    const {doctors} = useContext(AppContext)
  return (
    <div className='w-full grid grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
      {doctors.slice(0, 10).map((item, index) => {
        return (
          <div onClick={()=>{navigate(`/appointments/${item._id}`)}} key={index} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500" >
            <img className="bg-blue-50 " src={item.image} alt="image" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-green-900 text-lg font-medium">{item.name}</p>
              <p className="text-grey-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        );
    })}
    
    </div>
  );
};

export default DocterCard;
