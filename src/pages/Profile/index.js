import React, { useState, useEffect } from 'react';
import profilPic from '../../images/user.svg';
import './profile.css';
import { makeStyles, Container, Grid, Avatar, CssBaseline, Typography } from '@material-ui/core';
import ProfilepicChangeDialog from '../../components/ProfilepicChangeDialog';
import userService from '../../services/Users/user.service';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    imageInput: {
        display: 'none'
    },
    profilPic: {
        border: '2px solid black',
        width: '10vw',
        height: '10vw',
        marginLeft: '20vw',
        borderRadius: '100%',
    },
    bigAvatar: {
        margin: 10,
        width: 100,
        height: 100,
    },
}));
const Profile = () => {
    const classes = useStyles();

    const [avatar, setAvatar] = useState(profilPic);
    const [profileDetails, setProfileDetails] = useState({});
    const [openProfileEditModal, setOpenProfileEditModal] = useState(false);

    const getProfileData = async () => {
        try {
            const res = await userService.getProfileDetails();
            if(res.data.profilePicture) {
                setAvatar(`${userService.HOST}/${res.data.profilePicture}`);
                setProfileDetails(res.data);

            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProfileData();
    }, []);

    const handleModalToggle = (e) => {
        setOpenProfileEditModal(!openProfileEditModal)
    }

    const handleSaveProfilePic = async (newProfilePic) => {
        if (newProfilePic) {
            try {
                const res = await userService.uploadProfilePic(newProfilePic);
                setAvatar(`${userService.HOST}/${res.data.profilePic}`);
            } catch (error) {
                console.log(error);
            }
        }
    }


    return (
        <Container component="main" maxWidth="xs">

            <CssBaseline />

            <div className={classes.paper}>
                <Grid container spacing={2} justify="center">
                    <Grid item xs={4} sm={4} >
                        <Avatar alt="profilepic" src={avatar}
                            className={classes.bigAvatar}
                            onClick={handleModalToggle}
                        ></Avatar>
                        <Typography variant="h2">
                            {
                                profileDetails.firstName
                            }
                        </Typography>
                    </Grid>
                </Grid>
            </div>

            <ProfilepicChangeDialog
                onClick={handleModalToggle}
                onClose={handleModalToggle}
                onSave={handleSaveProfilePic}
                open={openProfileEditModal}
            />

        </Container>
    );
}

export default Profile;
