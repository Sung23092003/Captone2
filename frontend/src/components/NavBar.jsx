import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
const NavBar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <div className='flex items-center justify-between text-sm p-4 mb-5 border-b border-b-gray-400'>
      <img onClick={() => navigate('/')} className='cursor-pointer' style={{ width: '66px' }} src={assets.logo} alt="" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>Trang chủ</li>
          <hr className='h-0.5 bg-navbar w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctor'>
          <li className='py-1'>Bác sĩ</li>
          <hr className='h-0.5 bg-navbar w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>Giới thiệu</li>
          <hr className='h-0.5 bg-navbar w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>Liên hệ</li>
          <hr className='h-0.5 bg-navbar w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex item-center gap-4'>
        {
          token
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 h-7 rounded-full' src={assets.profile_pic} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-8 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>Quản lý thông tin</p>
                  <p onClick={() => navigate('/my-appointment')} className='hover:text-black cursor-pointer'>Quản lý cuộc hẹn</p>
                  <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Đăng xuất</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Tạo tài khoản</button>
        }
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
        {/* mobile menu */}
        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-20' src={assets.logo} alt="" />
            <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>Trang chủ</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctor'><p className='px-4 py-2 rounded inline-block'>Bác sĩ</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>Giới thiệu</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>Liên hệ</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar
