import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = "http://localhost:3001";

export const departmentsApi = createApi({
  reducerPath: "departmentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${url}/departments` }),
  endpoints: (builder) => ({
    getDepartments: builder.query({
      query: () => `departments`,
    }),
  }),
});

export const { useGetDepartmentsQuery } = departmentsApi;
