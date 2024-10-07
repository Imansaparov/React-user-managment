import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import {UserType, UserState, } from '@/shared/types';
import {fetchUsers} from "@/entities/user/user-api.ts";
import {saveUsersToLocalStorage} from "@/shared/helpers/local-storage";

const storedUsers = localStorage.getItem('users');
const initialState: UserState = {
    users: storedUsers ? JSON.parse(storedUsers) : [],
    loading: false,
    error: null,
    sortBy: null,
    sortOrder: 'asc',
    filter: '',
    statusFilter: "all"
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setSortBy: (state, action: PayloadAction<{ column: keyof UserType; order: 'asc' | 'desc' }>) => {
            state.sortBy = action.payload.column;
            state.sortOrder = action.payload.order;
        },
        setFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        },
        addUser: (state, action: PayloadAction<Omit<UserType, 'id'>>) => {
            const newUser = {
                ...action.payload,
                id: uuidv4(),
            };
            state.users.unshift(newUser);
            saveUsersToLocalStorage(state.users);
        },
        updateUser: (state, action: PayloadAction<UserType>) => {
            const index = state.users.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state.users[index] = action.payload;
                saveUsersToLocalStorage(state.users);
            }
        },
        setUsers: (state, action: PayloadAction<UserType[]>) => {
            state.users = action.payload;
            saveUsersToLocalStorage(state.users);
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
                saveUsersToLocalStorage(state.users);
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { setSortBy, setFilter, addUser, updateUser, setUsers } = usersSlice.actions;

export default usersSlice.reducer;