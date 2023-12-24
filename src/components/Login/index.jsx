import { Container, Button, TextField, Grid, Paper, Typography } from '@mui/material';

const LoginForm = () => {
    return (
      <Container component="main" maxWidth="xs" style={{ paddingTop: '100px' }}>
        <Grid container spacing={0} justifyContent="center" alignItems="center">
          <Grid item>
            <Paper style={{ padding: 20, width: 350, margin: "0 auto" }}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography component="h1" variant="h5" style={{ textAlign: 'center' }}>
                    LogIn
                  </Typography>
                </Grid>
                <Grid item>
                  <form>
                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <TextField type="email" placeholder="Email" fullWidth name="email" variant="outlined" required autoFocus />
                      </Grid>
                      <Grid item>
                        <TextField type="password" placeholder="Password" fullWidth name="password" variant="outlined" required />
                      </Grid>
                      <Grid item>
                        <Button variant="contained" color="primary" type="submit" fullWidth>
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
                <Grid item style={{ marginTop: 10 }}>
                  <Button variant="contained" color="secondary" fullWidth>
                    Login with Gmail
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  };
  
  export default LoginForm;
  