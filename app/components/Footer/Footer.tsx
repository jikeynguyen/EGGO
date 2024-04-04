import React from 'react';
import './Footer.css';
// Footer component
const Footer = () => {
  return (
    <div className="back-ground">
      <div className="footer-content">
        <div className="column1">
        <img
            src="/images/logo.png"
            alt="EGGO"
            style={{ width: '130px', height: '40px' }}
          />
          <p>
            EGGO - Sản phẩm mang tính gắn kết, khơi dậy tinh thần xóa bỏ sự cô lập, hướng tới việc kết nối cộng đồng. Được thiết kế để mang lại trải nghiệm thể thao gần gũi và nhanh chóng, EGGO là lựa chọn hoàn hảo giúp bạn tiến gần hơn đến niềm đam mê của mình.
          </p>
              <p>
          Thành lập bởi: <span className='font-bold'>Igniter Team</span>
        </p>

         
        </div>
        <div className="column4">
          <br/>
          <br/>
          <p>Liên hệ: </p>
          <p>- Địa chỉ: Văn phòng ABC ĐH Quốc Tế ĐHQG TP. HCM</p>
          <p>- Số điện thoại: 0123456789 - 0987654321</p>
          <p>- Email: <a href="mailto:igniterteam@gmail.com.vn">igniterteam@gmail.com.vn</a></p>
          <p>- Website: <a href="https://eggo.vn">Eggo.vn</a></p>
          <p>- Facebook: <a href="https://facebook.com/Eggo">facebook.com/Eggo</a></p>
          <p>- Instagram: <a href="https://instagram.com/Eggo">@Eggo</a></p>
        </div>
        <div className="column2">
        <br/>
          <br/>
          <p>EGGO đã có mặt tại:</p>
          <ul>
            <li>Quận 1</li>
            <li>Quận 3</li>
            <li>Quận 4</li>
            <li>Quận 5</li>
            <li>Quận 6</li>
            <li>Quận 7</li>
            <li>Quận 8</li>
            <li>Quận 10</li>
            <li>Quận 11</li>
            <li>Quận 12</li>
            <li>Quận Tân Bình</li>
            <li>Quận Bình Tân</li>
            <li>Quận Bình Thạnh</li>
            <li>Quận Tân Phú</li>
            <li>Quận Gò Vấp</li>
            <li>Quận Phú Nhuận</li>
          </ul>
        </div>
        <div className="column3">
        <br/>
          <br/>
          <p>Thông tin hữu ích:</p>
          <ul>
            {/* List of useful information */}
            <li>Quyên góp từ thiện</li>
            <li>Quyên góp từ thiện</li>
            <li>Sự kiện trong tháng</li>
            <li>Câu chuyện của năm</li>
            <li>Phí dịch vụ tùy chọn và gói đặc biệt</li>
            <li>Kế hoạch bảo trì và sửa chữa</li>
          </ul>
        </div>
      </div>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2024 EGGO - Igniter Team
      </footer>
    </div>
  );
};

export default Footer;
