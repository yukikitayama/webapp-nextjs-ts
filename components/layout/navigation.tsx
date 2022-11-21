import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Article", "Expense", "Fitness"];

const Navigation = () => {
  return (
    <AppBar position="sticky">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
          <Toolbar disableGutters>

            {/* Avatar for desktop */}
            <Avatar
              src="/images/github_profile_photo_yuki_kitayama.jpg"
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />

            {/* Title for desktop */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Yuki&apos;s App
            </Typography>

            {/* Menu for desktop */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button key={page} sx={{ color: "white" }}>
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Navigation;
