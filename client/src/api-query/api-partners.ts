import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { PartnerRoles } from 'src/app/app-constans';
import { IPartnersList } from 'src/app/app-types';


const BASE_URL = import.meta.env.VITE_BASE_URL;

export const apiPartners = createApi({
  reducerPath: 'apiPartners',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Partners'],
  endpoints: (build) => ({
    getPartnersList: build.query<IPartnersList, PartnerRoles>({
      query: (role) => ({
        url: '/partners',
        method: 'GET',
        params: role && role !== PartnerRoles.All ? { role } : {},
      }),
      providesTags: ['Partners'],
      transformResponse: (response: { partners: IPartnersList }, _meta, arg) => {
        if (!arg || arg === PartnerRoles.All) {
          return response.partners;
        }
        return response.partners.filter((partner) => partner.roles === arg);
      },
    }),
  }),
});

export const { useGetPartnersListQuery } = apiPartners;
