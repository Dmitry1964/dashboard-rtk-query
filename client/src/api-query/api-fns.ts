import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { IPartnerInfo } from 'src/app/app-types';
// import { IPartnerInfo } from 'src/app/app-types';

const BASE_URL = 'https://api-fns.ru/api';


export const apiFns = createApi({
  reducerPath: 'apiFns',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['FnsData'],
  endpoints: (build) => ({
    getDataPartner: build.query<IPartnerInfo | null, string>({
      query: (code) => ({
        url: `erg?reg=${code}&key=${import.meta.env.VITE_API_FNS_KEY }`,
        method: 'GET',
      }),
      transformResponse: (response: unknown) => {
        const resp = response as { data: IPartnerInfo };
        return resp.data || null;
      },
      providesTags: ['FnsData'],
    }),
  }),
});

export const { useLazyGetDataPartnerQuery } = apiFns;