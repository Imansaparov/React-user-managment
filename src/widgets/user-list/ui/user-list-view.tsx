import React from 'react';
import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableSortLabel,
    Paper,
    Chip,
    IconButton,
    TableCell,
    Modal,
    Typography,
    useMediaQuery,
    useTheme,
    Fade,
    FormControl,
    InputLabel,
    MenuItem, SelectChangeEvent,
} from '@mui/material';

import {Add as AddIcon, ArrowDownward, ArrowUpward, Edit as EditIcon} from '@mui/icons-material';

import {User, UserListViewProps, SortOrder, StatusFilterType} from '@/shared/types/user';
import UserForm from '@/features/user-form/user-form.tsx';

import {
    StyledTableContainer,
    StyledTextField,
    UserListViewWrapper,
    ModalContent,
    HeaderSection,
    StyledTableCell,
    ActionCell,
    StyledTitle,
    FilterAndAddSection,
    StyledButton,
    StyledSelect,
    SortButtons,
} from './styles.ts';


const UserListView: React.FC<UserListViewProps> = ({
                                                       users,
                                                       loading,
                                                       error,
                                                       filter,
                                                       sortBy,
                                                       sortOrder,
                                                       isModalOpen,
                                                       editingUser,
                                                       statusFilter,
                                                       onAddUser,
                                                       onUpdateUser,
                                                       onFilter,
                                                       onSort,
                                                       onOpenModal,
                                                       onCloseModal,
                                                       onEditUser,
                                                       onStatusFilterChange,
                                                   }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
;

    if (loading) return <Fade in={true}><Typography variant="h6" align="center">Loading...</Typography></Fade>;
    if (error) return <Typography color="error" variant="h6" align="center">Error: {error}</Typography>;

    return (
        <UserListViewWrapper>
            <HeaderSection>
                <StyledTitle>User Management</StyledTitle>
            </HeaderSection>

            <FilterAndAddSection>
                <StyledTextField
                    label="Filter by name"
                    variant="outlined"
                    fullWidth
                    value={filter}
                    onChange={(e) => onFilter(e.target.value)}
                />
                <FormControl variant="outlined" style={{ minWidth: 120 }}>
                    <InputLabel>Status</InputLabel>
                    <StyledSelect
                        value={statusFilter}
                        onChange={(e: SelectChangeEvent<StatusFilterType>) => onStatusFilterChange(e.target.value as StatusFilterType)}
                        label="Status"
                    >
                        <MenuItem value="all">All</MenuItem>
                        <MenuItem value="active">Active</MenuItem>
                        <MenuItem value="inactive">Inactive</MenuItem>
                    </StyledSelect>
                </FormControl>
                <SortButtons>
                    <IconButton onClick={() => onSort(sortBy || 'name')} color="primary">
                        {sortOrder === 'asc' ? <ArrowUpward /> : <ArrowDownward />}
                    </IconButton>
                </SortButtons>
                <StyledButton
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={onOpenModal}
                >
                    Add User
                </StyledButton>
            </FilterAndAddSection>

            <Paper elevation={3}>
                <StyledTableContainer>
                    <Table size={isMobile ? "small" : "medium"}>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>
                                    <TableSortLabel
                                        active={sortBy === 'name'}
                                        direction={sortBy === 'name' ? sortOrder : 'asc'}
                                        onClick={() => handleSort('name')}
                                    >
                                        Name
                                    </TableSortLabel>
                                </StyledTableCell>
                                {!isMobile && <StyledTableCell>Email</StyledTableCell>}
                                <StyledTableCell>
                                    <TableSortLabel
                                        active={sortBy === 'status'}
                                        direction={sortBy === 'status' ? sortOrder : 'asc'}
                                        onClick={() => handleSort('status')}
                                    >
                                        Status
                                    </TableSortLabel>
                                </StyledTableCell>
                                <StyledTableCell align="right">Actions</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id} hover>
                                    <TableCell>{user.name}</TableCell>
                                    {!isMobile && <TableCell>{user.email}</TableCell>}
                                    <TableCell>
                                        <Chip
                                            label={user.status}
                                            color={user.status === 'active' ? 'success' : 'default'}
                                            size="small"
                                        />
                                    </TableCell>
                                    <ActionCell>
                                        <IconButton
                                            color="primary"
                                            onClick={() => onEditUser(user)}
                                            size="small"
                                        >
                                            <EditIcon />
                                        </IconButton>
                                    </ActionCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </StyledTableContainer>
            </Paper>
            <Modal
                open={isModalOpen}
                onClose={onCloseModal}
                closeAfterTransition
            >
                <Fade in={isModalOpen}>
                    <ModalContent>
                        <Typography variant="h6" component="h2" gutterBottom>
                            {editingUser ? 'Edit User' : 'Add New User'}
                        </Typography>
                        <UserForm
                            user={editingUser}
                            onSubmit={editingUser ? onUpdateUser : onAddUser}
                            onCancel={onCloseModal}
                        />
                    </ModalContent>
                </Fade>
            </Modal>
        </UserListViewWrapper>
    );
};

export default UserListView;