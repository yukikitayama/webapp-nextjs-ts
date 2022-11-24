import Grid from "@mui/material/Grid";

import TimeSeriesPlot from "../../components/data-visualization/time-series-plot";

const data = ["sleep", "deep-sleep", "steps", "weight", "calories-burn"];

const FitnessPage = () => {
  return <Grid container>
    {data.map((d) => (
      <Grid item xs={12} md={6} key={d}>
        <TimeSeriesPlot />
      </Grid>
    ))}
  </Grid>
};

export default FitnessPage;
