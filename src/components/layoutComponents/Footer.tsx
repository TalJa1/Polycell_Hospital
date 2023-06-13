import React from "react";
import logo from "../../assets/imgs/logo51.png";
import "../../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <div className="left-content">
          Bản quyền © 1999 - 2023 GoDaddy Operating Company, LLC. Mọi quyền được
          bảo lưu. Cụm từ GoDaddy là nhãn hiệu đã đăng ký của GoDaddy Operating
          Company, LLC tại Hoa Kỳ và các quốc gia khác. Logo “GO” là nhãn hiệu
          đã đăng ký của GoDaddy.com, LLC tại Hoa Kỳ. Việc sử dụng Trang này
          phải tuân theo các điều khoản sử dụng rõ ràng. Bằng việc sử dụng trang
          này, bạn xác nhận đã đồng ý chịu ràng buộc bởi các Điều khoản dịch vụ
          chung.
        </div>
        <div className="left-info">
          <div>Email: polycell@fpt.com.vn</div>
          <div>Phone: 0909898989</div>
          <div>District: 00/00 Nguyen Huu Canh, phuong 10, quan 12, TP. HCM</div>
        </div>
      </div>
      <div className="footer-right">
        <img className="imgstyle" src={logo} alt="FooterImg" />
      </div>
    </footer>
  );
};

export default Footer;
