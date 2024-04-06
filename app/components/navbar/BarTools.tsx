import { useRouter } from "next/navigation";

const BarTools = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <a href="/Home-Page">Trang chủ</a>
        </li>
        <li>
          <a href="/Community">Cộng đồng</a>
        </li>
        <li>
          <a href="/Finding">Kết nối</a>
        </li>
        <li>
          <a href="/Journey">Hành trình</a>
          <div></div>
        </li>
        <li>
          <a href="/About-Us">Chúng tôi</a>
        </li>
      </ul>
    </nav>
  );
};

export default BarTools;
