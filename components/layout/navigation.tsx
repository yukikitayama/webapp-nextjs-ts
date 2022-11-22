import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["project", "article", "expense", "fitness", "login"];

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
            <Link href="/" passHref>
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
            </Link>

            {/* Menu icon for mobile */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton size="large" color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Drawer side menu for mobile */}

            {/* Avatar for mobile */}
            <Avatar
              src="/images/github_profile_photo_yuki_kitayama.jpg"
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />

            {/* Title for mobile */}
            <Link href="/" passHref>
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Yuki&apos;s App
              </Typography>
            </Link>

            {/* Menus for desktop */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Link key={page} href={`/${page}`} passHref>
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Navigation;
