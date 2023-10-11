'use client';

import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Zoom from '@mui/material/Zoom';
import { TransitionProps } from '@mui/material/transitions';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

import { useForm, Controller } from 'react-hook-form';

import { useAuthContext } from '@/contexts';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Zoom style={{ transitionDelay: '100ms' }} ref={ref} {...props} />;
});

type RegisterDialogProps = {
    closeMenuItem: () => void;
};

export default function RegisterDialog({ closeMenuItem }: RegisterDialogProps) {
    const { signUp } = useAuthContext();

    const formSchema = Yup.object().shape({
        email: Yup.string().required('Email is required').email('Please input valid email address'),
        username: Yup.string().required('username is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password length should be at least 6 characters')
            .max(12, 'Password cannot exceed more than 12 characters'),
        cpassword: Yup.string()
            .required('Confirm Password is required')
            .min(6, 'Password length should be at least 6 characters')
            .max(12, 'Password cannot exceed more than 12 characters')
            .oneOf([Yup.ref('password')], 'Passwords do not match'),
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'all',
        resolver: yupResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
            cpassword: '',
        },
    });
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        closeMenuItem();
    };

    const handleClose = () => {
        setOpen(false);
        closeMenuItem();
    };

    const handleSaveForm = async () => {
        handleSubmit((formValue) => {
            signUp(formValue.email, formValue.password, formValue.username);
        })();
    };

    return (
        <>
            <MenuItem onClick={handleClickOpen}>
                <Typography textAlign="center">Register</Typography>
            </MenuItem>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                onKeyDown={(event) => {
                    if (event.key === 'Tab') {
                        event.stopPropagation(); //fix issues tab when modal in MenuItem MUI
                    }
                }}
            >
                <DialogTitle>{'User Register form'}</DialogTitle>
                <DialogContent>
                    <Controller
                        render={({ field }) => (
                            <FormControl fullWidth size="small" variant="outlined" sx={{ padding: '15px 0' }}>
                                <TextField
                                    size="small"
                                    label="Email*"
                                    error={!!errors.email}
                                    onChange={field.onChange}
                                    name={field.name}
                                    value={field.value}
                                    helperText={errors.email?.message}
                                />
                            </FormControl>
                        )}
                        name="email"
                        control={control}
                    />
                    <Controller
                        render={({ field }) => (
                            <FormControl fullWidth size="small" variant="outlined" sx={{ padding: '15px 0' }}>
                                <TextField
                                    size="small"
                                    label="username*"
                                    error={!!errors.username}
                                    onChange={field.onChange}
                                    name={field.name}
                                    value={field.value}
                                    helperText={errors.username?.message}
                                />
                            </FormControl>
                        )}
                        name="username"
                        control={control}
                    />
                    <Controller
                        render={({ field }) => (
                            <FormControl fullWidth size="small" variant="outlined" sx={{ padding: '15px 0' }}>
                                <TextField
                                    size="small"
                                    label="Password*"
                                    error={!!errors.password}
                                    type={'password'}
                                    onChange={field.onChange}
                                    name={field.name}
                                    value={field.value}
                                    helperText={errors.password?.message}
                                />
                            </FormControl>
                        )}
                        name="password"
                        control={control}
                    />
                    <Controller
                        render={({ field }) => (
                            <FormControl fullWidth size="small" variant="outlined" sx={{ padding: '15px 0' }}>
                                <TextField
                                    size="small"
                                    label="Password*"
                                    error={!!errors.cpassword}
                                    type={'password'}
                                    onChange={field.onChange}
                                    name={field.name}
                                    value={field.value}
                                    helperText={errors.cpassword?.message}
                                />
                            </FormControl>
                        )}
                        name="cpassword"
                        control={control}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} type="button">
                        Cancel
                    </Button>
                    <Button onClick={handleSaveForm}>Register</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
