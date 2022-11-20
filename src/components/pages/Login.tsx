import React, { ChangeEvent, useState } from "react";

import logoImg from "../../assets/images/uploadedwebclientlogo.jpg";
import { useLoginMutation } from "../../redux/services/auth-services";
import { Input } from "../atoms";

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
        console.log(res)
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
    <div className="my-8 mx-10">
      <img src={logoImg} alt="logoImg" />
      <form onSubmit={(e: any) => submitHandler(e)}>
        <Input type="text" name="emailOrUserName" onChange={handleFormDataChange} />
        <Input type="password" name="password" onChange={handleFormDataChange} />
        <button type="submit">Submit</button>
      </form>
      </div>
  )
}

export { Login }