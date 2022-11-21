import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { Header1, Input, Label, Subtitle } from "../atoms";

const EmployeeDetails = () => {
  const { state } = useLocation();

  const { register } = useForm({
    defaultValues: {
      firstname: state?.firstname,
      middleinitial: state?.middleinitial,
      lastname: state?.lastname,
      username: state?.username,
      role: state?.role,
      grade: state?.grade,
      division: state?.division,
      department: state?.department,
      unit: state?.unit,
      location: state?.location,
      accountnumber: state?.accountnumber,
      sortcode: state?.sortcode,
    },
  });

  return (
    <div className="m-auto w-[70%]">
      <Header1 className="text-center" mt="2rem" mb="0">
        Employee Details
      </Header1>
      <Subtitle className="text-center">View Employee Detail</Subtitle>

      <div className="flex items-center gap-20 mb-4">
        <Input
          type="text"
          className="basis-[40%]"
          label="First Name"
          register={register("firstname")}
        />
        <Input
          type="text"
          className="basis-[40%]"
          label="Middle Initial"
          register={register("middleinitial")}
        />
      </div>

      <div className="flex items-center gap-20 mb-4">
        <Input
          type="text"
          className="basis-[40%]"
          label="Last Name"
          register={register("lastname")}
        />
        <Input
          type="text"
          className="basis-[40%]"
          label="User Name"
          register={register("username")}
        />
      </div>

      <div className="flex items-center gap-20 mb-4">
        <Input
          type="text"
          className="basis-[40%]"
          label="Role"
          register={register("role")}
        />
        <Input
          type="text"
          className="basis-[40%]"
          label="Grade"
          register={register("grade")}
        />
      </div>

      <div className="flex items-center gap-20 mb-4">
        <Input
          type="text"
          className="basis-[40%]"
          label="Division"
          register={register("division")}
        />
        <Input
          type="text"
          className="basis-[40%]"
          label="Department"
          register={register("department")}
        />
      </div>

      <div className="flex items-center gap-20 mb-4">
        <Input
          type="text"
          className="basis-[40%]"
          label="Unit"
          register={register("unit")}
        />
        <Input
          type="text"
          className="basis-[40%]"
          label="Location"
          register={register("location")}
        />
      </div>

      <div className="flex items-center gap-20 mb-4">
        <Input
          type="text"
          className="basis-[40%]"
          label="Account Number"
          register={register("accountnumber")}
        />
        <Input
          type="text"
          className="basis-[40%]"
          label="Sort Code"
          register={register("sortcode")}
        />
      </div>
    </div>
  );
};

export { EmployeeDetails };
