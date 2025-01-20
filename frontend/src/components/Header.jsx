import React from 'react'
import { assets } from '../assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function Header() {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
            {/* left-side */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                <p className='text-3xl md:text-4xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Chăm sóc bằng tài năng,<br />y đức và sự thấu cảm</p>
                <a href="#speciality" className='flex-items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                    Đặt lịch ngay
                    <img className='w-3' src={assets.arrow_icon} alt="" />
                </a>
            </div>
            {/* right-side */}
            <div className='md:w-1/2 relative'>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={2}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className="rounded-lg"
                >
                    <SwiperSlide>
                        <img className='w-full h-96 object-cover rounded-lg mt-14' src={assets.HomePage_slider1} alt="Slide 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-96 object-cover rounded-lg mt-14' src={assets.HomePage_slider2} alt="Slide 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-96 object-cover rounded-lg mt-14' src={assets.HomePage_slider3} alt="Slide 3" />
                    </SwiperSlide>
                    <p style={{opacity:'0.6'}} className="text-center mt-4 text-white text-sm">
                        Kéo sang trái hoặc phải để xem thêm
                    </p>
                </Swiper>
            </div>
        </div>
    )
}

export default Header
