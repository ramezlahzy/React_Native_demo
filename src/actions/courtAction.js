import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET, POST, PUT, DELETE } from '../../utils/axios';

export const getCourts = createAsyncThunk("court/all-court",
    async (params) => {
        try {
            const response = await GET(`filtered-courts/${params.stateId}/${params.cityId}/${params.courtTypeId}`);
            if (response?.data !== undefined) {
                return response?.data;
            }
            return [];
        } catch (error) {
            console.error(error);
        }
    }
);
export const getCourt= createAsyncThunk("court/single-court",
    async (params) => {
        try {
            const response = await GET(`court/${params.id}`);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
);