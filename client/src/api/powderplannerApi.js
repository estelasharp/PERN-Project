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
    tagTypes: ['Comments'],
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
        fetchMapComments: build.query({
            query: (mapId) => `/comments/${[mapId]}`,
            providesTags: ['Comments']
        }),
        createComment: build.mutation({
            query: (data) => ({
                url: '/comments',
                method: 'POST',
                body: {...data},
            }),
            invalidatesTags: ['Comments']
        }),
        updateComment: build.mutation({
            query: (data) => ({
                url: `/comments/${id}`,
                method: 'PUT',
                body: {...data},
            }),
            invalidatesTags: ['Comments']
        }),
        deleteComment: build.mutation({
            query: (data) => ({
                url: `/comments/${id}`,
                method: 'DELETE',
            }),
            invalidateTags: ['Comments'],
        }),

    }),

})

export const { useFetchMapsQuery, useFetchSingleMapQuery, useFetchResortsQuery, useFetchSingleResortQuery, useFetchLocationsQuery, useFetchSingleLocationQuery, useFetchMapCommentsQuery, useCreateCommentMutation, useUpdateCommentMutation, useDeleteCommentMutation } = powderplannerApi