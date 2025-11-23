import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { IPartnersList } from 'src/app/app-types';


const BASE_URL = import.meta.env.VITE_BASE_URL;

export const apiPartners = createApi({
  reducerPath: 'apiPartners',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Partners'],
  endpoints: (build) => ({
    getPartnersList: build.query<IPartnersList, void>({
      query: () => ({
        url: '/partners',
        method: 'GET',
      }),
      providesTags: ['Partners'],
      transformResponse: (response: { partners: IPartnersList }) => response.partners,
    }),
  }),
});

export const { useGetPartnersListQuery } = apiPartners;
