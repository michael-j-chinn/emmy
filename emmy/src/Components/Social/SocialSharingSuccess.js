import React, { Fragment } from "react";
import { Typography, Link } from "@material-ui/core";
import Button from '@material-ui/core/Button';


function SocialSharingSuccess(props) {
    return <Fragment>
        <Typography variant="h4">Your poll has been shared!</Typography>
        <Typography variant="subtitle1">Once your results are ready you will receive a notification</Typography>
        <Link to="/">
            <Button variant="contained" color="primary">
                Home
            </Button>
        </Link>
        </Fragment>;
}

export default SocialSharingSuccess;