import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  CustomSelect,
  Header1,
  Input,
  Label,
  Subtitle,
} from "../atoms";

const EmployeeDetails = () => {
  const navigate = useNavigate();

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

      <div>
        <Button
          isLoading={false}
          // icon={<FontAwesomeIcon icon="fa-solid fa-plus" />}
          text="Go back"
          type="button"
          className="py-2 w-48 ml-auto mr-4 lg:mr-12"
          size="sm"
          onClick={() => {
            navigate(-1);
          }}
        />
      </div>

      <div className="flex items-center gap-10 mb-4 mt-10">
        <Input
          type="text"
          className="basis-[30%]"
          label="First Name"
          register={register("firstname")}
          showLabel
        />
        <Input
          type="text"
          className="basis-[30%]"
          label="Middle Initial"
          register={register("middleinitial")}
          showLabel
        />

        <Input
          type="text"
          className="basis-[30%]"
          label="Last Name"
          register={register("lastname")}
          showLabel
        />
      </div>

      <div className="flex items-center gap-10 mb-4">
        <Input
          type="text"
          className="basis-[30%]"
          label="User Name"
          register={register("username")}
          showLabel
        />

        <Input
          type="text"
          className="basis-[30%]"
          label="Role"
          register={register("role")}
          showLabel
        />

        <Input
          type="text"
          className="basis-[30%]"
          label="Role"
          register={register("grade")}
          showLabel
        />

        {/* <CustomSelect
          control={control}
          name="disbursement_bank_code"
          options={allBanksData}
          label="Select Bank"
          isLoading={getAllBanksLoading}
          placeholder="Access bank"
          error={errors?.disbursement_bank_code?.message}
          rules={{
            required: "Bank Name is required",
          }}
        /> */}
      </div>

      <div className="flex items-center gap-10 mb-4">
        <Input
          type="text"
          className="basis-[30%]"
          label="Division"
          register={register("division")}
          showLabel
        />
        <Input
          type="text"
          className="basis-[30%]"
          label="Department"
          register={register("department")}
          showLabel
        />
        <Input
          type="text"
          className="basis-[30%]"
          label="Unit"
          register={register("unit")}
          showLabel
        />
      </div>

      <div className="flex items-center gap-10 mb-4">
        <Input
          type="text"
          className="basis-[30%]"
          label="Location"
          register={register("location")}
          showLabel
        />
        <Input
          type="text"
          className="basis-[30%]"
          label="Account Number"
          register={register("accountnumber")}
          showLabel
        />
        <Input
          type="text"
          className="basis-[30%]"
          label="Sort Code"
          register={register("sortcode")}
          showLabel
        />
      </div>
    </form>
  );
};

export { EmployeeDetails };
