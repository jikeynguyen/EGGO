"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/Home-Page" || "/")}
      src="/images/logo.png"
      alt="EGGO"
      width={166}
      height={50}
      className="hidden md:block cursor-pointer"
    />
  );
};

export default Logo;
