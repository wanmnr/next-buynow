// app/store/services/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products',
        }),
        getProduct: builder.query({
            query: (id) => `products/${id}`,
        }),
        updateProduct: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: `products/${id}`,
                method: 'PUT',
                body: patch,
            }),
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductQuery,
    useUpdateProductMutation,
} = api;