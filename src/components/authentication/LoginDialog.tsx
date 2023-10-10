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

import { Validation } from '@/constants/regex';

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

export default function LoginDialog() {
    const { signIn } = useAuthContext();

    const formSchema = Yup.object().shape({
        email: Yup.string().required('Email is required').email('Please input valid email address'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password length should be at least 6 characters')
            .max(12, 'Password cannot exceed more than 12 characters'),
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
        },
    });
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSaveForm = async () => {
        handleSubmit((formValue) => {
            signIn(formValue.email, formValue.password);
        })();
    };

    return (
        <div>
            <MenuItem onClick={handleClickOpen}>
                <Typography textAlign="center">Login</Typography>
            </MenuItem>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{'User Login form'}</DialogTitle>
                <DialogContent>
                    <Controller
                        render={({ field }) => (
                            <FormControl fullWidth size="small" variant="outlined" sx={{ padding: '15px 0' }}>
                                <TextField
                                    size="small"
                                    id="outlined-error"
                                    label="Email*"
                                    error={!!errors.email}
                                    type={'text'}
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
                                    id="outlined-error"
                                    label="Confirm password*"
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} type="button">
                        Cancel
                    </Button>
                    <Button onClick={handleSaveForm}>Login</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
