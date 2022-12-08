import Link from "next/link";
import { Fragment } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import ExpenseTable from "../../components/expense/expense-table";
import TimeSeriesPlot from "../../components/data-visualization/time-series-plot";

const ExpensePage = () => {
  return (
    <Fragment>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        pb={10}
      >
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Link href="/expense/new-expense" passHref>
            <Button
              variant="contained"
              sx={{ width: { xs: "100%", md: "auto" } }}
            >
              add new expense
            </Button>
          </Link>
        </Grid>

        <Grid item xs={12} md={4}>
          <TimeSeriesPlot title="Daily" yAxisLabel="USD" />
        </Grid>

        <Grid item xs={12} md={4}>
          <TimeSeriesPlot title="Monthly" yAxisLabel="USD" />
        </Grid>

        <Grid item xs={12} md={4}>
          <TimeSeriesPlot title="Category" />
        </Grid>

        <Grid item xs={12}>
          <ExpenseTable />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ExpensePage;
