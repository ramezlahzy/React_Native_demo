import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET, POST, PUT, DELETE } from '../../utils/axios';

export const getCases = createAsyncThunk("case/all-cases",
    async (postData) => {
        try {
            const response = await POST('all-cases', postData);
            if (response?.data !== undefined) {
                return response?.data;
            }
            return [];
        } catch (error) {
            console.error(error);
        }
    }
);

export const getCase = createAsyncThunk("case/single-cases",
    async (params) => {
        try {
            const response = await GET(`cases/${params.id}`);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
);

export const postCase = createAsyncThunk("case/post-case",
    async (postData) => {
        try {
            console.log("api request", postData);
            const response = await POST('cases', postData);
            console.log("api response", response);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
);
export const editCase= createAsyncThunk("case/update-case-details",
    async (postData) => {
        try {
            const response = await PUT(`cases/${postData.id}`, postData);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
);

export const getCasesForDropdown = createAsyncThunk("cases/all-cases-for-dd",
    async () => {
        try {
            const response = await GET('cases');
            if (response?.data !== undefined) {
                return response?.data;
            }
            return [];
        } catch (error) {
            console.error(error);
        }
    }
);

export const postHearingDate = createAsyncThunk("cases/post-hearing-date",
    async (postData) => {
        try {
            const response = await POST('hearing', postData);
            //console.log(response);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
);