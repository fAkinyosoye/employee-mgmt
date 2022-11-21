import React, { useCallback, useEffect } from "react";
// import { Controller, useForm } from "react-hook-form";
// import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

import {
  EmployeeDataType,
  useFetchAllBOIEmployeesQuery,
} from "../../redux/services/mgmt-services";
import { Button, Header1, Subtitle, Table } from "../atoms";
// import { dummyData } from "../utilities/employeeDummyData";

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

  // navigate(`/oystr-identity/customers/${id}/cac-number/directors`, {
  //   state: companyDetails?.directors,
  // });

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
          <div>
            <Button
              onClick={() => goToSinglePage(item)}
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
          // icon={<FontAwesomeIcon icon="fa-solid fa-plus" />}
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
