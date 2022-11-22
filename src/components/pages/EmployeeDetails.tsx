import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
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
  Label,
  Subtitle,
} from "../atoms";

const EmployeeDetails = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const [editEmployee] = useEditBOIEmployeeMutation();

  const [editEmployeeIsLoading, setEditEmployeeIsLoading] = useState(false);

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

  const { register, control, handleSubmit } = useForm({
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
      staffStatus: state?.staffStatus,
      createdBy: state?.createdBy,
      lastUpdatedBy: state?.lastUpdatedBy,
      createdDateTime: state?.createdDateTime,
      lastUpdatedDateTime: state?.lastUpdatedDateTime,
    },
  });

  const submitForm = async (values: EditBOIEmployee): Promise<void> => {
    setEditEmployeeIsLoading(true);
    try {
      const variables = {
        staffUsername: values?.username,
        // employeeid: state?.employeeid,
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
      console.log(res);

      if (res?.statusCode === 200) {
        setEditEmployeeIsLoading(false);
      }
    } catch (error: any) {
      toast.error(
        error?.data?.responseMessage
        // error?.data?.responseMessage === error?.data?.responseMessage
      );
    }
  };

  return (
    <form className="m-auto w-[80%]" onSubmit={handleSubmit(submitForm)}>
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
        />
        <Input
          type="text"
          className="basis-[30%]"
          label="Created Time"
          register={register("createdDateTime")}
          readOnly
        />
      </div>

      <div className="flex items-center gap-10 mb-4">
        <Input
          type="text"
          className="basis-[30%]"
          label="Updated By"
          register={register("lastUpdatedBy")}
          readOnly
        />
        <Input
          type="text"
          className="basis-[30%]"
          label="Last Updated Time"
          register={register("lastUpdatedDateTime")}
          readOnly
        />
      </div>
      <Button
        text="Update"
        type="submit"
        className="py-3 w-full text-center"
        size="sm"
        isLoading={editEmployeeIsLoading}
      />
    </form>
  );
};

export { EmployeeDetails };

// form values

// {
//   "firstname": "Test Amaka",
//   "middleinitial": "",
//   "lastname": "Stephanie",
//   "username": "estephanie",
//   "role": "Intern",
//   "grade": "DGM",
//   "division": "Risk Management",
//   "department": "Risk Management",
//   "unit": "Risk Management",
//   "location": "Lagos",
//   "accountnumber": "0123456799",
//   "sortcode": "123456789",
//   "createdBy": null,
//   "lastUpdatedBy": null,
//   "createdDateTime": "0001-01-01T00:00:00+00:00",
//   "lastUpdatedDateTime": "0001-01-01T00:00:00+00:00"
// }

// state values
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
//   "staffStatus": "Active",
//   "createdDateTime": "0001-01-01T00:00:00+00:00",
//   "createdBy": null,
//   "lastUpdatedDateTime": "0001-01-01T00:00:00+00:00",
//   "lastUpdatedBy": null,
//   "isDeleted": false
// }
