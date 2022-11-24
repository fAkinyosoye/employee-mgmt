import React, { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { Button, CustomSelect, Input, PasswordInput, Table } from "../atoms";

const ComponentsPage = () => {
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

  const getData = useCallback(() => {
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

    const result =
      dummyData &&
      dummyData?.map((item, i) => {
        return {
          name: <p className="text-sm font-normal">{item?.name}</p>,
          phoneNumber: (
            <p className="text-sm font-normal">{item?.phoneNumber}</p>
          ),
          status: <p className="text-sm font-normal">{item?.status}</p>,
          grade: <p className="text-sm font-normal">{item?.grade}</p>,
        };
      });
    return [...(result || [])];
  }, []);

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

  toast("Toast message");

  return (
    <div className="mt-8 mx-10">
      <Input type="text" />
      <CustomSelect control={control} options={testValues} name="testSelect" />
      <Button
        type="button"
        text="Sample Button"
        bgColor="#FF0000"
        isLoading={true}
      />
      <Button
        type="button"
        text="Sample Button"
        className="font-bold text-white"
      />

      <Table
        data={data}
        columns={columns}
        emptyStateText="About Customers"
        isLoading={false}
        ifHover
        ifPagination
      />
      <PasswordInput />
    </div>
  );
};

export { ComponentsPage };
