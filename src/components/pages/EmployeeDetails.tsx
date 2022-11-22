import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useFetchAllGradeLevelsQuery } from "../../redux/services/mgmt-services";
import {
  Button,
  CustomSelect,
  Header1,
  Input,
  Label,
  Subtitle,
} from "../atoms";

const EmployeeDetails = () => {
  const { state } = useLocation();
  const {
    data: gradeLevelData,
    refetch,
    isLoading,
  }: any = useFetchAllGradeLevelsQuery();

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const gradeLevelDataFormatted =
    gradeLevelData &&
    gradeLevelData?.map((grade: any) => {
      return {
        value: grade?.gradeShortName,
        label: grade?.gradeName,
      };
    });

  const { register, control, handleSubmit, formState } = useForm({
    defaultValues: {
      firstname: state?.firstname,
      middleinitial: state?.middleinitial,
      lastname: state?.lastname,
      username: state?.username,
      role: state?.role,
      grade: "DGM",
      division: state?.division,
      department: state?.department,
      unit: state?.unit,
      location: state?.location,
      accountnumber: state?.accountnumber,
      sortcode: state?.sortcode,
      createdBy: state?.createdBy,
      lastUpdatedBy: state?.lastUpdatedBy,
    },
  });
  const { errors } = formState;

  const submitForm = (values: any) => {
    console.log(values);

    const variables = {
      firstname: values?.firstname || state.firstname,
    };
  };

  return (
    <form className="m-auto w-[70%]" onSubmit={handleSubmit(submitForm)}>
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

        <CustomSelect
          control={control}
          name="grade"
          options={gradeLevelDataFormatted}
          label="Grade"
          className="w-[30%]"
          isLoading={isLoading}
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

      <div className="flex items-center gap-10 mb-4">
        <Input
          type="text"
          className="basis-[30%]"
          label="Created By"
          register={register("createdBy")}
        />
        <Input
          type="text"
          className="basis-[30%]"
          label="Updated By"
          register={register("lastUpdatedBy")}
        />
      </div>
      <Button
        text="View"
        type="submit"
        className="py-3 w-full text-center"
        size="sm"
      />
    </form>
  );
};

export { EmployeeDetails };

// {
//   "employeeid": "ZZZWSC547",
//   "firstname": "Test Amaka",
//   "middleinitial": "",
//   "lastname": "Stephanie",
//   "username": "estephanie",
//   "role": "Intern",
//   "grade": "Intern",
//   "division": "Risk Management",
//   "department": "Risk Management",
//   "unit": "Risk Management",
//   "location": "Lagos",
//   "accountnumber": "0123456799",
//   "sortcode": "123456789",
//   "staffStatus": 0,
//   "createdDateTime": "0001-01-01T00:00:00+00:00",
//   "createdBy": null,
//   "lastUpdatedDateTime": "0001-01-01T00:00:00+00:00",
//   "lastUpdatedBy": null,
//   "isDeleted": false
// }
