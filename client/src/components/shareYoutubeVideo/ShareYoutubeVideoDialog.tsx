'use client';
import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Zoom from '@mui/material/Zoom';
import { TransitionProps } from '@mui/material/transitions';
import IconButton from '@mui/material/IconButton';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

import { useForm, Controller } from 'react-hook-form';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import { useCommonDataContext, useWebSocket } from '@/contexts';
import { Validation } from '@/constants/regex';
import { shareYoutubeVideo } from '@/services/video';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Zoom style={{ transitionDelay: '100ms' }} ref={ref} {...props} />;
});

export default function ShareYoutubeVideoDialog() {
    const { setIsReloadVideoList } = useCommonDataContext();
    const { socket,room } = useWebSocket();

    const formSchema = Yup.object().shape({
        url: Yup.string()
            .required('Youtube Url is required')
            .matches(Validation.youtubeUrl, 'Please input valid youtube link'),
        thumbnail: Yup.string(),
        title: Yup.string(),
    });
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'all',
        resolver: yupResolver(formSchema),
        defaultValues: {
            url: '',
            thumbnail: '',
            title: '',
        },
    });
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSaveForm = () => {
        handleSubmit(async (formValue) => {
            const match = formValue.url.match(Validation.youtubeUrl) ?? '';
            if (match && match[7]?.length !== 11) {
                toast.error('Youtube ID is not correct! Please check again.');
                return;
            }
            const shareResponse = await shareYoutubeVideo({
                payload: {
                    title: formValue.title,
                    url: match[7] ?? '',
                    cover: formValue.thumbnail,
                },
            });
            if (shareResponse) {
                toast.success('Share video successful.');
                handleClose();
                setIsReloadVideoList(true); //trigger to reload video list
                const videoNotification = shareResponse;
                socket.emit('send_message', { videoNotification, room, sender: socket.id });
            }
        })();
    };
   
    return (
        <>
            <IconButton aria-label="toggle password visibility" edge="end" onClick={handleClickOpen}>
                <VideoCameraFrontOutlinedIcon sx={{ color: '#fff' }} />
            </IconButton>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{'Share a youtube movie'}</DialogTitle>
                <DialogContent>
                    <Controller
                        render={({ field }) => (
                            <FormControl fullWidth size="small" variant="outlined" sx={{ padding: '15px 0' }}>
                                <TextField
                                    size="small"
                                    label="Youtube URL*"
                                    error={!!errors.url}
                                    type={'text'}
                                    onChange={field.onChange}
                                    name={field.name}
                                    value={field.value}
                                    helperText={errors.url?.message}
                                />
                            </FormControl>
                        )}
                        name="url"
                        control={control}
                    />
                    <Controller
                        render={({ field }) => (
                            <FormControl fullWidth size="small" variant="outlined" sx={{ padding: '15px 0' }}>
                                <TextField
                                    size="small"
                                    label="Title"
                                    type={'text'}
                                    onChange={field.onChange}
                                    name={field.name}
                                    value={field.value}
                                    helperText={errors.url?.message}
                                />
                            </FormControl>
                        )}
                        name="title"
                        control={control}
                    />
                    <Controller
                        render={({ field }) => (
                            <FormControl fullWidth size="small" variant="outlined" sx={{ padding: '15px 0' }}>
                                <TextField
                                    size="small"
                                    label="Youtube thumbnail"
                                    type={'text'}
                                    onChange={field.onChange}
                                    name={field.name}
                                    value={field.value}
                                    helperText={errors.url?.message}
                                />
                            </FormControl>
                        )}
                        name="thumbnail"
                        control={control}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} type="button">
                        Cancel
                    </Button>
                    <Button onClick={handleSaveForm}>Share</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
