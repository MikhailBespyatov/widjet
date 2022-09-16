import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ICode, IPreappId, IPreappIdData } from 'types/API';

export const baseAPI = createApi({
    reducerPath: 'baseAPI',
    baseQuery: fetchBaseQuery({ baseUrl: '/bnpl/' }),
    tagTypes: ['PreapId', 'Status'],
    endpoints: (build) => ({
        getStatus: build.query<any, any>({
            query: (preappId) => ({
                url: `${preappId}/status`,
            }),
        }),
        getPreappId: build.query<any, IPreappIdData>({
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
                body: { code },
            }),
        }),
        getUCards: build.query<any, string>({
            query: (preappId) => ({
                url: `${preappId}/ucards`,
            }),
        }),
        useCard: build.mutation({
            query: ({ card, preappId }) => ({
                url: `${preappId}/use-card`,
                method: 'POST',
                body: card,
            }),
        }),
        ecomStart: build.mutation({
            query: (preappId) => ({
                url: `${preappId}/ecom_start`,
                method: 'POST',
            }),
        }),
        cardLink: build.mutation({
            query: ({ data, preappId }) => ({
                url: `${preappId}/cardLink`,
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const {
    useGetPreappIdQuery,
    useSendSMSMutation,
    useVerifySMSMutation,
    useGetStatusQuery,
    useGetUCardsQuery,
    useUseCardMutation,
    useEcomStartMutation,
    useCardLinkMutation,
} = baseAPI;
