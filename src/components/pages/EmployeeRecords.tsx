import React, { useCallback } from "react";
// import { Controller, useForm } from "react-hook-form";
// import { toast } from "react-toastify";

import { Table } from "../atoms";

const EmployeeRecords = () => {
  const getData = useCallback(() => {
    const dummyData = [
      {
        id: "1",
        name: "Employee One",
        email: "employeeone@boi.ng",
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
          name: <p className="text-xs font-normal">{item?.name}</p>,
          phoneNumber: (
            <p className="text-xs font-normal">{item?.phoneNumber}</p>
          ),
          status: <p className="text-xs font-normal">{item?.status}</p>,
          grade: <p className="text-xs font-normal">{item?.grade}</p>,
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

  return (
    <div>
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

export { EmployeeRecords };
