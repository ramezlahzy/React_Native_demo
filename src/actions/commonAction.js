import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET, POST, PUT, DELETE } from '../../utils/axios';

export const getCountries = createAsyncThunk("common/all-countries",
    async () => {
        try {
            const response = await GET('countries');
            if (response?.data !== undefined) {
                return response?.data;
            }
            return [];
        } catch (error) {
            console.error(error);
        }
    }
);

export const getStates = createAsyncThunk("common/all-states",
    async (countryId) => {
        try {
            const response = await GET(`states/${countryId}`);
            if (response?.data !== undefined) {
                return response?.data;
            }
            return [];
        } catch (error) {
            console.error(error);
        }
    }
);

export const getCities = createAsyncThunk("common/all-cities",
    async (cityId) => {
        try {
            const response = await GET(`cities/${cityId}`);
            if (response?.data !== undefined) {
                return response?.data;
            }
            return [];
        } catch (error) {
            console.error(error);
        }
    }
);