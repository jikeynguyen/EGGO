"use client";

import useRegisterModel from "@/app/hooks/useRegisterModel";
import axios from "axios";
import { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Modal from "./Model";
import Heading from "../Heading";
import Input from "../inputes/Input";
import toast from "react-hot-toast";
import Button from "../Button";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { sign } from "crypto";
import useLoginModel from "@/app/hooks/useLoginModel";

const RegisterModel = () => {
  const RegisterModel = useRegisterModel();
  const LoginModel = useLoginModel();
  const [isLoaded, setIsLoaded] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoaded(true);

    axios
        .post("/api/register", data)
        .then(() => {
          toast.success("Wow! Tuyệt vời, bạn đã đăng ký thành công");
          RegisterModel.onClose();
          LoginModel.onOpen();
        })
        .catch((error) => {
          toast.error(error.response.data.message || "Đã xảy ra lỗi!");
        })
        .finally(() => {
          setIsLoaded(false);
        });
  };

  // Toggling the Model Component
  const toggle = useCallback(() => {
    RegisterModel.onClose();
    LoginModel.onOpen();
  }, [LoginModel, RegisterModel]);

  //  Body Content for the Model Component
  const bodyContent = (
      <div
          className="
      flex flex-col gap-4"
      >
        <Heading
            title="Welcome to EGGO"
            subtitle="Hãy Bắt đầu hành trình của bạn"
            center={false}
        />
        <Input
            id="email"
            label="Email"
            type="email"
            placeholder="Nhập email của bạn"
            required
            register={register}
            errors={errors}
        />
        <Input
            id="name"
            label="Tên"
            type="text"
            placeholder="Nhập tên của bạn"
            required
            register={register}
            errors={errors}
        />
        <Input
            id="password"
            label="Mật khẩu"
            type="password"
            placeholder="Nhập mật khẩu của bạn"
            required
            register={register}
            errors={errors}
        />
      </div>
  );
  // Footer Content for the Model Component
  const footerContent = (
      <div className="flex flex-col gap-4 mt-3">
        <hr />
        <Button
            outline
            label="Tiếp tục với Google"
            icon={FcGoogle}
            onClick={() => signIn('google')}
        />
        <Button
            outline
            label="Tiếp tục với Github"
            icon={AiFillGithub}
            onClick={() => signIn('github')}
        />
        <div className="flex p-2 gap-2 items-center justify-center">
          <p className="text-sm text-neutral-500">Bạn đã có tài khoản?</p>
          <button
              className="text-sm text-neutral-800 hover:underline transition duration-300"
              onClick={toggle}
          >
              Đăng nhập
          </button>
        </div>
      </div>
  );
  return (
      <Modal
          disabled={isLoaded}
          isOpen={RegisterModel.isOpen}
          onClose={RegisterModel.onClose}
          title="Đăng ký"
          actionLabel="Tạo tài khoản"
          onSubmit={handleSubmit(onSubmit)}
          body={bodyContent}
          footer={footerContent}
      />
  );
};

export default RegisterModel;
