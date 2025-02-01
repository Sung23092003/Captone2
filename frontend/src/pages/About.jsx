import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="about-container bg-gray-100 p-6">
      {/* Header */}
      <div className="about-header text-center mb-6">
        <img
          src={assets.about_image}
          alt="Bệnh viện Đà Nẵng"
          className="about-header-img w-full h-96 object-cover rounded-lg shadow-md"
        />
        <h1 className="about-title text-3xl font-extrabold mt-4 text-gray-800 tracking-wide">
          Giới Thiệu Bệnh Viện Đà Nẵng
        </h1>
      </div>

      {/* Nội dung chính */}
      <div className="about-content bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700 text-lg leading-relaxed">
          Bệnh viện Đà Nẵng là một trong những cơ sở y tế hàng đầu tại miền Trung Việt Nam, cung cấp dịch vụ chăm sóc sức khỏe chất lượng cao cho người dân.
          Với đội ngũ y bác sĩ tận tâm, trang thiết bị hiện đại, bệnh viện luôn nỗ lực không ngừng để nâng cao chất lượng khám chữa bệnh.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          Chúng tôi tự hào cung cấp nhiều chuyên khoa khác nhau như Nội khoa, Ngoại khoa, Nhi khoa, Sản khoa, Thần kinh, và nhiều lĩnh vực y tế quan trọng khác.
          Ngoài ra, bệnh viện còn đầu tư vào nghiên cứu và ứng dụng công nghệ tiên tiến nhằm mang lại dịch vụ y tế tốt nhất.
        </p>
      </div>

      {/* Sứ mệnh */}
      <div className="about-mission mt-8">
        <h2 className="section-title text-2xl font-bold text-center mb-4">
          Sứ Mệnh Của Chúng Tôi
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sứ Mệnh */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2 text-red-500">Sứ Mệnh</h3>
            <p className="text-gray-700 text-lg">
              Cam kết mang đến dịch vụ chăm sóc sức khỏe toàn diện, nhân văn và hiện đại, hướng tới sự hài lòng của bệnh nhân.
            </p>
          </div>
          {/* Cách Chúng Tôi Hoạt Động */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2 text-primary">Cách Chúng Tôi Hoạt Động</h3>
            <p className="text-gray-700 text-lg">
              Ứng dụng công nghệ tiên tiến, tối ưu hóa quy trình khám chữa bệnh để mang đến dịch vụ nhanh chóng và hiệu quả.
            </p>
          </div>
          {/* Cam Kết */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2 text-orange-500">Cam Kết</h3>
            <p className="text-gray-700 text-lg">
              Đảm bảo sự minh bạch, chất lượng và tận tâm trong từng dịch vụ y tế, lấy bệnh nhân làm trung tâm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
