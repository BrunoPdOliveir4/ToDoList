import { Card, CardContent, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import './styles.css';

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <div className="login-container">
      <Card className="login-card">
        <CardContent>
          <form className="login-form">
            <h1 className="login-title">Welcome back!</h1>
            <div className="login-subtitle">
              <p>Glad to see you again</p>
              <p>Login to your account bellow</p>
            </div>
            <TextField
              required
              fullWidth
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password *</InputLabel>
              <OutlinedInput
                required
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={showPassword ? 'hide password' : 'show password'}
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button variant="contained" size="large" fullWidth >
              Login
            </Button>
            <p className="register-link">
              Don't have an account? <a href="/register" className="register-link-span">Register here</a>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginScreen;
