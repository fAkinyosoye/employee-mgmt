import { baseApi } from "./base-service";

export interface LoginRequest {
  emailOrUserName: string;
  password: string;
}

export const authServiceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<any, LoginRequest>({
      query: (body) => {
        return {
          url: `/api/UserActiveDirectory/AuthenticateAndGetUserDetails`,
          method: "POST",
          body: body,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = authServiceApi;
