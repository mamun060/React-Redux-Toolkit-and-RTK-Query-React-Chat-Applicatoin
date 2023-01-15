import { CreateApi } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";


export const authApi = apiSlice.injectEndpoints({
    tagTypes: [],
    endpoints: (builder) => ({
        // listed api endpoits here
        register: builder.mutation({
            query: (data) => ({
                url: "/register",
                method: 'POST',
                body: data,
            }),
            // ai method tar kaj holo,, api request pelei call kore dibe
           async onQueryStarted( arg, { queryFulfilled, dispatch }){
                try{
                    const result = await queryFulfilled;
                    // localStorage setup ... data pawar jonno amader dot data dite kind of axios
                    localStorage.setItem(
                        "auth", 
                        JSON.stringify({
                            accessToken: result.data.accessToken,
                            user: result.data.user
                        })
                    );

                    // dispatch call for action 
                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user
                        })
                    );

                } catch(err){
                    // do nothing
                    console.log(err);
                }
           }
        }),
        login: builder.mutation({
            query: (data) => ({
                url: "/login",
                method:'POST',
                body: data
            }),
            
            // amader query request korar por onQueryStarted method kaj korbe 
            
            async onQueryStarted( arg, { queryFulfilled, dispatch }){
                try{
                    const result = await queryFulfilled;
                    // localStorage setup ... data pawar jonno amader dot data (result.data) dite hobe kind of axios
                    localStorage.setItem(
                        "auth", 
                        JSON.stringify({
                            accessToken: result.data.accessToken,
                            user: result.data.user
                        })
                    );

                    // dispatch call for action 
                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user
                        })
                    );

                } catch(err){
                    // do nothing
                    console.log(err);
                }
           }

        }),

    })
})


export const { useRegisterMutation, useLoginMutation } = authApi;  