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
            <a href="https://webthethao.vn/chay/nhung-dieu-le-quan-trong-cua-giai-ban-marathon-quoc-te-viet-nam-2024-ma-vdv-nen-biet-HFDpfP64g.htm">
              <img
                className="event-image"
                alt="event-1"
                src="../images/giaichaybo.png"
              />

              <p className="event-text">
                Giải chạy bộ Vietnam International Maraton
              </p>
            </a>
          </div>
          <div className="event-item">
            <a href="https://runtolive.vn/en/home/">
              <img
                className="event-image"
                alt="event-2"
                src="../images/chay-maraton.png"
              />
              <p className="event-text">Giải chạy bộ Run To Live 2024</p>
            </a>
          </div>
          <div className="event-item">
            <a href="https://irace.vn/su-kien/giai-chay-tri-an-ultra-marathon-2024-am-vang-mua-xuan/#:~:text=%2Ddich%2Dvu%2F-,Gi%E1%BA%A3i%20ch%E1%BA%A1y%20Tr%E1%BB%8B%20An%20Ultra%20Marathon%202024%20s%E1%BA%BD%20di%E1%BB%85n%20ra,%C4%91%E1%BA%A5t%20n%C6%B0%E1%BB%9Bc%20%C4%91%C6%B0%E1%BB%A3c%20th%E1%BB%91ng%20nh%E1%BA%A5t.">
              <img
                className="event-image"
                alt="event-3"
                src="../images/chay-tri-an.png"
              />
              <p className="event-text">
                Giải chạy Trị An Ultra Marathon - 04/2024
              </p>
            </a>
          </div>
          <div className="event-item">
            <a href="https://thanhnien.vn/kich-tinh-tranh-ao-vang-cup-truyen-hinh-khi-co-den-3-tay-dua-dong-gio-185240408112155456.htm">
              <img
                className="event-image"
                alt="event-4"
                src="../images/chay-xe-dap.png"
              />
              <p className="event-text">Giải đua xe đạp cấp truyền hình 2024</p>
            </a>
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
            <a href="https://www.facebook.com/pura.retreat.yoga">
              <img
                className="event-image2"
                alt="event-1"
                src="../images/khampha1.png"
              />
            </a>
          </div>
          <div className="event-item2">
            <a href="https://www.facebook.com/groups/645229419404928/?multi_permalinks=1502529927008202&ref=share">
              <img
                className="event-image2"
                alt="event-2"
                src="../images/khampha2.png"
              />
            </a>
          </div>
          <div className="event-item3">
            <a href="https://www.quangbinhtravel.vn/hang-toi-quang-binh.html?fbclid=IwAR2N8wzGPz6zcz9JkJ11lkYvjWedMsQOIx_E2dP94MCIuuigBbm5IIdePQg_aem_AZxPI5av4N_TrzrSRIdVGGlQ86Z0cFYayUILlDuJUAkII_gCXRMYnh9-uj91CweKbMGkwQSQTN0QnoM5N8m_gP8X">
              <img
                className="event-image3"
                alt="event-3"
                src="../images/khampha3.png"
              />
            </a>
            <a href="https://www.facebook.com/groups/nncnc">
              <img
                className="event-image4"
                alt="event-4"
                src="../images/khampha4.png"
              />
            </a>
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
          <a href="https://www.sportsshoes.com/">
            <img
              className="phukien-image1"
              alt="event-3"
              src="../images/phukien1.png"
            />
          </a>
        </div>
        <div className="phukien-item1">
          <a href="https://www.sieuthidungcuthethao.com/dung-cu-the-thao-gia-tot.html">
            <img
              className="phukien-image2"
              alt="event-3"
              src="../images/phukien2.png"
            />
          </a>
        </div>
        <div className="phukien-item1">
          <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwis5KvIsrSFAxU6s1YBHSO6BUAQFnoECCIQAQ&url=https%3A%2F%2Fshopee.vn%2Fthudong_90&usg=AOvVaw2GFKca7yRS8i51xLsOreoZ&opi=89978449">
            <img
              className="phukien-image3"
              alt="event-3"
              src="../images/phukien3.png"
            />
          </a>
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
