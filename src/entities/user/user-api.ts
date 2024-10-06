import {createAsyncThunk} from "@reduxjs/toolkit";

import {axiosInstance} from "@/shared/api";
import { User } from '@/shared/types/user';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (): Promise<User[]> => {
        const response = await axiosInstance.get<User[]>(`users`);
        return response.data.map(user => ({
            ...user,
            status: Math.random() > 0.5 ? 'active' : 'inactive',
        }));
    }
);
