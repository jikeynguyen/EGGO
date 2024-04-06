import React from "react";
import "./page.css";
const HomePage: React.FC = () => {
  return (
    <div>
      <img alt="heading-1" src="../images/heading-1.png" />

      <br />
      <br />

      <hr className="horizontal-line" />
      <br />
      <br />

      <div className="title-container">
        <span className="title-text">Sự kiện nổi bật</span>
      </div>
      <br />
      <div className="event-everyday">
        <div className="event">
          <div className="event-item">
            <img
              className="event-image"
              alt="event-1"
              src="../images/giaichaybo.png"
            />
            <p className="event-text">
              Giải chạy bộ Vietnam International Maraton
            </p>
          </div>
          <div className="event-item">
            <img
              className="event-image"
              alt="event-2"
              src="../images/chay-maraton.png"
            />
            <p className="event-text">Giải chạy bộ Run To Love 2024</p>
          </div>
          <div className="event-item">
            <img
              className="event-image"
              alt="event-3"
              src="../images/chay-tri-an.png"
            />
            <p className="event-text">
              Giải chạy Trị An Ultra Marathon - 04/2024
            </p>
          </div>
          <div className="event-item">
            <img
              className="event-image"
              alt="event-4"
              src="../images/chay-xe-dap.png"
            />
            <p className="event-text">Giải đua xe đạp cấp truyền hình 2024</p>
          </div>
          <div className="container" style={{ marginTop: "10px" }}>
            <button className="see-more">Xem thêm ≫</button>
          </div>
        </div>
        <br />
      </div>

      <br />
      <hr className="horizontal-line" />
      <br />

      <div className="title-container">
        <span className="title-text">Khám phá điểm đến</span>
      </div>
      <br />

      <div className="event-everyday2">
        <div className="event">
          <div className="event-item2">
            <img
              className="event-image2"
              alt="event-1"
              src="../images/khampha1.png"
            />
          </div>
          <div className="event-item2">
            <img
              className="event-image2"
              alt="event-2"
              src="../images/khampha2.png"
            />
          </div>
          <div className="event-item3">
            <img
              className="event-image3"
              alt="event-3"
              src="../images/khampha3.png"
            />
            <img
              className="event-image4"
              alt="event-4"
              src="../images/khampha4.png"
            />
          </div>

          <div className="container" style={{ marginTop: "30px" }}>
            <button className="see-more">Tất cả điểm đến ≫</button>
          </div>
        </div>

        <br />
        <br />
        <div className="header-container">
          <div className="line left-line"></div>
          <h2 className="header-title">Phụ kiện thể thao</h2>
          <div className="line right-line"></div>
        </div>

        <br />
        <br />
      </div>
      <div className="event">
        <div className="phukien-item1">
          <img
            className="phukien-image1"
            alt="event-3"
            src="../images/phukien1.png"
          />
        </div>
        <div className="phukien-item1">
          <img
            className="phukien-image2"
            alt="event-3"
            src="../images/phukien2.png"
          />
        </div>
        <div className="phukien-item1">
          <img
            className="phukien-image3"
            alt="event-3"
            src="../images/phukien3.png"
          />
        </div>
      </div>
      <br />
      <div className="content-container">
        <div className="header-container">
          <div className="line left-line"></div>
          <h2 className="header-title">Đăng ký E-NewsLetter</h2>
          <div className="line right-line"></div>
        </div>
        <p className="info-text">
          Đăng ký E-NewsLetter để cập nhật các thông tin,ưu đãi mới nhất từ
          EGGO.
        </p>
        <br />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            margin: "0 10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "10px 20px",
            outline: "none",
          }}
        >
          <span style={{ color: "#888" }}>your-email@gmail.com</span>
        </div>
        <div
          style={{
            margin: "0 10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "10px 20px",
            outline: "none",
          }}
        >
          <span>Bảng tin Tiếng Việt</span>
        </div>
        <button className="button-register">Đăng ký</button>
      </div>
    </div>
  );
};

export default HomePage;
