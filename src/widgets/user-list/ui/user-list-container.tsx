import React, {useEffect, useState, useCallback, useMemo} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {SortOrder, StatusFilterType, User} from '@/shared/types/user';
import {AppDispatch, RootState} from "@/store/store.ts";
import UserListView from "@/widgets/user-list/ui/user-list-view.tsx";
import {fetchUsers} from "@/entities/user/user-api.ts";
import { setFilter, setSortBy, addUser, updateUser } from '@/widgets/user-list/model/user-slice.ts';

const UserListContainer: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {users, loading, error, filter, sortBy, sortOrder} = useSelector((state: RootState)  => state.users);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [statusFilter, setStatusFilter] = useState<StatusFilterType>('all');

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleAddUser = useCallback((user: Omit<User, 'id'>) => {
        dispatch(addUser(user));
        setIsModalOpen(false);
    }, [dispatch]);

    const handleUpdateUser = useCallback((user: User) => {
        dispatch(updateUser(user));
        debugger
        setEditingUser(null);
        setIsModalOpen(false);
    }, [dispatch]);

    const handleFilter = useCallback((value: string) => {
        dispatch(setFilter(value));
    }, [dispatch]);

    const handleSort = useCallback((column: keyof User) => {
        dispatch(setSortBy({
            column,
            order: sortBy === column && sortOrder === 'asc' ? 'desc' : 'asc'
        }));
    }, [dispatch, sortBy, sortOrder]);

    const handleOpenModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
        setEditingUser(null);
    }, []);

    const handleEditUser = useCallback((user: User) => {
        setEditingUser(user);
        setIsModalOpen(true);
    }, []);

    const handleStatusFilterChange = useCallback((value: string) => {
        setStatusFilter(value);
    }, []);

    const filteredAndSortedUsers = useMemo(() => {
        return users
            .filter(user =>
                user.name.toLowerCase().includes(filter.toLowerCase()) ||
                user.email.toLowerCase().includes(filter.toLowerCase())
            )
            .sort((a, b) => {
                if (!sortBy) return 0;
                if (a[sortBy] < b[sortBy]) return sortOrder === 'asc' ? -1 : 1;
                if (a[sortBy] > b[sortBy]) return sortOrder === 'asc' ? 1 : -1;
                return 0;
            });
    }, [users, filter, sortBy, sortOrder]);

    return (
    <UserListView
    users={filteredAndSortedUsers}
    loading={loading}
    error={error}
    filter={filter}
    sortBy={sortBy}
    sortOrder={sortOrder}
    isModalOpen={isModalOpen}
    editingUser={editingUser}
    onAddUser={handleAddUser}
    onUpdateUser={handleUpdateUser}
    onFilter={handleFilter}
    onSort={handleSort}
    onOpenModal={handleOpenModal}
    onCloseModal={handleCloseModal}
    onEditUser={handleEditUser}
    statusFilter={statusFilter}
    onStatusFilterChange={handleStatusFilterChange}
    />
);
};

export default UserListContainer;