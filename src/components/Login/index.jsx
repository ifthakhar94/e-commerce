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
                    Login with Google
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

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAHrJqFVgasjuoxn8hMccHLiFVJz_Qi8X4",
//   authDomain: "e-commerce-website-6f164.firebaseapp.com",
//   projectId: "e-commerce-website-6f164",
//   storageBucket: "e-commerce-website-6f164.appspot.com",
//   messagingSenderId: "269087172679",
//   appId: "1:269087172679:web:73a3e9a7dbe9c48980a962"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
  