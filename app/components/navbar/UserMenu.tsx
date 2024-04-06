"use client";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { useCallback, useState } from "react";

import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

import useRegisterModel from "@/app/hooks/useRegisterModel";
import useLoginModel from "@/app/hooks/useLoginModel";
import useRentModel from "@/app/hooks/useRentModel";

import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";

interface UserMenuProps {
    currentUser?: SafeUser | null;
}
const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const registerModel = useRegisterModel();
    const loginModel = useLoginModel();
    const rentModel = useRentModel();

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    const onRent = useCallback(() => {
        if (!currentUser) {
            return loginModel.onOpen();
        }
        // Open rent model if user is logged in and not a host already
        rentModel.onOpen();
    }, [currentUser, loginModel]);

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={onRent}
                    className="
          hidden
          md:block
          text-sm
          font-semibold
          py-3
          px-4
          rounded-full
          hover:shadow-md
          transition
          cursor-pointer
          duration-200
        "
                >
                    Bắt đầu hành trình!
                </div>
                <div
                    onClick={toggleOpen}
                    className="
        p-4
        md:py-1
        md:px-2
        border-[1px]
        border-neutral-200
        flex
        flex-row
        items-center
        gap-3
        rounded-full
        cursor-pointer
        hover:shadow-md
        transition
        "
                >
                    <HiOutlineMenuAlt1 />
                    <div className="hidden md:block">
                        <Avatar src={currentUser?.image} />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div
                    className="
            absolute
            rounded-xl
            bg-white
            shadow-md
            top-16
            right-0
            text-sm
            w-[40vw]
            md:w-3/4
            overflow-hidden
            "
                >
                    <div
                        className="
                flex
                flex-col
                cursor-pointer
                "
                    >
                        {currentUser ? (
                            <>
                                <MenuItem onClick={() => router.push("/")} label="Trang chủ" />
                                <MenuItem
                                    onClick={() => router.push("/history")}
                                    label="Lịch sử hoạt động"
                                />
                                <MenuItem
                                    onClick={() => router.push("/favorites")}
                                    label="Nơi yêu thích của bạn"
                                />
                                <MenuItem
                                    onClick={() => router.push("/reservations")}
                                    label="Chờ nhận sân"
                                />
                                <MenuItem
                                    onClick={() => router.push("/properties")}
                                    label="Đăng ký dịch vụ của bạn"
                                />
                                <MenuItem
                                    onClick={rentModel.onOpen}
                                    label="Bắt đầu hành trình!"
                                />
                                <hr />
                                <MenuItem onClick={() => signOut()} label="Đăng xuất" />
                            </>
                        ) : (
                            <>
                                <MenuItem onClick={loginModel.onOpen} label="Đăng nhập" />
                                <MenuItem onClick={registerModel.onOpen} label="Đăng ký" />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
