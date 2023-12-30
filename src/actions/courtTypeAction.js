import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET, POST, PUT, DELETE } from '../../utils/axios';

export const getCourtTypes = createAsyncThunk("court-type/all-court-types",
    async () => {
        try {
            const response = await GET('courttype');
            if (response?.data !== undefined) {
                return response?.data;
            }
            return [];
        } catch (error) {
            console.error(error);
        }
    }
);