import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ICode, IPreappId, IPreappIdData } from 'types/API';

export const baseAPI = createApi({
    reducerPath: 'baseAPI',
    baseQuery: fetchBaseQuery({ baseUrl: '/bnpl/' }),
    tagTypes: ['PreapId'],
    endpoints: (build) => ({
        getPreappId: build.query<IPreappIdData, any>({
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
        verifySMS: build.mutation<any, ICode & IPreappId>({
            query: ({ code, preappId }) => ({
                url: `${preappId}/verify-sms`,
                method: 'POST',
                body: code,
            }),
        }),
    }),
});

export const { useGetPreappIdQuery, useSendSMSMutation, useVerifySMSMutation } = baseAPI;
