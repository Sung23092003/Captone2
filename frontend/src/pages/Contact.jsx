import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        'service_0v1l5na',
        'template_2pdhpyo',
        formRef.current,
        'v-1EKWmhCYYyHgQ2y'
      );
      toast.success('🎉 Email đã gửi thành công!');
      formRef.current.reset();
    } catch (error) {
      toast.error('❌ Gửi email thất bại, vui lòng thử lại!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 p-6 max-w-lg mx-auto rounded-lg shadow-md">
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar closeOnClick pauseOnHover />
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">Liên Hệ Chúng Tôi</h2>
      <p className="text-gray-600 mb-6 text-center max-w-lg">
        Nếu bạn có bất kỳ câu hỏi nào, hãy liên hệ với chúng tôi qua biểu mẫu dưới đây.
      </p>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Họ và tên"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Nội dung"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          disabled={loading}
        >
          {loading ? 'Đang gửi...' : 'Gửi'}
        </button>
      </form>
      <div className="mt-6 text-center">
        <p className="text-gray-700">📞 Hotline: +84 123 456 789</p>
        <p className="text-gray-700">📧 Email: danangbenhvien1@gmail.com</p>
        <p className="text-gray-700">🏢 Địa chỉ: 123 Đường Ông Ích Khiêm, Đà Nẵng</p>
      </div>
    </div>
  );
};

export default Contact;
