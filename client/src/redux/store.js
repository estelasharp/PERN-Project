import { configureStore } from '@reduxjs/toolkit'
import { powderplannerApi } from '../api/powderplannerApi'


const store = configureStore({
    reducer : {
        [powderplannerApi.reducerPath]: powderplannerApi.reducer

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(powderplannerApi.middleware)
});

export default store;