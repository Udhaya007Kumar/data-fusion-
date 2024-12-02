import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginuser = createAsyncThunk("login", async (data) => {
    const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
});