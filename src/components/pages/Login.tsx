import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import logoImg from "../../assets/images/uploadedwebclientlogo.jpg";
import { useLoginMutation } from "../../redux/services/auth-services";
import { Button, Header1, Input, Label, Subtitle } from "../atoms";

export type LoginRequest = {
  emailOrUserName: string;
  password: string;
};

const Login = () => {
  const [login] = useLoginMutation();
  // const [formData, setFormData] = useState<LoginRequest>({
  //   emailOrUserName: "Freeman",
  //   password: "Liberia",
  // });
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginRequest>();

  const navigate = useNavigate();

  // const handleFormDataChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;

  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const submit = async (data: LoginRequest): Promise<void> => {
    setIsLoading(true);
    try {
      console.log(data);
      navigate("/employee-records");
      // const res = await login(data).unwrap();
      // if (res.statusCode === 200) {
      //   alert("success");
      //   setIsLoading(false);
      //   navigate("/");
      //   console.log(res);
      // }
      // toast.success("Success!");
    } catch (error: any) {
      toast.error(error);
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-20">
      <img
        src={logoImg}
        alt="logoImg"
        width="270px"
        height="54px"
        className="mx-auto my-10"
      />
      <form
        // onSubmit={(e: any) => submitHandler(e)}
        onSubmit={handleSubmit(submit)}
        className="mx-auto my-auto w-4/5 lg:w-3/5 xl:w-2/5 flex flex-col"
      >
        <Header1 className="text-center" mt="2rem" mb="0">
          Login
        </Header1>
        <Subtitle className="text-center">
          Sign in to the Employee Management Portal
        </Subtitle>

        <Label>Email or Username</Label>
        <Input
          type="email"
          placeholder="login@boi.ng"
          register={{
            ...register("emailOrUserName", {
              required: "This field is required",
            }),
          }}
          error={errors?.emailOrUserName?.message}
        />

        <Label>Password</Label>
        <Input
          type="password"
          placeholder="********"
          register={{
            ...register("password", {
              required: "This field is required",
              minLength: 8,
            }),
          }}
          error={errors?.password?.message}
        />

        <Button
          isLoading={isLoading}
          text="Submit"
          type="submit"
          className="mt-2 py-2"
        />
      </form>
    </div>
  );
};

export { Login };
