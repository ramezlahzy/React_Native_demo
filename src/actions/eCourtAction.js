import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET, POST, PUT, DELETE } from '../../utils/axios';

export const searchByCNRReq = createAsyncThunk("ecourt/searchby",
    async (postData) => {
        try {
            console.log(postData)
            const response = await POST('search-by-cnr', postData);

            if (response?.casetype_list !== undefined) {
                return response.casetype_list;
            } else {
                return response; //"<p>503 Service Unavailable</p>";
            }
            return [];
        } catch (error) {
            console.error(error);
        }
    }
);