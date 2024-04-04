
import { useRouter } from "next/navigation";

const BarTools = () => {
  const router = useRouter();
  return (
    <nav class="navbar">
    <ul class="navbar-list">
    <li><a href="#">Trang chủ</a></li>
    <li><a href="#">Cộng đồng</a></li>
    <li><a href="#">Kết nối</a></li>
    <li><a href="#">Hành trình</a></li>
    <li><a href="#">Chúng tôi</a></li>
  </ul>
</nav>
  );
};

export default BarTools;
