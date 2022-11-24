import moment from "moment";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
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
import { staffStatus } from "../utilities/helper";

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  let employeeID = "";

  try {
    employeeID = decodeURIComponent(id ?? "");
    // console.log("decoded", employeeID);
  } catch (error) {
    console.log(error);
  }

  const [editEmployee] = useEditBOIEmployeeMutation();

  const [editEmployeeIsLoading, setEditEmployeeIsLoading] =
    useState<boolean>(false);

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

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: singleEmployeeData && singleEmployeeData?.firstname,
      middleinitial: singleEmployeeData?.middleinitial,
      lastname: singleEmployeeData?.lastname,
      employeeid: singleEmployeeData?.employeeid,
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
      employeeid: singleEmployeeData?.employeeid,
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
        singleEmployeeData?.createdDateTime === "0001-01-01T00:00:00+00:00"
          ? null
          : moment(singleEmployeeData?.createdDateTime).format(
              "MMMM Do YYYY, h:mm:ss a"
            ),
      lastUpdatedDateTime:
        // singleEmployeeData?.lastUpdatedDateTime &&
        // new Date(singleEmployeeData?.lastUpdatedDateTime)
        //   ?.toISOString()
        //   .substring(0, 10),
        singleEmployeeData?.lastUpdatedDateTime &&
        singleEmployeeData?.lastUpdatedDateTime === "0001-01-01T00:00:00+00:00"
          ? null
          : moment(singleEmployeeData?.lastUpdatedDateTime).format(
              "MMMM Do YYYY, h:mm:ss a"
            ),
    };
    reset(defaultValues);
  }, [reset, singleEmployeeData]);

  const currentUser = JSON.parse(localStorage.getItem("user") ?? "");

  const submitForm = async (values: EditBOIEmployee): Promise<void> => {
    setEditEmployeeIsLoading(true);
    try {
      const variables = {
        staffUsername: currentUser?.personSAMAccountName,
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
              register={register("firstname", {
                required: "First name is required",
              })}
              error={errors?.firstname?.message}
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
              register={register("lastname", {
                required: "Last Name is Required",
              })}
              showLabel
              error={errors?.lastname?.message}
            />

            <Input
              type="text"
              className="basis-[45%] lg:basis-[30%]"
              label="Employee ID"
              register={register("employeeid", {
                required: "Employee ID is Required",
              })}
              showLabel
              error={errors?.employeeid?.message}
            />

            <Input
              type="text"
              className="basis-[45%] lg:basis-[30%]"
              label="User Name"
              register={register("username", {
                required: "Username is Required",
              })}
              showLabel
              error={errors?.username?.message}
            />

            <Input
              type="text"
              className="basis-[45%] lg:basis-[30%]"
              label="Role"
              register={register("role", {
                required: "Role is Required",
              })}
              showLabel
              error={errors?.role?.message}
            />

            <CustomSelect
              control={control}
              name="grade"
              options={gradeLevelDataFormatted}
              defaultValue={singleEmployeeData?.grade}
              label="Grade"
              className="w-[45%] lg:w-[30%]"
              isLoading={isLoading}
              rules={{
                required: "Grade is required",
              }}
              error={errors?.grade?.message}
            />

            <Input
              type="text"
              className="basis-[45%] lg:basis-[30%]"
              label="Division"
              register={register("division", {
                required: "Division is Required",
              })}
              showLabel
              error={errors?.division?.message}
            />
            <Input
              type="text"
              className="basis-[45%] lg:basis-[30%]"
              label="Department"
              register={register("department", {
                required: "Department is Required",
              })}
              showLabel
              error={errors?.department?.message}
            />
            <Input
              type="text"
              className="basis-[45%] lg:basis-[30%]"
              label="Unit"
              register={register("unit", {
                required: "Unit is Required",
              })}
              showLabel
              error={errors?.unit?.message}
            />
            <Input
              type="text"
              className="basis-[45%] lg:basis-[30%]"
              label="Location"
              showLabel
              register={register("location", {
                required: "Location is Required",
              })}
              error={errors?.location?.message}
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
              error={errors?.staffStatus?.message}
              rules={{
                required: "Status is required",
              }}
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
