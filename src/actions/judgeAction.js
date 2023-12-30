import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET, POST, PUT, DELETE } from '../../utils/axios';

export const getJudges = createAsyncThunk("judge/all-judges",
    async (params) => {
        try {
            const response = await GET(`filtered-judges/${params.courtId}/${params.judgeTypeId}`);
            if (response?.data !== undefined) {
                return response?.data;
            }
            return [];
        } catch (error) {
            console.error(error);
        }
    }
);

export const getJudge= createAsyncThunk("judge/single-judge",
    async (params) => {
        try {
            const response = await GET(`judge/${params.id}`);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
);