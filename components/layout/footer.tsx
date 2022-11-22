import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation showLabels>
        <BottomNavigationAction icon={<LinkedInIcon color="primary" />} />
        <BottomNavigationAction icon={<GitHubIcon color="primary" />} />
        <BottomNavigationAction icon={<InstagramIcon color="primary" />} />
      </BottomNavigation>
    </Box>
  )
};

export default Footer;