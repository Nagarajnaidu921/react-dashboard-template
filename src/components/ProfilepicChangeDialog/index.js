import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Grid, Card, CardContent, Icon } from '@material-ui/core';
import gray from '@material-ui/core/colors/grey';
import DropZone from '../DropZone';

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    card: {
        border: '2px solid black',
        backgroundColor: gray[900],
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '25vh',
        textAlign: 'center',
        margin: theme.spacing(2),
        border: '2px solid white',
        color: 'white'
    },
    cardContentOnDrag: {
        borderStyle: 'red',
    },
    uploadIcon: {
        fontSize: '3em',
        color: 'white'
    },
    paper: {
        marginTop: theme.spacing(8)
    },
    imageInput: {
        display: 'none'
    },
    bigAvatar: {
        margin: 10,
        width: 100,
        height: 100,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProfilepicChangeDialog(props) {
    const classes = useStyles();

    const [dragging, setDragging] = useState(false);
    const [images, setImages] = useState([]);

    // useEffect(() => {
    //     setImages([]);
    // })
    const onDrop = (files) => {
        console.log(files)
        setImages(files);
    }

    const onDrag = (status) => {
        setDragging(status)
        console.log(dragging)
    }

    const handleSave = () => {
        // props.onSave(images);
        if (images.length >= 0) { 
            props.onSave(images[0]);
        }
        props.onClose();
        setImages([]);
    }

    return (
        <div>
            <Dialog fullScreen open={props.open} onClose={props.onClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={props.onClick} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Upload Profilepic
                        </Typography>
                        <Button color="inherit" onClick={handleSave}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                <div className={clsx(classes.paper, {
                    [classes.cardContentOnDrag]: dragging,
                })}>
                    <DropZone
                        onDrop={onDrop}
                        onDrag={onDrag}
                        accept="image/*"
                    >
                        <Grid container justify="center">
                            <Grid item xs={10}>
                                <Card className={classes.card} >
                                    <CardContent className={classes.cardContent}>
                                        <Icon className={classes.uploadIcon} color="inherit">
                                            cloud_upload
                                        </Icon>
                                        <Typography>
                                            Drag and Drop or click here to upload image
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </DropZone>
                    {
                        <Grid container spacing={2} justify="center" direction="row">
                            {
                                images.map((x, i) => (
                                    <Grid item key={i}>
                                        <Card>
                                            <CardContent>
                                                <img src={x.preview} className={classes.bigAvatar} alt="profile previe" />
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    }
                </div>
            </Dialog>
        </div>
    );
}
