import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formSubmissionHandler = () => {};

  const emailChangeHandler = () => {};

  const passwordChangeHandler = () => {};

  return (
    <form onSubmit={formSubmissionHandler}>
      <Card>
        <CardHeader title="Login" />
        <CardContent>
          <Stack spacing={1}>
            <TextField
              label="Email"
              variant="outlined"
              required
              helperText="Required"
              onChange={emailChangeHandler}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              required
              helperText="Required"
              onChange={passwordChangeHandler}
            />
          </Stack>
        </CardContent>
        <CardActions sx={{ m: 1 }}>
          <Button
            variant="contained"
            type="submit"
            sx={{ width: { xs: "100%", md: "30%" } }}
          >
            Login
          </Button>
        </CardActions>
        {isLoading && <LinearProgress color="secondary" />}
      </Card>
    </form>
  );
};

export default LoginForm;
