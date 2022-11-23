import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  CreateBOIEmployee,
  useCreateBOIEmployeeMutation,
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
  const [createEmployee] = useCreateBOIEmployeeMutation();

  const [createEmployeeIsLoading, setCreateEmployeeIsLoading] = useState(false);

  const {
    data: createEmployeeData,
    refetch,
    isLoading,
  }: any = useFetchAllGradeLevelsQuery();

  const { data: gradeLevelData, refetch: refetchCreateEmployee }: any =
    useFetchAllGradeLevelsQuery();

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

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitForm = async (values: CreateBOIEmployee): Promise<void> => {
    try {
      const variables = {
        staffUsername: "estephanie",
        employeeid: "1121",
        firstname: values?.firstname,
        middleinitial: values?.middleinitial,
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
        staffStatus: "Active",
        isDeleted: false,
      };
      const res: any = await createEmployee(variables).unwrap();
      if (res?.statusCode === 200) {
        setCreateEmployeeIsLoading(false);
        toast(res?.responseMessage);
        navigate("/");
      }
    } catch (error: any) {
      setCreateEmployeeIsLoading(false);
      toast.error(error?.data?.responseMessage);
    }
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

      <div className="flex items-center flex-wrap gap-4 lg:gap-10 mb-4">
        <Input
          type="text"
          className="basis-[45%] lg:basis-[30%]"
          label="First Name"
          register={register("firstname", {
            required: "First name is required",
          })}
          showLabel
          error={errors?.firstname?.message}
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
          register={register("location", {
            required: "Location is Required",
          })}
          showLabel
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
      </div>

      {/* <div className="flex items-center gap-10 mb-4">
     
      </div> */}

      {/* <div className="flex items-center gap-10 mb-4">
       
      </div> */}

      <div className="flex items-center gap-10 mb-4"></div>

      <div className="my-10 flex justify-center m-auto items-center">
        <Button
          text="Create"
          type="submit"
          className="py-3 w-[40%] text-center"
          size="sm"
          isLoading={createEmployeeIsLoading}
        />
      </div>
    </form>
  );
};

export { CreateEmployee };
