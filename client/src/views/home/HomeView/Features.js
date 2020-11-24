import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Avatar,
  Button,
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: 128,
    paddingBottom: 128,
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
}));

const Features = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Typography
          component="p"
          variant="overline"
          color="secondary"
          align="center"
        >
          Simple User Interface
        </Typography>
        <Typography variant="h1" align="center" color="textPrimary">
          Powerful features
        </Typography>
        <Box mt={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box display="flex">
                <Avatar className={classes.avatar}>01</Avatar>
                <Box ml={2}>
                  <Typography variant="h4" gutterBottom color="textPrimary">
                    Electronic Contracts
                  </Typography>
                  <Typography variant="body1" color="textPrimary">
                    Stop waiting on signatures. Get your contracts reviewed,
                    revised, and executed without missing a beat.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box display="flex">
                <Avatar className={classes.avatar}>02</Avatar>
                <Box ml={2}>
                  <Typography variant="h4" gutterBottom color="textPrimary">
                    Electronic Invoicing
                  </Typography>
                  <Typography variant="body1" color="textPrimary">
                    No more waiting for payments in the mail, allow your clients
                    to pay you online directly in a few clicks.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box display="flex">
                <Avatar className={classes.avatar}>03</Avatar>
                <Box ml={2}>
                  <Typography variant="h4" gutterBottom color="textPrimary">
                    Project Management Tools
                  </Typography>
                  <Typography variant="body1" color="textPrimary" gutterBottom>
                    A robust set of tools to organize communication, track
                    deliverables, and measure progress. All in one easy to use
                    dashboard
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

Features.propTypes = {
  className: PropTypes.string,
};

export default Features;
