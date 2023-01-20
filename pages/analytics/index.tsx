import Grid from "@mui/material/Grid";

import Content from "../../components/analytics/content";

const AnalyticsPage = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Content category="programming-language" type="scatter" />
      </Grid>

      <Grid item xs={12} md={6}>
        <Content category="programming-language" type="time-series" />
      </Grid>

      <Grid item xs={12} md={6}>
        <Content category="frontend" type="scatter" />
      </Grid>

      <Grid item xs={12} md={6}>
        <Content category="frontend" type="time-series" />
      </Grid>

      <Grid item xs={12} md={6}>
        <Content category="database" type="scatter" />
      </Grid>

      <Grid item xs={12} md={6}>
        <Content category="database" type="time-series" />
      </Grid>

      <Grid item xs={12} md={6}>
        <Content category="backend" type="scatter" />
      </Grid>

      <Grid item xs={12} md={6}>
        <Content category="backend" type="time-series" />
      </Grid>
    </Grid>
  );
};

export default AnalyticsPage;
