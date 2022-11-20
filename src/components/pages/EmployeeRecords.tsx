import React, { useCallback } from "react";
// import { Controller, useForm } from "react-hook-form";
// import { toast } from "react-toastify";

import { Table } from "../atoms";
import { dummyData } from "../utilities/employeeDummyData";

const EmployeeRecords = () => {
  const getData = useCallback(() => {
    const result = dummyData?.map((item, i) => {
      const {
        firstname,
        middleinitial,
        lastname,
        division,
        unit,
        role,
        grade,
        staffStatus,
      } = item;
      return {
        name: (
          <p className="text-xs font-normal">{`${firstname} ${middleinitial}. ${lastname}`}</p>
        ),
        division: <p className="text-xs font-normal">{division}</p>,
        unit: <p className="text-xs font-normal">{unit}</p>,
        role: <p className="text-xs font-normal">{role}</p>,
        grade: <p className="text-xs font-normal">{grade}</p>,
        status: <p className="text-xs font-normal">{staffStatus}</p>,
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
        Header: "Division",
        accessor: "division",
      },
      {
        Header: "Unit",
        accessor: "unit",
      },
      {
        Header: "Role",
        accessor: "role",
      },
      {
        Header: "Grade",
        accessor: "grade",
      },
      {
        Header: "Status",
        accessor: "status",
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
        emptyStateText="Employee Info"
        isLoading={false}
        ifHover
        ifPagination
      />
    </div>
  );
};

export { EmployeeRecords };