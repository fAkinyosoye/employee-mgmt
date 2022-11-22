import React, { useCallback, useEffect, useState } from "react";

// import { Controller, useForm } from "react-hook-form";
// import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

import {
  EmployeeDataType,
  useFetchAllBOIEmployeesQuery,
} from "../../redux/services/mgmt-services";
import { Button, Header1, Subtitle, Table } from "../atoms";
import Pagination from "../organisms/Pagination";
// import { dummyData } from "../utilities/employeeDummyData";

const EmployeeRecords = () => {
  const navigate = useNavigate();

  const pageSize = 10;

  const [currPageInfo, setCurrPageInfo] = useState<any>({
    pageNo: 1,
    pageSize: 10,
  });

  const {
    data: employeeData,
    refetch,
    isLoading,
  }: any = useFetchAllBOIEmployeesQuery({
    pageNumber: currPageInfo.pageNo,
    pageSize: currPageInfo.pageSize,
  });

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          // initialPage={pageNumber}
          // pagination={{
          //   from: Number(pageNumber - 1) * pageSize + 1,
          //   to: +pageNumber * response?.length,
          //   total: total,
          //   per_page: +pageSize,
          //   current: +pageNumber,
          // }}
        />
      </div>
      <Pagination
        transPerPage={currPageInfo.pageSize}
        totalTrans={1000}
        currentPage={currPageInfo.pageNo}
        lastPage={5}
        setCurrPageInfo={setCurrPageInfo}
        pageLimit={Number(pageSize)}
        currPageInfo={currPageInfo}
        refetch={refetch}
      />
    </div>
  );
};

export { EmployeeRecords };
