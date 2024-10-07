import React from "react";
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
    MenuItem,
    SelectChangeEvent, Box,
} from "@mui/material";

import {
    Add as AddIcon,
    ArrowDownward,
    ArrowUpward,
    Edit as EditIcon,
} from "@mui/icons-material";

import { UserListViewProps } from "@/shared/types/user";
import UserForm from "@/features/user-form/user-form.tsx";

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
} from "../style/styles.ts";
import {ThemeToggle} from "@/features/theme-toggle/theme-toggle.tsx";

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
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleStatusFilterChange = (event: SelectChangeEvent<unknown>) => {
        const value = event.target.value;
        if (value === "all" || value === "active" || value === "inactive") {
            onStatusFilterChange(value);
        }
    };

    if (loading)
        return (
            <Fade in={true}>
                <Typography variant="h6" align="center">
                    Loading...
                </Typography>
            </Fade>
        );
    if (error)
        return (
            <Typography color="error" variant="h6" align="center">
                Error: {error}
            </Typography>
        );

    return (
        <UserListViewWrapper>
            <Box sx={{display: 'flex', justifyContent: 'space-between',}}>
            <HeaderSection>
                <StyledTitle>User Management</StyledTitle>
            </HeaderSection>
            <ThemeToggle />
            </Box>
            <FilterAndAddSection>
                <StyledTextField
                    placeholder="Filter by name and email"
                    variant="outlined"
                    fullWidth
                    value={filter}
                    onChange={(e) => onFilter(e.target.value)}
                />
                <FormControl variant="outlined" style={{ minWidth: 120 }}>
                    <InputLabel>Status</InputLabel>
                    <StyledSelect
                        value={statusFilter}
                        onChange={handleStatusFilterChange}
                        label="Status"
                    >
                        <MenuItem value="all" sx={{ color: "black" }}>
                            All
                        </MenuItem>
                        <MenuItem value="active" sx={{ color: "black" }}>
                            Active
                        </MenuItem>
                        <MenuItem value="inactive" sx={{ color: "black" }}>
                            Inactive
                        </MenuItem>
                    </StyledSelect>
                </FormControl>
                <SortButtons>
                    <IconButton onClick={() => onSort(sortBy || "name")} color="primary">
                        {sortOrder === "asc" ? <ArrowUpward /> : <ArrowDownward />}
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
                                        active={sortBy === "name"}
                                        direction={sortBy === "name" ? sortOrder : "asc"}
                                    >
                                        Name
                                    </TableSortLabel>
                                </StyledTableCell>
                                {!isMobile && <StyledTableCell>Email</StyledTableCell>}
                                <StyledTableCell>
                                    <TableSortLabel
                                        active={sortBy === "status"}
                                        direction={sortBy === "status" ? sortOrder : "asc"}
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
                                            color={user.status === "active" ? "success" : "default"}
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
            <Modal open={isModalOpen} onClose={onCloseModal} closeAfterTransition>
                <Fade in={isModalOpen}>
                    <ModalContent>
                        <Typography variant="h6" component="h2" gutterBottom>
                            {editingUser ? "Edit User" : "Add New User"}
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
