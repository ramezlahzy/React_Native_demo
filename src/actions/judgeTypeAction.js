import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET, POST, PUT, DELETE } from '../../utils/axios';

export const getJudgeTypes = createAsyncThunk("judge-type/all-judge-types",
    async () => {
        try {
            const response = await GET('judgetype');
            if (response?.data !== undefined) {
                return response?.data;
            }
            return [];
        } catch (error) {
            console.error(error);
        }
    }
);