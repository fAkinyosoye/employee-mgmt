import React, { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  EmployeeDataType,
  useFetchAllBOIEmployeesQuery,
} from "../../redux/services/mgmt-services";
import { Button, Header1, Subtitle, Table } from "../atoms";

const EmployeeRecords = () => {
  const navigate = useNavigate();

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

  const goToSinglePage = (item: any) => {
    navigate(`employee-records/${item?.employeeid}`);
  };

  const getData = useCallback(() => {
    const goToSinglePage = (item: any) => {
      navigate(`employee-records/${item?.employeeid}`, {
        state: item,
      });
    };

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
          <div className="flex items-center">
            <Button
              text="View"
              type="button"
              className="p-1 text-xs w-14 text-center"
              size="sm"
              onClick={() => goToSinglePage(item)}
            />

            <Button
              text="Edit"
              type="button"
              className="p-1 text-xs w-14 text-center"
              size="sm"
              onClick={() => goToSinglePage(item)}
            />
          </div>
        ),
      };
    });
    return [...(result || [])];
  }, [employeeData, navigate]);

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
        Header: "Actions",
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

      <div>
        <Button
          isLoading={false}
          text="Create Employee Record"
          type="button"
          className="py-2 w-48 ml-auto mr-4 lg:mr-12"
          size="sm"
        />
      </div>

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
