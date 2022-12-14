import React, { useCallback, useState } from "react";
import CsvDownloader from "react-csv-downloader";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  EmployeeDataType,
  useFetchAllBOIEmployeesQuery,
} from "../../../redux/services/mgmt-services";
import { Button, Colors, Header1, Input, Subtitle, Table } from "../../atoms";
import Pagination from "../../organisms/Pagination";

type CurrPageInfoTypes = {
  pageNo: number;
  pageSize: number;
  SearchParam: string;
};

const EmployeeRecords = () => {
  const navigate = useNavigate();

  const [currPageInfo, setCurrPageInfo] = useState<CurrPageInfoTypes>({
    pageNo: 1,
    pageSize: 10,
    SearchParam: "",
  });

  const [csvParams, setCsvParams] = useState<CurrPageInfoTypes>({
    pageNo: 1,
    pageSize: 1000000,
    SearchParam: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    data: allData,
    // refetch: allRefetch,
    isLoading: allLoading,
  }: any = useFetchAllBOIEmployeesQuery({
    pageNumber: currPageInfo.pageNo,
    pageSize: currPageInfo.pageSize,
    SearchParam: currPageInfo.SearchParam,
  });

  const {
    data: allCsvData,
    // refetch: allRefetch,
    isFetching: allCsvFetching,
  }: any = useFetchAllBOIEmployeesQuery({
    pageNumber: csvParams.pageNo,
    pageSize: csvParams.pageSize,
    SearchParam: csvParams.SearchParam,
  });

  // useEffect(() => {
  //   allRefetch();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  let employeeData: EmployeeDataType[] = allData?.data;
  let dataLength = employeeData?.length <= 1 ? 1 : allData?.count;
  // this is to cater for when it returns a search value, which usually returns one element that matches totally. So, 1 page.
  let lastPage = Math.ceil(dataLength / currPageInfo.pageSize);

  const submitForm = async (values: any): Promise<void> => {
    try {
      setCurrPageInfo({
        pageNo: 1,
        pageSize: 10,
        SearchParam: values.search,
      });
      // allRefetch();
    } catch (error) {
      console.log(error);
    }
  };

  const goToEmployeePage = () => {
    navigate(`create-employee`);
  };

  const csvColumns = React.useMemo(
    () => [
      {
        displayName: "S/N",
        id: "idx",
      },
      {
        displayName: "Employee ID",
        id: "employeeid",
      },
      {
        displayName: "Name",
        id: "employeeName",
      },
      {
        displayName: "Username",
        id: "username",
      },
      {
        displayName: "Division",
        id: "division",
      },
      {
        displayName: "Unit",
        id: "unit",
      },
      {
        displayName: "Role",
        id: "role",
      },
      {
        displayName: "Grade",
        id: "grade",
      },
      {
        displayName: "Status",
        id: "staffStatus",
      },
    ],
    []
  );

  const getCsvData = useCallback(() => {
    let csvDataArr: any[] = [];

    // setCurrPageInfo((curr) => {
    //   return {
    //     ...curr,
    //     pageSize: 100000,
    //   };
    // });
    // this is causing too many re-renders, had to create a new query where pageSize is permanently 1000000

    allCsvData?.data?.forEach((item: EmployeeDataType, index: number) => {
      const {
        firstname,
        middleinitial,
        lastname,
        username,
        division,
        unit,
        employeeid,
        role,
        grade,
        staffStatus,
      } = item;

      csvDataArr.push({
        idx: index + 1,
        employeeid,
        employeeName: `${firstname} ${middleinitial ?? ""} ${lastname}`,
        username,
        division,
        unit,
        role,
        grade,
        staffStatus,
      });
    });

    return [...(csvDataArr || [])];
  }, [allCsvData?.data]);

  const csvData = React.useMemo(() => getCsvData(), [getCsvData]);

  const getData = useCallback(() => {
    const goToSinglePage = (item: any) => {
      const encoded = encodeURIComponent(item?.employeeid);
      navigate(`employee-records/${encoded}`, {
        state: item,
      });
    };

    const result = employeeData?.map(
      (item: EmployeeDataType, index: number) => {
        const {
          firstname,
          middleinitial,
          lastname,
          username,
          division,
          unit,
          employeeid,
          // role,
          grade,
          staffStatus,
        } = item;
        return {
          id: (
            <p>
              {Number(currPageInfo.pageNo - 1) * currPageInfo.pageSize +
                index +
                1}
            </p>
          ),
          employeeID: <p className="text-sm font-normal">{employeeid}</p>,
          name: (
            <p className="text-sm font-normal">{`${firstname} ${
              middleinitial ?? ""
            } ${lastname}`}</p>
          ),
          username: <p className="text-sm font-normal">{username}</p>,
          division: <p className="text-sm font-normal">{division}</p>,
          unit: <p className="text-sm font-normal">{unit}</p>,
          // role: <p className="text-sm font-normal">{role}</p>,
          grade: <p className="text-sm font-normal">{grade}</p>,
          status: <p className="text-sm font-normal">{staffStatus}</p>,
          view: (
            <div className="flex items-center justify-center">
              {/* <Button
                text="View"
                type="button"
                className="p-3 text-xs w-28"
                size="sm"
                onClick={() => goToSinglePage(item)}
              /> */}
              <span
                onClick={() => goToSinglePage(item)}
                className="bg-boiGreen text-white text-xs font-medium mr-2 px-3 py-1 rounded"
              >
                View
              </span>
              <span
                onClick={() => goToSinglePage(item)}
                className="bg-boiGreen text-white text-xs font-medium mr-2 px-3 py-1 rounded"
                style={{ backgroundColor: Colors.boiBlue }}
              >
                Edit
              </span>
            </div>
          ),
        };
      }
    );
    return [...(result || [])];
  }, [employeeData, navigate, currPageInfo]);

  const columns = React.useMemo(
    () => [
      {
        Header: "S/N",
        accessor: "id",
      },
      {
        Header: "Employee ID",
        accessor: "employeeID",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Username",
        accessor: "username",
      },
      // {
      //   Header: "Division",
      //   accessor: "division",
      // },
      {
        Header: "Unit",
        accessor: "unit",
      },
      // {
      //   Header: "Role",
      //   accessor: "role",
      // },
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

  const getTime = () => {
    const today = new Date();
    return today.toISOString();
  };

  return (
    <div className="mt-20">
      <Header1 className="text-center" mt="2rem" mb="0">
        Employee Records
      </Header1>
      <Subtitle className="text-center">
        View all employee records here:
      </Subtitle>

      <div className="flex flex-col lg:flex-row lg:justify-between mx-4 lg:mx-12">
        {/* <SearchInput placeholder="Enter employee username, email" /> */}

        <form
          className="flex flex-row align-middle mb-2 lg:mb-0"
          onSubmit={handleSubmit(submitForm)}
        >
          <Input
            type="text"
            className="flex flex-col justify-center m-0 mr-2 h-full border-0 w-64 "
            inputHeight="h-[45px]"
            register={register("search")}
            placeholder="Search by username, employeeID"
            error={errors?.search?.message}
          />
          <Button
            isLoading={allLoading}
            text="Search"
            type="submit"
            className="py-2 w-24 m-0"
            size="sm"
          />
        </form>
        <div className="flex flex-row">
          <CsvDownloader
            filename={`Employee_Records_${getTime()}`}
            extension=".csv"
            separator=";"
            // wrapColumnChar="'"
            columns={csvColumns}
            datas={csvData}
            meta
          >
            <Button
              isLoading={allCsvFetching}
              text="Download CSV format"
              type="button"
              className="py-2 w-48 mr-4"
              size="sm"
            />
            {/* <button>
              {allCsvFetching ? "Loading" : "Download CSV format"}
            </button> */}
          </CsvDownloader>

          <Button
            isLoading={false}
            text="Create Employee Record"
            type="button"
            className="py-2 w-48 lg:ml-auto"
            size="sm"
            onClick={goToEmployeePage}
          />
        </div>
      </div>

      <div className="px-4 lg:px-12 py-5">
        <Table
          data={data}
          columns={columns}
          emptyStateText="Employee Info"
          isLoading={allLoading}
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
        totalTrans={dataLength}
        currentPage={currPageInfo.pageNo}
        lastPage={lastPage}
        setCurrPageInfo={setCurrPageInfo}
        pageLimit={Number(currPageInfo.pageSize)}
        currPageInfo={currPageInfo}
        // refetch={allRefetch}
      />
    </div>
  );
};

export { EmployeeRecords };
