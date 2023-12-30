import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET, POST, PUT, DELETE } from '../../utils/axios';

export const getCaseTypes = createAsyncThunk("case-type/all-case-types",
    async () => {
        try {
            const response = await GET('casetype');
            if (response?.data !== undefined) {
                return response?.data;
            }
            return [];
        } catch (error) {
            console.error(error);
        }
    }
);