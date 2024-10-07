import {createAsyncThunk} from "@reduxjs/toolkit";

import {axiosInstance} from "@/shared/api";
import { UserType } from '@/shared/types/user';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (): Promise<UserType[]> => {
        const response = await axiosInstance.get<UserType[]>(`users`);
        return response.data.map(user => ({
            ...user,
            status: Math.random() > 0.5 ? 'active' : 'inactive',
        }));
    }
);
