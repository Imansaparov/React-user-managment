import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User, UserState } from '@/shared/types';
import {fetchUsers} from "@/entities/user/user-api.ts";

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
    sortBy: null,
    sortOrder: 'asc',
    filter: '',
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setSortBy: (state, action: PayloadAction<keyof User>) => {
            if (state.sortBy === action.payload) {
                state.sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc';
            } else {
                state.sortBy = action.payload;
                state.sortOrder = 'asc';
            }
        },
        setFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        },
        addUser: (state, action: PayloadAction<Omit<User, 'id'>>) => {
            const newUser = {
                ...action.payload,
                id: Date.now() // Generate a temporary ID
            };
            state.users.unshift(newUser);
        },
        updateUser: (state, action: PayloadAction<User>) => {
            const index = state.users.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state.users[index] = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    },
});

export const { setSortBy, setFilter, addUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;