import {createAsyncThunk} from "@reduxjs/toolkit";
import {User} from "@/shared/types";
import { fetchUsers as fetchUsersAPI, updateUser as updateUserAPI } from '@/entities/user/user-api.ts';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetchUsersAPI();
            return response;
        } catch (error) {
            return rejectWithValue('Failed to fetch users');
        }
    }
);

export const updateUser = createAsyncThunk(
    'users/updateUser',
    async (user: User, { rejectWithValue }) => {
        try {
            const response = await updateUserAPI(user);
            return response;
        } catch (error) {
            return rejectWithValue('Failed to update user');
        }
    }
);