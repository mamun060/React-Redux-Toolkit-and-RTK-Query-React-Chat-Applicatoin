import { apiSlice } from "../api/apiSlice";

export const coversationApi = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        // listed api here 
        getConversations: builder.query({
            query: (email) => `/conversations?participants_like=${email}&_sort=timestamp&_order=desc&_page=1&_limit=${process.env.REACT_APP_CONVERSATIONS_PER_PAGE}`
        })
    })
});


export const {useGetConversationsQuery} = coversationApi;