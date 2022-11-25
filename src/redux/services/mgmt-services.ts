import { baseApi } from "./base-service";

export type FetchBOIEmployeeById = {
  employeeId: string;
};

export type FetchAllBOIEmployees = {
  pageNumber: number;
  pageSize: number;
  SearchParam: string;
};

export type CreateBOIEmployee = {
  createdBy: string;
  employeeid: string;
  firstname: string;
  middleinitial: string;
  lastname: string;
  username: string;
  role: string;
  grade: string;
  division: string;
  department: string;
  unit: string;
  location: string;
  accountnumber: string;
  sortcode: string;
  staffStatus: string;
  isDeleted: boolean;
};

export type EditBOIEmployee = {
  staffUsername?: string;
  employeeid?: string;
  firstname?: string;
  middleinitial?: string;
  lastname?: string;
  username?: string;
  role?: string;
  grade?: string;
  division?: string;
  department?: string;
  unit?: string;
  location?: string;
  accountnumber?: string;
  sortcode?: string;
  staffStatus?: string;
  isDeleted?: boolean;
  createdBy?: string;
  createdDateTime: string;
};

export type EmployeeDataType = {
  employeeid: string;
  firstname: string;
  middleinitial: string;
  lastname: string;
  username: string;
  role: string;
  grade: string;
  division: string;
  department: string;
  unit: string;
  location: string;
  accountnumber: string;
  sortcode: string;
  staffStatus: "Active" | "Inactive";
  createdDateTime: string;
  createdBy: string | null;
  lastUpdatedDateTime: string;
  lastUpdatedBy: string | null;
  isDeleted: boolean;
};

const urlTemplate = "/api/BOIEmployee";

export const mgmtServiceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // searchBOIEmployee: builder.query<void, string>({
    //   query: (searchParam) => ({
    //     url: `${urlTemplate}/SearchEmployee?SearchParam=${searchParam}`,
    //   }),
    //   transformResponse: (response: any) => response.data,
    // }),
    fetchBOIEmployeeById: builder.query<void, string>({
      query: (employeeId) => ({
        url: `${urlTemplate}/FetchBOIEmployeeByEmployeeId?employeeId=${employeeId}`,
      }),
      transformResponse: (response: any) => response.data,
    }),
    fetchAllBOIEmployees: builder.query<
      EmployeeDataType[],
      FetchAllBOIEmployees
    >({
      query: (body) => ({
        url: `${urlTemplate}/FetchAllBOIEmployee?pageNumber=${body.pageNumber}&pageSize=${body.pageSize}&SearchParam=${body.SearchParam}`,
      }),
      transformResponse: (response: any) => response,
    }),
    fetchAllGradeLevels: builder.query<void, void>({
      query: () => ({
        url: `${urlTemplate}/FetchAllGradeLevels`,
      }),
      transformResponse: (response: any) => response.data,
    }),
    createBOIEmployee: builder.mutation<void, CreateBOIEmployee>({
      query: (body) => {
        return {
          url: `${urlTemplate}/CreateBOIEmployee`,
          method: "POST",
          body: body,
        };
      },
    }),
    editBOIEmployee: builder.mutation<void, EditBOIEmployee>({
      query: (body) => {
        return {
          url: `${urlTemplate}/EditBOIEmployee`,
          method: "POST",
          body: body,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  // useSearchBOIEmployeeQuery,
  useFetchAllBOIEmployeesQuery,
  useFetchBOIEmployeeByIdQuery,
  useFetchAllGradeLevelsQuery,
  useCreateBOIEmployeeMutation,
  useEditBOIEmployeeMutation,
} = mgmtServiceApi;
