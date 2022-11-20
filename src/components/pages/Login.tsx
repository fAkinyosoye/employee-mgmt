import React, { ChangeEvent, useState } from "react";

import logoImg from "../../assets/images/uploadedwebclientlogo.jpg";
import { useLoginMutation } from "../../redux/services/auth-services";
import { Button, Header1, Input, Label, Subtitle } from "../atoms";

export type FormData = {
  emailOrUserName: string;
  password: string;
};

const Login = () => {
  const [login] = useLoginMutation();
  const [formData, setFormData] = useState<FormData>({
    emailOrUserName: "Freeman",
    password: "Liberia",
  });

  const handleFormDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = async (e: any): Promise<void> => {
    e.preventDefault();
    // setIsLoading(true);
    try {
      const res = await login(formData).unwrap();
      if (res.status === "success") {
        alert("success");
        console.log(res);
        // message.success(res.message);
        // setIsLoading(false);
      }
    } catch (error: any) {
      alert("error");
      console.log(error);
      // message.error(error?.data?.message);
      // setIsLoading(false);
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
        onSubmit={(e: any) => submitHandler(e)}
        className="mx-auto my-auto w-4/5 lg:w-3/5 xl:w-2/5 flex flex-col gap-y-4"
      >
        <Header1 className="text-center" mt="5rem" mb="0">
          Login
        </Header1>
        <Subtitle className="text-center">
          Sign in to the Employee Management Portal
        </Subtitle>
        <Label>Email or Username</Label>
        <Input
          type="text"
          name="emailOrUserName"
          onChange={handleFormDataChange}
        />

        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          onChange={handleFormDataChange}
        />

        <Button text="Submit" type="submit" className="mt-5" />
      </form>
    </div>
  );
};

export { Login };
