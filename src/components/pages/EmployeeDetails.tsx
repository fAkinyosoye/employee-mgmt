import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import {
  EditBOIEmployee,
  useEditBOIEmployeeMutation,
  useFetchAllGradeLevelsQuery,
  useFetchBOIEmployeeByIdQuery,
} from "../../redux/services/mgmt-services";
import {
  Button,
  CustomSelect,
  Header1,
  Input,
  Loader,
  Subtitle,
} from "../atoms";

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  let employeeID = id ?? "";

  const [editEmployee] = useEditBOIEmployeeMutation();

  const [editEmployeeIsLoading, setEditEmployeeIsLoading] = useState(false);

  const {
    data: gradeLevelData,
    refetch,
    isLoading,
  }: any = useFetchAllGradeLevelsQuery();

  const {
    data: singleEmployeeData,
    refetch: refetchSingleEmployee,
    isLoading: singleEmployeeLoading,
  }: any = useFetchBOIEmployeeByIdQuery(employeeID);

  useEffect(() => {
    refetch();
    refetchSingleEmployee();
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

  const { register, control, handleSubmit, reset } = useForm({
    defaultValues: {
      firstname: singleEmployeeData && singleEmployeeData?.firstname,
      middleinitial: singleEmployeeData?.middleinitial,
      lastname: singleEmployeeData?.lastname,
      username: singleEmployeeData?.username,
      role: singleEmployeeData?.role,
      grade: singleEmployeeData?.grade,
      division: singleEmployeeData?.division,
      department: singleEmployeeData?.department,
      unit: singleEmployeeData?.unit,
      location: singleEmployeeData?.location,
      accountnumber: singleEmployeeData?.accountnumber,
      sortcode: singleEmployeeData?.sortcode,
      staffStatus: singleEmployeeData?.staffStatus,
      createdBy: singleEmployeeData?.createdBy,
      lastUpdatedBy: singleEmployeeData?.lastUpdatedBy,
      createdDateTime: singleEmployeeData?.createdDateTime,
      lastUpdatedDateTime: singleEmployeeData?.lastUpdatedDateTime,
    },
  });

  useEffect(() => {
    const defaultValues = {
      firstname: singleEmployeeData && singleEmployeeData?.firstname,
      middleinitial: singleEmployeeData?.middleinitial,
      lastname: singleEmployeeData?.lastname,
      username: singleEmployeeData?.username,
      role: singleEmployeeData?.role,
      grade: singleEmployeeData?.grade,
      division: singleEmployeeData?.division,
      department: singleEmployeeData?.department,
      unit: singleEmployeeData?.unit,
      location: singleEmployeeData?.location,
      accountnumber: singleEmployeeData?.accountnumber,
      sortcode: singleEmployeeData?.sortcode,
      staffStatus: singleEmployeeData?.staffStatus,
      createdBy: singleEmployeeData?.createdBy,
      lastUpdatedBy: singleEmployeeData?.lastUpdatedBy,
      createdDateTime:
        singleEmployeeData?.createdDateTime &&
        new Date(singleEmployeeData?.createdDateTime)
          ?.toISOString()
          .substring(0, 10),
      lastUpdatedDateTime:
        singleEmployeeData?.lastUpdatedDateTime &&
        new Date(singleEmployeeData?.lastUpdatedDateTime)
          ?.toISOString()
          .substring(0, 10),
    };
    reset(defaultValues);
  }, [reset, singleEmployeeData]);

  const submitForm = async (values: EditBOIEmployee): Promise<void> => {
    setEditEmployeeIsLoading(true);
    try {
      const variables = {
        staffUsername: values?.username,
        employeeid: singleEmployeeData?.employeeid,
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
        refetchSingleEmployee();
      }
    } catch (error: any) {
      setEditEmployeeIsLoading(false);
      toast.error(error?.data?.responseMessage);
    }
  };

  return (
    <>
      {singleEmployeeLoading ? (
        <Loader />
      ) : (
        <form
          className="m-auto w-[90%] lg:w-[80%]"
          onSubmit={handleSubmit(submitForm)}
        >
          <Header1 className="text-center" mt="2rem" mb="0">
            Employee Records
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
            backBtn
          />

          <div className="flex items-center flex-wrap gap-4 lg:gap-10 mb-4">
            <Input
              type="text"
              className="basis-[45%] lg:basis-[30%]"
              label="First Name"
              register={register("firstname")}
              showLabel
            />
            <Input
              type="text"
              className="basis-[45%] lg:basis-[30%]"
              label="Middle Initial"
              register={register("middleinitial")}
              showLabel
            />

            <Input
              type="text"
              className="basis-[45%] lg:basis-[30%]"
              label="Last Name"
              register={register("lastname")}
              showLabel
            />

            <Input
              type="text"
              className="basis-[45%] lg:basis-[30%]"
              label="User Name"
              register={register("username")}
              showLabel
            />

            <Input
              type="text"
              className="basis-[45%] lg:basis-[30%]"
              label="Role"
              register={register("role")}
              showLabel
            />

            <CustomSelect
              control={control}
              name="grade"
              options={gradeLevelDataFormatted}
              label="Grade"
              className="w-[45%] lg:w-[30%]"
              isLoading={isLoading}
            />
            <Input
              type="text"
              className="basis-[45%] lg:basis-[30%]"
              label="Division"
              register={register("division")}
              showLabel
            />
            <Input
              type="text"
              className="basis-[45%] lg:basis-[30%]"
              label="Department"
              register={register("department")}
              showLabel
            />
            <Input
              type="text"
              className="basis-[45%] lg:basis-[30%]"
              label="Unit"
              register={register("unit")}
              showLabel
            />
            <Input
              type="text"
              className="basis-[45%] lg:basis-[30%]"
              label="Location"
              register={register("location")}
              showLabel
            />
            <Input
              type="text"
              className="basis-[45%] lg:basis-[30%]"
              label="Account Number"
              register={register("accountnumber")}
              showLabel
            />
            <Input
              type="text"
              className="basis-[45%] lg:basis-[30%]"
              label="Sort Code"
              register={register("sortcode")}
              showLabel
            />
            <CustomSelect
              control={control}
              name="staffStatus"
              options={staffStatus}
              label="Status"
              className="w-[45%] lg:w-[30%]"
              isLoading={isLoading}
            />
            <Input
              type="text"
              className="basis-[45%] lg:basis-[30%]"
              label="Created By"
              register={register("createdBy")}
              readOnly
              showLabel
            />
            <Input
              type="text"
              className="basis-[45%] lg:basis-[30%]"
              label="Created Time"
              register={register("createdDateTime")}
              readOnly
              showLabel
            />
            <Input
              type="text"
              className="basis-[45%] lg:basis-[30%]"
              label="Updated By"
              register={register("lastUpdatedBy")}
              readOnly
              showLabel
            />
            <Input
              type="text"
              className="basis-[45%] lg:basis-[30%]"
              label="Last Updated Time"
              register={register("lastUpdatedDateTime")}
              readOnly
              showLabel
            />
          </div>

          <div className="flex items-center gap-10 mb-4"></div>

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
      )}
    </>
  );
};

export { EmployeeDetails };
