import { baseApi } from "./base-service";

export type FetchBOIEmployeeById = {
  employeeId: string;
};

export type FetchAllBOIEmployees = {
  pageNumber: number;
  pageSize: number;
};

export type CreateBOIEmployee = {
  staffUsername: string;
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
    fetchBOIEmployeeById: builder.query<void, FetchBOIEmployeeById>({
      query: (employeeId) => ({
        url: `${urlTemplate}/FetchBOIEmployeeByEmployeeId?employeeId=${employeeId}'`,
      }),
      transformResponse: (response: any) => response.data,
    }),
    fetchAllBOIEmployees: builder.query<
      EmployeeDataType[],
      FetchAllBOIEmployees
    >({
      query: (body) => ({
        url: `${urlTemplate}/FetchAllBOIEmployee?pageNumber=${body.pageNumber}&pageSize=${body.pageSize}`,
      }),
      transformResponse: (response: any) => response.data,
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
  useFetchAllBOIEmployeesQuery,
  useFetchBOIEmployeeByIdQuery,
  useFetchAllGradeLevelsQuery,
  useCreateBOIEmployeeMutation,
  useEditBOIEmployeeMutation,
} = mgmtServiceApi;
