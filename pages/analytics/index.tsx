import Grid from "@mui/material/Grid";

import Content from "../../components/analytics/content";

const AnalyticsPage = () => {
  return (
    <Grid container>
      <Grid xs={12} md={6} item>
        <Content category="programming-language" type="scatter" />
      </Grid>

      <Grid xs={12} md={6} item>
        <Content category="frontend" type="scatter" />
      </Grid>
      
      <Grid xs={12} md={6} item>
        <Content category="database" type="scatter" />
      </Grid>

    </Grid>
  );
};

export default AnalyticsPage;
