import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction icon={<LinkedInIcon color="primary" />} />
        <BottomNavigationAction icon={<GitHubIcon color="primary" />} />
        <BottomNavigationAction icon={<InstagramIcon color="primary" />} />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
