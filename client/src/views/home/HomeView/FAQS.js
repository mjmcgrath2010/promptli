import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    "& dt": {
      marginTop: theme.spacing(2),
    },
  },
}));

const FAQS = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Typography variant="h1" color="textPrimary">
          FAQ's
        </Typography>
        <Box my={3}>
          <Divider />
        </Box>
        <Grid container spacing={3} component="dl">
          <Grid item xs={12} md={6}>
            <Typography variant="overline" color="secondary">
              Early Access & Pricing
            </Typography>
            <Box mt={6}>
              <dt>
                <Typography variant="h4" color="textPrimary">
                  How much will your pricing be?
                </Typography>
              </dt>
              <dd>
                <Typography variant="body1" color="textSecondary">
                  We haven't determined out pricing yet, but our goal is to be a
                  affordable tool for the everyday freelancer. While we may
                  explore enterprise offerings in the future, this tool is meant
                  to help teams under 5 people effectively manage freelance
                  software projects.
                </Typography>
              </dd>
            </Box>
            <Box mt={6}>
              <dt>
                <Typography variant="h4" color="textPrimary">
                  Is early access free?
                </Typography>
              </dt>
              <dd>
                <Typography variant="body1" color="textSecondary">
                  Yes! We're looking for people to enroll in our early access
                  program to be the first to test out software! By enrolling in
                  the program, we will waive all subscription fees for ONE YEAR!
                </Typography>
              </dd>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="overline" color="secondary">
              Launch
            </Typography>
            <Box mt={6}>
              <dt>
                <Typography variant="h4" color="textPrimary">
                  When will Promptli be available to use?
                </Typography>
              </dt>
              <dd>
                <Typography variant="body1" color="textSecondary">
                  We are aiming to have beta access rolled out to early access
                  members in early 2021 with a target launch date of late spring
                  2021. We will continue to update you as we near in on launch.
                </Typography>
              </dd>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

FAQS.propTypes = {
  className: PropTypes.string,
};

export default FAQS;
