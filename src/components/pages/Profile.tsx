import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Button, Header1, Input, Subtitle } from "../atoms";
import { getLoginData } from "../utilities/helper";

const Profile = () => {
  const navigate = useNavigate();

  const { register, reset, setValue } = useForm({
    defaultValues: {
      fullname: getLoginData().personFullName,
      email: getLoginData().personEmail,
      username: getLoginData().personSAMAccountName,
      employeeID: getLoginData().personEmployeeID,
      role: getLoginData().personStaffRole,
      mobilenumber: getLoginData().personMobileNumber,
      memberof: getLoginData().personmemberof,
    },
  });

  useEffect(() => {
    const defaultValues = {
      fullname: getLoginData().personFullName,
      email: getLoginData().personEmail,
      username: getLoginData().personSAMAccountName,
      employeeID: getLoginData().personEmployeeID,
      role: getLoginData().personStaffRole,
      mobilenumber: getLoginData().personMobileNumber,
      memberof: getLoginData().personmemberof,
      // memberof: getLoginData().personmemberof.map((val: any, i: number) => (
      //   <li>{val}</li>
      // )),
    };
    reset(defaultValues);
  }, [reset, setValue]);

  return (
    <form className="m-auto w-[80%]">
      <Header1 className="text-center" mt="2rem" mb="0">
        User Profile
      </Header1>
      <Subtitle className="text-center">Your Employee Detail</Subtitle>

      <Button
        isLoading={false}
        text="Go back"
        type="button"
        className="py-2 w-48 ml-auto mr-4 mb-6 lg:mr-12"
        size="sm"
        onClick={() => {
          navigate(-1);
        }}
        backBtn
      />

      <div className="flex flex-col lg:flex-row flex-wrap gap-y-5 gap-x-20">
        <Input
          type="text"
          className="w-4/5 lg:w-2/5"
          label="Full Name"
          register={register("fullname")}
          showLabel
          readOnly
        />

        <Input
          type="email"
          className="w-4/5 lg:w-2/5"
          label="Email"
          register={register("email")}
          showLabel
          readOnly
        />

        <Input
          type="text"
          className="w-4/5 lg:w-2/5"
          label="User Name"
          register={register("username")}
          showLabel
          readOnly
        />

        <Input
          type="text"
          className="w-4/5 lg:w-2/5"
          label="Employee ID"
          register={register("employeeID")}
          showLabel
          readOnly
        />
        <Input
          type="text"
          className="w-4/5 lg:w-2/5"
          label="Role"
          register={register("role")}
          showLabel
          readOnly
        />

        <Input
          type="text"
          className="w-4/5 lg:w-2/5"
          label="Mobile Number"
          register={register("mobilenumber")}
          showLabel
          readOnly
        />

        <Input
          type="textarea"
          className="w-4/5 lg:w-2/5"
          label="Member Units"
          register={register("memberof")}
          showLabel
          readOnly
        />
      </div>
    </form>
  );
};

export { Profile };
