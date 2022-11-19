import React, { useCallback } from "react";
import { Button, Input, Table } from "../atoms";
import { CustomSelect } from "../atoms/";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";

const TestPageOne = () => {
  const { control } = useForm();
  const testValues = [
    {
      label: "Option1",
      value: "Option1",
    },
    {
      label: "Option2",
      value: "Option2",
    },
  ];

  const dummyData = [
    {
      id: "1",
      name: "Employee One",
      grade: "Assistant Banking officer",
      status: "active",
      phoneNumber: "08139500243",
    },
    {
      id: "2",
      name: "Employee Two",
      grade: "Assistant Banking officer",
      status: "active",
      phoneNumber: "08139500243",
    },
    {
      id: "3",
      name: "Employee Three",
      grade: "Assistant Banking officer",
      status: "active",
      phoneNumber: "08139500243",
    },
  ];

  const getData = useCallback(() => {
    const result =
      dummyData &&
      dummyData?.map((item, i) => {
        return {
          name: <p className="text-xs font-normal">{item?.name}</p>,
          phoneNumber: (
            <p className="text-xs font-normal">{item?.phoneNumber}</p>
          ),
          status: <p className="text-xs font-normal">{item?.status}</p>,
          grade: <p className="text-xs font-normal">{item?.grade}</p>,
        };
      });
    return [...(result || [])];
  }, [dummyData]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Phone Number",
        accessor: "phoneNumber",
      },
      {
        Header: "STATUS",
        accessor: "status",
      },
      {
        Header: "Grade",
        accessor: "grade",
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), [getData]);

  // toast("Toast message");

  return (
    <div className="mt-8 mx-10">
      <Input type="text" />
      <CustomSelect control={control} options={testValues} name="testSelect" />
      <Button text="Sample Button" bgColor="#FF0000" isLoading={true} />
      <Button text="Sample Button" className="font-bold text-white" />

      <Table
        data={data}
        columns={columns}
        emptyStateText="About Customers"
        isLoading={false}
        ifHover
        ifPagination
      />
    </div>
  );
};

export { TestPageOne };
