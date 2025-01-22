import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctor = () => {
  const { speciality } = useParams()
  const [fillterDoc, setFilterDoc] = useState([])
  const navigate = useNavigate()
  const { doctors, currencySymbol } = useContext(AppContext)
  const appplyFiter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    appplyFiter()
  }, [doctors, speciality])

  return (
    <div>
      <p className='text-gray-600'>Lọc bác sĩ theo chuyên môn</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600 w-[216px]'>
          <p onClick={() => speciality === 'Bác sĩ đa khoa' ? navigate('/doctors') : navigate('/doctor/Bác sĩ đa khoa')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Bác sĩ đa khoa" ? "bg-[#289AE2] text-white" : ""}`}>Bác sĩ đa khoa</p>
          <p onClick={() => speciality === 'Bác sĩ phụ khoa' ? navigate('/doctors') : navigate('/doctor/Bác sĩ phụ khoa')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Bác sĩ phụ khoa" ? "bg-[#289AE2] text-white" : ""}`}>Bác sĩ phụ khoa</p>
          <p onClick={() => speciality === 'Bác sĩ da liễu' ? navigate('/doctors') : navigate('/doctor/Bác sĩ da liễu')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Bác sĩ da liễu" ? "bg-[#289AE2] text-white" : ""}`}>Bác sĩ da liễu</p>
          <p onClick={() => speciality === 'Bác sĩ nhi khoa' ? navigate('/doctors') : navigate('/doctor/Bác sĩ nhi khoa')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Bác sĩ nhi khoa" ? "bg-[#289AE2] text-white" : ""}`}>Bác sĩ nhi khoa</p>
          <p onClick={() => speciality === 'Bác sĩ thần kinh' ? navigate('/doctors') : navigate('/doctor/Bác sĩ thần kinh')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Bác sĩ thần kinh" ? "bg-[#289AE2] text-white" : ""}`}>Bác sĩ thần kinh</p>
          <p onClick={() => speciality === 'Bác sĩ tiêu hóa' ? navigate('/doctors') : navigate('/doctor/Bác sĩ tiêu hóa')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Bác sĩ tiêu hóa" ? "bg-[#289AE2] text-white" : ""}`}>Bác sĩ tiêu hóa</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            fillterDoc.map((item, index) => (
              <div onClick={() => navigate(`/appointment/${item._id}`)} className='border boder-blue-200 rounded-x1 overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='bg-blue-50 w-full h-64' src={item.image} alt="" />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 text-green-500 rounded-full'></p><p>Có sẵn</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                  {/* giá */}
                  {/* <p className='text-gray-600 text-sm'>{item.fees} {currencySymbol}</p> */}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctor
