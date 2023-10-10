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

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
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
                        rules={{
                            required: 'Please input email address',
                            pattern: {
                                value: Validation.email,
                                message: 'Please input valid email address',
                            },
                        }}
                    />
                    <Controller
                        render={({ field }) => (
                            <FormControl fullWidth size="small" variant="outlined" sx={{ padding: '15px 0' }}>
                                <TextField
                                    size="small"
                                    id="outlined-error"
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
                        rules={{
                            required: 'Please input password.',
                        }}
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
