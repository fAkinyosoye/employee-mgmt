import React, { useCallback, useEffect } from "react";

// import { Controller, useForm } from "react-hook-form";
// import { toast } from "react-toastify";

import {
  EmployeeDataType,
  useFetchAllBOIEmployeesQuery,
} from "../../redux/services/mgmt-services";
import { Button, Header1, Subtitle, Table } from "../atoms";
// import { dummyData } from "../utilities/employeeDummyData";

const EmployeeRecords = () => {
  const {
    data: employeeData,
    refetch,
    isLoading,
  }: any = useFetchAllBOIEmployeesQuery({
    pageNumber: 1,
    pageSize: 20,
  });

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = useCallback(() => {
    const result = employeeData?.map((item: EmployeeDataType, i: number) => {
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
          <p className="text-sm font-normal">{`${firstname} ${
            middleinitial ?? ""
          } ${lastname}`}</p>
        ),
        division: <p className="text-sm font-normal">{division}</p>,
        unit: <p className="text-sm font-normal">{unit}</p>,
        role: <p className="text-sm font-normal">{role}</p>,
        grade: <p className="text-sm font-normal">{grade}</p>,
        status: <p className="text-sm font-normal">{staffStatus}</p>,
        view: (
          <div>
            <Button
              isLoading={false}
              text="View More"
              type="button"
              className="p-2 w-28"
              size="sm"
            />
          </div>
        ),
      };
    });
    return [...(result || [])];
  }, [employeeData]);

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
      {
        Header: "",
        accessor: "view",
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), [getData]);

  return (
    <div className="mt-20">
      <Header1 className="text-center" mt="2rem" mb="0">
        Employee Records
      </Header1>
      <Subtitle className="text-center">
        View all employee records here:
      </Subtitle>

      <div className="px-4 lg:px-12 py-5">
        <Table
          data={data}
          columns={columns}
          emptyStateText="Employee Info"
          isLoading={isLoading}
          ifHover
          ifPagination
        />
      </div>
    </div>
  );
};

export { EmployeeRecords };
