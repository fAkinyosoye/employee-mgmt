import React, { useCallback, useEffect } from "react";

// import { Controller, useForm } from "react-hook-form";
// import { toast } from "react-toastify";

import { useFetchAllBOIEmployeesQuery } from "../../redux/services/mgmt-services";
import { Header1, Subtitle, Table } from "../atoms";
import { useNavigate } from "react-router-dom";
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
  const goToSinglePage = (item: any) => {
    navigate(`/employee-records/${item?.employeeid}`, {
      state: item,
    });
  };

  const getData = useCallback(() => {
    const result = employeeData?.map((item: any, i: number) => {
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
          <p className="text-xs font-normal">{`${firstname} ${
            middleinitial ?? ""
          } ${lastname}`}</p>
          // <p className="text-xs font-normal">{`${firstname} ${middleinitial}. ${lastname}`}</p>
        ),
        division: <p className="text-xs font-normal">{division}</p>,
        unit: <p className="text-xs font-normal">{unit}</p>,
        role: <p className="text-xs font-normal">{role}</p>,
        grade: <p className="text-xs font-normal">{grade}</p>,
        status: <p className="text-xs font-normal">{staffStatus}</p>,
        view: (
          <div
            onClick={() => goToSinglePage(item)}
            className="text-xs font-normal text-primary"
          >
            View more
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
