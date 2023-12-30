import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET, POST, PUT, DELETE } from '../../utils/axios';
import qs from 'qs';

export const getUser = createAsyncThunk("user/show",
    async (id) => {
        try {
            const response = await GET(`user/${id}`);
            if (response !== undefined) {
                return response;
            }
            return [];
        } catch (error) {
            console.error(error);
        }
    }
);

export const updateUser = createAsyncThunk("user/update",
    async (params) => {
        try {
            params.postData['requestFrom'] = 'app';
            const response = await PUT(`user/${params.id}`, params.postData);
            if (response !== undefined) {
                return response;
            }
            return [];
        } catch (error) {
            console.error(error);
        }
    }
);

export const changePassword = createAsyncThunk("user/chage-password",
    async (params) => {
        try {
            params.postData['requestFrom'] = 'app';
            const response = await PUT(`change-password/${params.id}`, params.postData);

            if (response !== undefined) {
                return response;
            }
            return [];
        } catch (error) {
            console.error(error);
        }
    }
);

export const notificationTypes = createAsyncThunk("notification/types",
    async () => {
        try {
            const response = await GET(`notification-types`);
            if (response?.data !== undefined) {
                return response?.data;
            }
            return [];
        } catch (error) {
            console.error(error);
        }
    }
);

export const mapNotificationTypes = createAsyncThunk("notification/types",
    async (postData) => {
        try {
            const response = await POST(`map-notification-types`, postData);
            console.log(response)
            return response;
        } catch (error) {
            console.error(error);
        }
    }
);