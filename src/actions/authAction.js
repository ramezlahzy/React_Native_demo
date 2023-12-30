import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET, POST, PUT, DELETE } from '../../utils/axios';
import { setUserCookie, removeUserCookie } from '../../utils/cookie';

export const loginReq = createAsyncThunk("auth/login",
    async (postData) => {
        try {
            const response = await POST('login', postData);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
);
export const refreshTokenReq = createAsyncThunk("auth/refresh-token",
    async (postData) => {
        try {
            const response = await POST('refresh-token', postData);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
);

export const signupReq = createAsyncThunk("auth/signup",
    async (postData) => {
        try {
            const response = await POST('signup', postData);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
);

export const validateOtpReq = createAsyncThunk("auth/validate-otp",
    async (postData) => {
        try {
            const response = await POST('validate-otp', postData);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
);
export const resendOtpReq = createAsyncThunk("auth/resend-otp",
    async (postData) => {
        try {
            const response = await POST('resend-otp', postData);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
);

export const forgotPwdReq = createAsyncThunk("auth/forgot-password",
    async (postData) => {
        try {
            const response = await POST('forgot-password', postData);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
);

export const logoutReq = createAsyncThunk("auth/logout",
    async () => {
        try {
            await removeUserCookie();
            return [];
        } catch (error) {
            console.error(error);
        }
    }
);