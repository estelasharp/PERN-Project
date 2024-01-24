// API create api fetching query's
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const powderplannerApi = createApi({
    reducerPath: 'powderplannerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:8080/api`,
        prepareHeaders(headers) {
            headers.set('Content-type', 'application/json')
            return headers;
        }
    }),
    endpoints: (build) => ({
        fetchMaps: build.query({
            query: () => '/maps',
        }),
        fetchSingleMap: build.query({
            query: (id) => `/maps/${id}`,
        }),
        fetchResorts: build.query({
            query: () => '/resorts',
        }),
        fetchSingleResort: build.query({
            query: (id) => `/resorts/${id}`
        }),
        fetchLocations: build.query({
            query: () => '/locations',
        }),
        fetchSingleLocation: build.query({
            query: (id) => `/locations/${id}`,
        }),
        createComment: build.mutation({
            query: (data) => ({
                url: '/comments',
                method: 'POST',
                body: {...data},
            })
        }),
        updateComment: build.query({
            query: (data) => ({
                url: `/comments/${id}`,
                method: 'PUT',
                body: {...data},
            })
        }),
        deleteComment: build.query({
            query: (data) => ({
                url: `/comments/${id}`,
                method: 'DELETE',
            }),
        }),

    }),

})

export const { useFetchMapsQuery, useFetchSingleMapQuery, useFetchResortsQuery, useFetchSingleResortQuery, useFetchLocationsQuery, useFetchSingleLocationQuery, useCreateCommentQuery, useUpdateCommentQuery, useDeleteCommentQuery } = powderplannerApi