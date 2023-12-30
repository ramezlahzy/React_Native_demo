import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET, POST, PUT, DELETE } from '../../utils/axios';

export const invoicesWithPagination = createAsyncThunk("invoices/invoices-with-pagination",
    async (postData) => {
        try {
            const response = await POST('invoices-with-pagination', postData);
            if (response?.data !== undefined) {
                return response?.data;
            }
            return [];
        } catch (error) {
            console.error(error);
        }
    }
);


export const postInvoice = createAsyncThunk("invoices/new-invoice-entry",
    async (postData) => {
        try {
            const response = await POST('new-invoice-entry', postData);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
);

export const invoicePaymentHistory = createAsyncThunk("invoices/paymenthistory-by-invoiceId",
    async (params) => {
        try {
            const response = await GET(`paymenthistory-by-invoiceId/${params.id}`);
            if (response?.data !== undefined) {
                return response?.data;
            }
            return [];
        } catch (error) {
            console.error(error);
        }
    }
);

export const postPaymentHistory = createAsyncThunk("invoices/paymenthistory",
    async (postData) => {
        try {
            const response = await POST('paymenthistory', postData);
            return response;
        } catch (error) {
            console.error("Error: ", error);
        }
    }
);

/**
 * Services Action
 */
export const getServices = createAsyncThunk("services/get-services",
    async () => {
        try {
            const response = await GET(`service`);
            if (response?.data !== undefined) {
                return response?.data;
            }
            return [];
        } catch (error) {
            console.error(error);
        }
    }
);

export const addService = createAsyncThunk("services/add-service",
    async (postData) => {
        try {
            const response = await POST(`service`, postData);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
);

/**
 * Tax Action
 */
export const getTaxes = createAsyncThunk("taxes/get-taxes",
    async () => {
        try {
            const response = await GET(`tax`);
            if (response?.data !== undefined) {
                return response?.data;
            }
            return [];
        } catch (error) {
            console.error(error);
        }
    }
);

export const addTax = createAsyncThunk("taxes/add-tax",
    async (postData) => {
        try {
            const response = await POST(`tax`, postData);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
);