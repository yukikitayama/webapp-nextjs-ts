import Grid from "@mui/material/Grid";

import TimeSeriesPlot from "../../components/data-visualization/time-series-plot";

const data = [
  { id: "sleep", title: "Sleep", yAxisLabel: "Minutes" },
  { id: "deep-sleep", title: "Deep sleep", yAxisLabel: "Minutes" },
  { id: "steps", title: "Steps", yAxisLabel: "Steps" },
  { id: "weight", title: "Weight", yAxisLabel: "kg" },
  { id: "calories-burn", title: "Calories burn", yAxisLabel: "Calories" },
  { id: "average-heart-rate", title: "Average heart rate", yAxisLabel: "bpm" },
];

const FitnessPage = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={10}
    >
      {data.map((d) => (
        <Grid item xs={12} md={6} key={d.id}>
          <TimeSeriesPlot title={d.title} yAxisLabel={d.yAxisLabel} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FitnessPage;
