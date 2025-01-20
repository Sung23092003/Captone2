import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/* left Section */}
                <div className='flex gap-5'>
                    <img className='w-[120px] h-[100px]' src={assets.logo} alt="" />
                    <div>
                        <p className='text-xl font-medium mb-5'>BỆNH VIỆN ĐÀ NẴNG</p>
                        <p className='w-full md:w-2/3 text-gray-600 leading-6 text-justify'>Bệnh viện Đà Nẵng là bệnh viện hạng I tại miền Trung Việt Nam, tọa lạc tại số 124 Hải Phòng, Đà Nẵng.
                            Với quy mô hơn 1.000 giường bệnh, bệnh viện cung cấp dịch vụ y tế đa khoa hiện đại, bao gồm cấp cứu, nội trú, ngoại trú và phẫu thuật.
                            Đội ngũ y bác sĩ giàu kinh nghiệm cùng trang thiết bị tiên tiến giúp nâng cao chất lượng chăm sóc sức khỏe.</p>
                    </div>
                </div>
                {/* center Section */}
                <div>
                    <p className='text-xl font-medium mb-5'>BỆNH VIỆN</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Trang chủ</li>
                        <li>Bác sĩ</li>
                        <li>Giới thiệu</li>
                        <li>Điều Khoản và Chính sách</li>
                    </ul>
                </div>
                {/* Right Section */}
                <div>
                    <p className='text-xl font-medium mb-5'>LIÊN HỆ</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>086540271</li>
                        <li>benhvienDaNang@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
