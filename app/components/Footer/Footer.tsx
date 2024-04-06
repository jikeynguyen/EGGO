import React from "react";
import "./Footer.css";
import { RiFacebookCircleFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { AiFillYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

// Footer component
const Footer = () => {
  return (
    <div className="back-ground">
      <div className="footer-content">
        <div className="column1">
          <img
            src="/images/logo.png"
            alt="EGGO"
            style={{ width: "130px", height: "40px" }}
          />
          <p>
            EGGO - Sản phẩm mang tính gắn kết, khơi dậy tinh thần xóa bỏ sự cô
            lập, hướng tới việc kết nối cộng đồng. Được thiết kế để mang lại
            trải nghiệm thể thao gần gũi và nhanh chóng, EGGO là lựa chọn hoàn
            hảo giúp bạn tiến gần hơn đến niềm đam mê của mình.
          </p>
          <br />
          <div>
            <p className="heading">Liên hệ: </p>
            <p>- Địa chỉ: Văn phòng ABC ĐH Quốc Tế ĐHQG TP. HCM</p>
            <p>- Số điện thoại: 0987654321</p>
          </div>
        </div>
        <div className="column4">
          <br />
          <br />
          <div>
            <p className="heading" style={{ marginTop: "5px" }}>
              Theo dõi chúng tôi trên:
            </p>

            <div>
              <div className="icon-div">
                <a
                  className="hover:opacity-50 transition duration-500 flex items-center"
                  href="https://facebook.com/Eggo"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <RiFacebookCircleFill
                    className="icon-footer"
                    style={{
                      marginRight: "15px",
                      fontSize: "36px",
                    }}
                  />
                  <span style={{ fontSize: "25px", color: "#8DC4F0" }}>
                    Facebook
                  </span>
                </a>
              </div>

              <div className="icon-div">
                <a
                  className="hover:opacity-50 transition duration-500 flex items-center"
                  href="https://instagram.com/Eggo"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "40px",
                    textDecoration: "none",
                  }}
                >
                  <SiInstagram
                    className="icon-footer"
                    style={{ marginRight: "15px" }}
                  />
                  <span style={{ fontSize: "25px", color: "#8DC4F0" }}>
                    Instagram
                  </span>
                </a>
              </div>
              <div className="icon-div">
                <a
                  className="hover:opacity-50 transition duration-500 flex items-center"
                  href="https://Youtube.com/Eggo"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "40px",
                    textDecoration: "none",
                  }}
                >
                  <AiFillYoutube
                    className="icon-footer"
                    style={{ marginRight: "15px" }}
                  />
                  <span style={{ fontSize: "25px", color: "#8DC4F0" }}>
                    Youtube
                  </span>
                </a>
              </div>
              <div className="icon-div">
                <a
                  className="hover:opacity-50 transition duration-500 flex items-center"
                  href="https://Tiktok.com/Eggo"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "40px",
                    textDecoration: "none",
                  }}
                >
                  <FaTiktok
                    className="icon-footer"
                    style={{ marginRight: "15px" }}
                  />
                  <span style={{ fontSize: "25px", color: "#8DC4F0" }}>
                    Tiktok
                  </span>
                </a>
              </div>
              <div className="icon-div">
                <a
                  className="hover:opacity-50 transition duration-500 flex items-center"
                  href="mailto:igniterteam@gmail.com.vn"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "30px",
                    textDecoration: "none",
                  }}
                >
                  <SiGmail
                    className="icon-footer"
                    style={{
                      marginRight: "15px",
                      color: "#2c3444",
                      backgroundColor: "#8DC4F0",
                    }}
                  />
                  <span style={{ fontSize: "25px", color: "#8DC4F0" }}>
                    Gmail
                  </span>
                </a>
              </div>
              <div className="icon-div">
                <a
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                  className="hover:opacity-50 transition duration-500"
                  href="https://eggo.vn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="linkedin-link"
                    src="../icon.png"
                    style={{
                      width: "38px",
                      height: "38px",
                      marginRight: "15px",
                      paddingRight: "2px",
                      borderRadius: "20%",
                    }}
                  />
                  <span style={{ fontSize: "25px", color: "#8DC4F0" }}>
                    EGGO
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="column2">
          <br />
          <br />
          <p className="heading">EGGO đã có mặt tại:</p>
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
          <br />
          <br />
          <p className="heading">Thông tin hữu ích:</p>
          <ul>
            {/* List of useful information */}
            <li>Quyên góp từ thiện</li>
            <li>Quyên góp từ thiện</li>
            <li>Sự kiện trong tháng</li>
            <li>Câu chuyện của năm</li>
            <li>Phí dịch vụ tùy chọn và gói đặc biệt</li>
            <li>Kế hoạch bảo trì và sửa chữa</li>
          </ul>
          <br />
          <p className="heading"> Về EGGO:</p>
          <p> Cách đặt sân </p>
          <p> Tìm chuyên viên </p>
          <p> Kết nối cộng đồng </p>
          <p> Nông nghiệp xanh </p>
          <p> Tích điểm đổi thưởng </p>
        </div>
      </div>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2024 EGGO - Igniter Team
      </footer>
    </div>
  );
};

export default Footer;
