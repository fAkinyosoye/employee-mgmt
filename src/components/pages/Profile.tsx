import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  EditBOIEmployee,
  useEditBOIEmployeeMutation,
  useFetchAllGradeLevelsQuery,
} from "../../redux/services/mgmt-services";
import {
  Button,
  CustomSelect,
  Header1,
  Input,
  Loader,
  Subtitle,
} from "../atoms";
import { getLoginData } from "../utilities/helper";

const Profile = () => {
  const navigate = useNavigate();

  const [editEmployee] = useEditBOIEmployeeMutation();

  const [editEmployeeIsLoading, setEditEmployeeIsLoading] = useState(false);

  const {
    data: gradeLevelData,
    refetch,
    isLoading,
  }: any = useFetchAllGradeLevelsQuery();

  const gradeLevelDataFormatted =
    gradeLevelData &&
    gradeLevelData?.map((grade: any) => {
      return {
        value: grade?.gradedesc,
        label: grade?.gradedesc,
      };
    });

  const staffStatus = [
    {
      label: "Active",
      value: "Active",
    },
    {
      label: "Inactive",
      value: "Inactive",
    },
  ];

  const { register, control, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      firstname: getLoginData().personFirstName,
      middleinitial: getLoginData().personMiddlename,
      lastname: getLoginData().personSurname,
      username: getLoginData().personSAMAccountName,
      role: getLoginData().personStaffRole,
      grade: getLoginData().persongrade, //null
      division: getLoginData().persondivision, //null
      department: getLoginData().personDepartment,
      unit: getLoginData().unit, //null
      location: getLoginData().personLocation,
      accountnumber: getLoginData().accountnumber, //null
      sortcode: getLoginData().sortcode, //null
      staffStatus: getLoginData().staffStatus, //null
      createdBy: getLoginData().createdBy, //null
      lastUpdatedBy: getLoginData().lastUpdatedBy, //null
      createdDateTime: getLoginData().createdDateTime, //null
      lastUpdatedDateTime: getLoginData().lastUpdatedDateTime, //null
    },
  });

  useEffect(() => {
    setValue("grade", getLoginData().grade);
    const defaultValues = {
      firstname: getLoginData().personFirstName,
      middleinitial: getLoginData().personMiddlename,
      lastname: getLoginData().personSurname,
      username: getLoginData().personSAMAccountName,
      role: getLoginData().personStaffRole,
      grade: getLoginData().persongrade, //null
      division: getLoginData().persondivision, //null
      department: getLoginData().personDepartment,
      unit: getLoginData().unit, //null
      location: getLoginData().personLocation,
      accountnumber: getLoginData().accountnumber, //null
      sortcode: getLoginData().sortcode, //null
      staffStatus: getLoginData().staffStatus, //null
      createdBy: getLoginData().createdBy, //null
      lastUpdatedBy: getLoginData().lastUpdatedBy, //null
      createdDateTime:
        getLoginData().createdDateTime &&
        new Date(getLoginData().createdDateTime)
          ?.toISOString()
          .substring(0, 10),
      lastUpdatedDateTime:
        getLoginData().lastUpdatedDateTime &&
        new Date(getLoginData().lastUpdatedDateTime)
          ?.toISOString()
          .substring(0, 10),
    };
    reset(defaultValues);
  }, [reset, setValue]);

  const submitForm = async (values: EditBOIEmployee): Promise<void> => {
    setEditEmployeeIsLoading(true);
    try {
      const variables = {
        staffUsername: values?.username,
        employeeid: getLoginData().personEmployeeID,
        firstname: values?.firstname,
        middleinitial: values.middleinitial,
        lastname: values?.lastname,
        username: values?.username,
        role: values?.role,
        grade: values?.grade,
        division: values?.division,
        department: values?.department,
        unit: values?.unit,
        location: values?.location,
        accountnumber: values?.accountnumber,
        sortcode: values?.sortcode,
        staffStatus: values?.staffStatus,
        isDeleted: false,
      };
      const res: any = await editEmployee(variables).unwrap();

      if (res?.statusCode === 200) {
        setEditEmployeeIsLoading(false);
        // refetchSingleEmployee();
      }
    } catch (error: any) {
      setEditEmployeeIsLoading(false);
      toast.error(error?.data?.responseMessage);
    }
  };

  return (
    <form className="m-auto w-[80%]" onSubmit={handleSubmit(submitForm)}>
      <Header1 className="text-center" mt="2rem" mb="0">
        User Profile
      </Header1>
      <Subtitle className="text-center">View Employee Detail</Subtitle>

      <Button
        isLoading={false}
        text="Go back"
        type="button"
        className="py-2 w-48 ml-auto mr-4 mb-6 lg:mr-12"
        size="sm"
        onClick={() => {
          navigate(-1);
        }}
      />

      <div className="flex items-center gap-10 mb-4">
        <Input
          type="text"
          className="basis-[30%]"
          label="First Name"
          register={register("firstname")}
          showLabel
          disabled
        />

        <Input
          type="text"
          className="basis-[30%]"
          label="Middle Initial"
          register={register("middleinitial")}
          showLabel
          disabled
        />

        <Input
          type="text"
          className="basis-[30%]"
          label="Last Name"
          register={register("lastname")}
          showLabel
          disabled
        />
      </div>

      <div className="flex items-center gap-10 mb-4">
        <Input
          type="text"
          className="basis-[30%]"
          label="User Name"
          register={register("username")}
          showLabel
          disabled
        />

        <Input
          type="text"
          className="basis-[30%]"
          label="Role"
          register={register("role")}
          showLabel
          disabled
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
          showLabel
          disabled
        />
        <Input
          type="text"
          className="basis-[30%]"
          label="Department"
          register={register("department")}
          showLabel
          disabled
        />
        <Input
          type="text"
          className="basis-[30%]"
          label="Unit"
          register={register("unit")}
          showLabel
          disabled
        />
      </div>

      <div className="flex items-center gap-10 mb-4">
        <Input
          type="text"
          className="basis-[30%]"
          label="Location"
          register={register("location")}
          showLabel
          disabled
        />

        <Input
          type="text"
          className="basis-[30%]"
          label="Account Number"
          register={register("accountnumber")}
          showLabel
          disabled
        />
        <Input
          type="text"
          className="basis-[30%]"
          label="Sort Code"
          register={register("sortcode")}
          showLabel
          disabled
        />
      </div>
      <div className="flex items-center gap-10 mb-4">
        <CustomSelect
          control={control}
          name="staffStatus"
          options={staffStatus}
          label="Status"
          className="w-[30%]"
          isLoading={isLoading}
        />
        <Input
          type="text"
          className="basis-[30%]"
          label="Created By"
          register={register("createdBy")}
          readOnly
          showLabel
          disabled
        />
        <Input
          type="text"
          className="basis-[30%]"
          label="Created Time"
          register={register("createdDateTime")}
          readOnly
          disabled
        />
      </div>

      <div className="flex items-center gap-10 mb-4">
        <Input
          type="text"
          className="basis-[30%]"
          label="Updated By"
          register={register("lastUpdatedBy")}
          readOnly
          showLabel
          disabled
        />
        <Input
          type="text"
          className="basis-[30%]"
          label="Last Updated Time"
          register={register("lastUpdatedDateTime")}
          readOnly
          showLabel
          disabled
        />
      </div>

      <div className="my-10 flex justify-center m-auto items-center">
        <Button
          text="Update"
          type="submit"
          className="py-3 w-[40%] text-center"
          size="sm"
          isLoading={editEmployeeIsLoading}
        />
      </div>
    </form>
  );
};

export { Profile };
