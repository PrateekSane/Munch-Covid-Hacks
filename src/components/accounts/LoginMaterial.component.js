import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
//import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";

export default class LogInMaterial extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      remember: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.rememberMe = this.rememberMe.bind(this);
  }

  useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  rememberMe() {
    this.setState({ remember: !this.state.remember });
  }
  onSubmit(e) {
    e.preventDefault();
    const loginUser = {
      email: this.state.email,
      password: this.state.password,
    };

    //@AROOP. USE AXIOS GET TO GET FROM THE DATABASE ON THE LOGIN INFO. I AM NOT SURE HOW IT WORKS SO IM LEAVING IT VAGUE
    Axios.get("http://localhost:5000/user/:id", loginUser).then((res) =>
      console.log(res)
    );
    this.setState({
      email: "",
      password: "",
    });
  }
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={this.useStyles.paper}>
          <Avatar className={this.useStyles.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={this.useStyles.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={this.handleChange}
              label="Email Address"
              name="email"
              value={this.state.email}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={this.handleChange}
              name="password"
              value={this.state.password}
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              onChange={this.rememberMe}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.useStyles.submit}
              onSubmit={this.onSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/CreateAccount" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
          <br />
        </div>
      </Container>
    );
  }
}
