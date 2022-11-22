import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  EditBOIEmployee,
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

const CreateEmployee = () => {
  const navigate = useNavigate();

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

  const { register, control, handleSubmit, reset } = useForm();

  const submitForm = async (values: EditBOIEmployee): Promise<void> => {
    console.log("jhsdbfjhdsbfhsj");
    // try {
    //   const variables = {
    //     staffUsername: values?.username,
    //     firstname: values?.firstname,
    //     middleinitial: values.middleinitial,
    //     lastname: values?.lastname,
    //     username: values?.username,
    //     role: values?.role,
    //     grade: values?.grade,
    //     division: values?.division,
    //     department: values?.department,
    //     unit: values?.unit,
    //     location: values?.location,
    //     accountnumber: values?.accountnumber,
    //     sortcode: values?.sortcode,
    //     staffStatus: values?.staffStatus,
    //     isDeleted: false,
    //   };
    //   // const res: any = await editEmployee(variables).unwrap();
    //   if (res?.statusCode === 200) {
    //     setEditEmployeeIsLoading(false);
    //     refetchSingleEmployee();
    //   }
    // } catch (error: any) {
    //   setEditEmployeeIsLoading(false);
    //   toast.error(error?.data?.responseMessage);
    //  }
  };

  return (
    <form className="m-auto w-[80%]" onSubmit={handleSubmit(submitForm)}>
      <Header1 className="text-center" mt="2rem" mb="0">
        Create Employee
      </Header1>
      <Subtitle className="text-center">Create New Employee</Subtitle>

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

export { CreateEmployee };
