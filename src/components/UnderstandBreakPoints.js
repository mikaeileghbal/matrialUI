import React from "react";
import { Paper, Grid, Chip } from "@mui/material";

import useStyles from "./styles";

// xs >= 0px
// sm >= 600px
// md >= 960px
// lg >= 1280px
// xl >= 1920px

const UnderstandBreakPoints = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
          </Grid>
        </Grid>
      </div>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs="auto" sm="auto" md="auto">
            <Paper className={classes.paper}>xs=auto sm=auto md=auto</Paper>
          </Grid>
          <Grid item xs="auto" sm="auto" md="auto">
            <Paper className={classes.paper}>xs=auto sm=auto md=auto</Paper>
          </Grid>
          <Grid item xs="auto" sm="auto" md="auto">
            <Paper className={classes.paper}>xs=auto sm=auto md=auto</Paper>
          </Grid>
          <Grid item xs="auto" sm="auto" md="auto">
            <Paper className={classes.paper}>xs=auto sm=auto md=auto</Paper>
          </Grid>
        </Grid>
      </div>
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>
              <Grid container justify="center">
                <Grid item>
                  <Chip label="xs-12"></Chip>
                </Grid>
                <Grid item>
                  <Chip label="sm=6"></Chip>
                </Grid>
                <Grid item>
                  <Chip label="md=3"></Chip>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>
              <Grid container justify="center">
                <Grid item>
                  <Chip label="xs-12"></Chip>
                </Grid>
                <Grid item>
                  <Chip label="sm=6"></Chip>
                </Grid>
                <Grid item>
                  <Chip label="md=3"></Chip>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>
              <Grid container justify="center">
                <Grid item>
                  <Chip label="xs-12"></Chip>
                </Grid>
                <Grid item>
                  <Chip label="sm=6"></Chip>
                </Grid>
                <Grid item>
                  <Chip label="md=3"></Chip>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Item item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>
              <Container justify="space-around">
                <Item>
                  <Chip label="xs=12" />
                </Item>
                <Item>
                  <Chip label="sm=6" />
                </Item>
                <Item>
                  <Chip label="md=3" />
                </Item>
              </Container>
            </Paper>
          </Item>
        </Grid>
      </div>
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs={3}</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs={3}</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs={3}</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs={3}</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs={3}</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs={3}</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs={3}</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs={3}</Paper>
          </Grid>
        </Grid>
      </div>

      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs={12}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs={6}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs={6}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs={6}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs={6}</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs={12}</Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default UnderstandBreakPoints;

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;
