import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import Board from "../../components/project/board";

const ProjectPage = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="stretch"
    >
      <Grid item xs={12} sx={{ textAlign: "center" }} pb={2}>
        <Button variant="contained" sx={{ width: { xs: "100%", md: "auto" } }}>
          add new project
        </Button>
      </Grid>

      <Grid item>
        <Board />
      </Grid>
    </Grid>
  );
};

export default ProjectPage;
