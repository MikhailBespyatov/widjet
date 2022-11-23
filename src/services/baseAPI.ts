import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ICode, IPreappId, IPreappIdData } from 'types/API';
import { baseUrl } from '../constants/urls';

export const baseAPI = createApi({
    reducerPath: 'baseAPI',
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/api/bnpl/` }),
    tagTypes: ['PreapId', 'Status'],
    endpoints: (build) => ({
        getStatus: build.query<any, any>({
            query: (preappId) => ({
                url: `${preappId}/status`,
            }),
        }),
        getPreappId: build.query<any, IPreappIdData>({
            query: (preappValues) => ({
                url: `preapp`,
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
        cancelOrder: build.mutation({
            query: (preappId: string) => ({
                url: `${preappId}/cancel`,
                method: 'POST',
            }),
        }),
        proceed: build.mutation({
            query: (preappId: string) => ({
                url: `${preappId}/proceed`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        }),
        duplicate: build.mutation({
            query: (preappId: string) => ({
                url: `${preappId}/duplicate`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        }),
    }),
});

export const {
    useDuplicateMutation,
    useProceedMutation,
    useGetPreappIdQuery,
    useSendSMSMutation,
    useVerifySMSMutation,
    useGetStatusQuery,
    useLazyGetStatusQuery,
    useGetUCardsQuery,
    useUseCardMutation,
    useEcomStartMutation,
    useCardLinkMutation,
    useCancelOrderMutation,
} = baseAPI;
