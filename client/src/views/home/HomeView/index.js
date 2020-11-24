import React from "react";
import { makeStyles } from "@material-ui/core";
import Page from "src/components/Page";
import Hero from "./Hero";
import Features from "./Features";
import CTA from "./CTA";
import FAQS from "./FAQS";

const useStyles = makeStyles(() => ({
  root: {},
}));

const HomeView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Promptli | Home">
      <Hero />
      <Features />
      <CTA />
      <FAQS />
    </Page>
  );
};

export default HomeView;
