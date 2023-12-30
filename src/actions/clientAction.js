import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET, POST, PUT, DELETE } from '../../utils/axios';

export const getClients = createAsyncThunk("clients/all-clients",
    async () => {
        try {
            const response = await GET('client');
            if (response?.data !== undefined) {
                return response?.data;
            }
            return [];
        } catch (error) {
            console.error(error);
        }
    }
);

export const clientsWithPagination = createAsyncThunk("clients/clients-with-pagination",
    async (postData) => {
        try {
            const response = await POST('clients-with-pagination', postData);
            if (response?.data !== undefined) {
                return response?.data;
            }
            return [];
        } catch (error) {
            console.error(error);
        }
    }
);


export const postClient = createAsyncThunk("clients/post-client",
    async (postData) => {
        try {
            const response = await POST('client', postData);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
);

export const updateClient = createAsyncThunk("clients/update-client",
    async (params) => {
        try {
            const response = await PUT(`client/${params.id}`, params.postData);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
);