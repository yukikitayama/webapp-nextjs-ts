import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation>
        <BottomNavigationAction
          icon={<LinkedInIcon color="primary" />}
          component={Link}
          href="https://www.linkedin.com/in/yukikitayama/"
          target="_blank"
          rel="noopener"
        />
        <BottomNavigationAction
          icon={<GitHubIcon color="primary" />}
          component={Link}
          href="https://github.com/yukikitayama"
          target="_blank"
          rel="noopener"
        />
        <BottomNavigationAction
          icon={<InstagramIcon color="primary" />}
          component={Link}
          href="https://www.instagram.com/mystyle_kitayama/"
          target="_blank"
          rel="noopener"
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
