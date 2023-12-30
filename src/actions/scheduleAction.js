import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET, POST, PUT, DELETE } from '../../utils/axios';

export const getScheduledEvents = createAsyncThunk("calendar/scheduled-events",
    async (selectedDate) => {
        //console.log(selectedDate)
        try {
            const response = await GET(`scheduled-events/${selectedDate}`);
            //console.log(response)
            if (response?.data !== undefined) {
                return response?.data;
            }
            return [];
        } catch (error) {
            console.error(error);
        }
    }
);

export const getScheduledHearings = createAsyncThunk("schedule/get-hearings",
    async (postData) => {
        //console.log(postData)
        try {
            const response = await GET(`scheduled-hearings/?fromDate=${postData.fromDate}&toDate=${postData.toDate}`);
            //console.log('-------', response)
            if (response?.data !== undefined) {
                return response?.data;
            }
            return [];
        } catch (error) {
            console.error(error);
        }
    }
);
export const getScheduledAppointments = createAsyncThunk("calendar/scheduled-appointments",
    async (fromData, toDate) => {
        //console.log(selectedDate)
        try {
            const response = await GET(`scheduled-appointments/?fromDate=${fromData}&toDate=${toDate}`);
            //console.log(response)
            if (response?.data !== undefined) {
                return response?.data;
            }
            return [];
        } catch (error) {
            console.error(error);
        }
    }
);

export const scheduleNewAppointment = createAsyncThunk("calendar/schedule-appointment",
    async (postData) => {
        try {
            const response = await POST(`appointment`, postData);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
);

export const scheduleNewHearing = createAsyncThunk("schedule/post-hearing",
    async (postData) => {
        try {
            const response = await POST(`hearing`, postData);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
);