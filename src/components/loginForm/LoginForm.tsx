import React, {useState} from 'react';
//material ui
import Container from '@material-ui/core/Container';
import CssBaseLine from '@material-ui/core/CssBaseline';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar'


// import CopyRight from '@material-ui/core'
const useStyles = makeStyles((theme) => {
 return {
    paper: {
        marginTop: theme.spacing(8),
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,

    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3,0,2)
    }
 }
})


function CopyRight() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                SaaS platform
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

export const LoginForm = () => {
    const classes = useStyles()
    const [input, setInput] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = () => {
        console.log('submit');
    }
    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInput({...input, [e.target.name]: e.target.value})
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseLine/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form 
                    className={classes.form} 
                    noValidate
                    onSubmit={e => e.preventDefault()}
                >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="email"
                        label="Email"
                        id="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleInput}
                        value={input.email}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        name="password"
                        required
                        fullWidth
                        label="Password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleInput}
                        value={input.password}
                    />
                {/* <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                /> */}
                <Button 
                    type="submit"
                    onClick={handleSubmit}
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                 >
                     Sign in
                 </Button>
                </form>
                 <Grid container>
                     <Grid item xs>
                        <Link href="#" variant="body2">
                        Forgot password?
                        </Link>
                     </Grid>
                     <Grid item>
                        <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                     </Grid>
                 </Grid>
            </div>
            <Box mt={8}>
                <CopyRight/>
            </Box>
        </Container>
    )
}
