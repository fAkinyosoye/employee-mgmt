import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { CustomSelect, Header1, Input, Label, Subtitle } from "../atoms";

const EmployeeDetails = () => {
  const { state } = useLocation();

  const { register, control } = useForm({
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
    <form className="m-auto w-[70%]">
      <Header1 className="text-center" mt="2rem" mb="0">
        Employee Details
      </Header1>
      <Subtitle className="text-center">View Employee Detail</Subtitle>

      <div className="flex items-center gap-10 mb-4">
        <Input
          type="text"
          className="basis-[30%]"
          label="First Name"
          register={register("firstname")}
        />
        <Input
          type="text"
          className="basis-[30%]"
          label="Middle Initial"
          register={register("middleinitial")}
        />

        <Input
          type="text"
          className="basis-[30%]"
          label="Last Name"
          register={register("lastname")}
        />
      </div>

      <div className="flex items-center gap-10 mb-4">
        <Input
          type="text"
          className="basis-[30%]"
          label="User Name"
          register={register("username")}
        />

        <Input
          type="text"
          className="basis-[30%]"
          label="Role"
          register={register("role")}
        />

        {/* <Input
          type="text"
          className="basis-[30%]"
          label="Grade"
          register={register("grade")}
        /> */}

        <CustomSelect
          control={control}
          name="grade"
          //   options={allBanksData}
          label="Select Bank"
          //   isLoading={getAllBanksLoading}
          placeholder="Access bank"
          //   error={errors?.disbursement_bank_code?.message}
          rules={{
            required: "Bank Name is required",
          }}
        />
      </div>

      <div className="flex items-center gap-10 mb-4">
        <Input
          type="text"
          className="basis-[30%]"
          label="Division"
          register={register("division")}
        />
        <Input
          type="text"
          className="basis-[30%]"
          label="Department"
          register={register("department")}
        />
        <Input
          type="text"
          className="basis-[30%]"
          label="Unit"
          register={register("unit")}
        />
      </div>

      <div className="flex items-center gap-10 mb-4">
        <Input
          type="text"
          className="basis-[30%]"
          label="Location"
          register={register("location")}
        />
        <Input
          type="text"
          className="basis-[30%]"
          label="Account Number"
          register={register("accountnumber")}
        />
        <Input
          type="text"
          className="basis-[30%]"
          label="Sort Code"
          register={register("sortcode")}
        />
      </div>
    </form>
  );
};

export { EmployeeDetails };
