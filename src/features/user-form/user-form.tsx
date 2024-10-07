import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {TextField, Button, Select, MenuItem, FormControl, InputLabel, Box} from '@mui/material';

import {UserType, UserFormProps} from '@/shared/types/user';


const UserForm: React.FC<UserFormProps> = ({ user, onSubmit, onCancel }) => {
    const { control, handleSubmit } = useForm<UserType>({
        defaultValues: user || { name: '', email: '', status: 'active' },
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="name"
                control={control}
                rules={{ required: 'Name is required' }}
                render={({ field, fieldState: { error } }) => (
                    <TextField
                        {...field}
                        label="Name"
                        fullWidth
                        margin="normal"
                        error={!!error}
                        helperText={error?.message}
                    />
                )}
            />
            <Controller
                name="email"
                control={control}
                rules={{
                    required: 'Email is required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                    }
                }}
                render={({ field, fieldState: { error } }) => (
                    <TextField
                        {...field}
                        label="Email"
                        fullWidth
                        margin="normal"
                        error={!!error}
                        helperText={error?.message}
                    />
                )}
            />
            <Controller
                name="status"
                control={control}
                rules={{ required: 'Status is required' }}
                render={({ field }) => (
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Status</InputLabel>
                        <Select {...field}>
                            <MenuItem value="active" sx={{ color: 'black' }}>Active</MenuItem>
                            <MenuItem value="inactive" sx={{ color: 'black' }}>Inactive</MenuItem>
                        </Select>
                    </FormControl>
                )}
            />
            <Box sx={{display: 'flex', justifyContent: 'end', mt:2 }}>
            <Button type="submit" variant="contained" color="primary" style={{ marginRight: 10 }}>
                {user ? 'Update' : 'Add'} User
            </Button>
            <Button onClick={onCancel} variant="contained" color="error">
                Cancel
            </Button>
            </Box>
        </form>
    );
};

export default UserForm;