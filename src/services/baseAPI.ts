import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IPreappId } from 'types/API';

export const baseAPI = createApi({
    reducerPath: 'baseAPI',
    baseQuery: fetchBaseQuery({ baseUrl: '/bnpl/' }),
    tagTypes: ['PreapId'],
    endpoints: (build) => ({
        getPreappId: build.query<IPreappId, any>({
            query: (preappValues) => ({
                url: `v2/preapp`,
                method: 'POST',
                body: preappValues,
            }),
        }),
        sendSMS: build.mutation<any, any>({
            query: ({ body, preappId }) => ({
                url: `${preappId}/send-sms`,
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useGetPreappIdQuery, useSendSMSMutation } = baseAPI;
