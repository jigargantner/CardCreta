/* eslint-disable linebreak-style */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,Typography
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const About = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <Card 
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Divider/>
      <CardContent>
        <Typography
          gutterBottom
          variant="h2"
        >
              Syx Graphics, the manufacturer for your plastic cards
        </Typography>
        <br/>
        <Typography
          className={classes.locationText}
          color="textSecondary"
          variant="body1"
        >
        Syx Graphics is a spin-off from the Syx Automations Group , was established in 2007 and has been part of SG Technologies since 2017.
        SG Technologies is the umbrella holding company, 100% owned by the Syx family, which is the cradle for new innovative technologies.
        </Typography>
      </CardContent>
    </Card>
  );
};

About.propTypes = {
  className: PropTypes.string
};
  
export default About;