import React, { useState } from 'react'

const login = () => {
  const [state, setState] = useState('Sign Up');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async () => {
    event.preventDefault();
  }
  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='w-full text-2xl font-semibold text-center'>{state === "Sign Up" ? "Đăng ký" : "Đăng nhập"}</p>
        <p>Hãy {state === "Sign Up" ? "đăng ký" : "đăng nhập"} để được đặt lịch khám một cách nhanh chóng</p>
        {state === "Sign Up" &&  
        <div className='w-full'>
          <p>Tên đầy đủ</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" placeholder='Vui lòng nhập tên đầy đủ' onChange={(e) => setName(e.target.name)} value={name} required />
        </div>}
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" placeholder='Vui lòng nhập email của bạn' onChange={(e) => setEmail(e.target.email)} value={email} required />
        </div>
        <div className='w-full'>
          <p>Mật khẩu</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" placeholder='Vui lòng nhập mật khẩu' onChange={(e) => setPassword(e.target.password)} value={password} required />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === "Sign Up" ? "Đăng ký" : "Đăng nhập"}</button>
        {
          state === "Sign Up"?
          <p>Bạn đã có tài khoản, đăng nhập <span onClick={()=>{setState('Login')}} className='text-primary underline cursor-pointer'>tại đây</span></p>:
          <p>Tạo tài khoản mới? <span onClick={()=>{setState('Sign Up')}} className='text-primary underline cursor-pointer'>Nhấn vào đây</span></p>
        }
      </div>
    </form>
  )
}

export default login
