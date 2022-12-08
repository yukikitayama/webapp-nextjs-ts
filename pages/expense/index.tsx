import Link from "next/link";
import { Fragment } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import ExpenseTable from "../../components/expense/expense-table";
import ExpensePlot from "../../components/expense/expense-plot";
import { getDefaultDate } from "../../utils/datetime";

const now = new Date();
// First day of the current month
const startDaily = new Date(now.getFullYear(), now.getMonth(), 1);
// Last day of the current month
// const endDaily = new Date(now.getFullYear(), now.getMonth() + 1, 0);
// Current day
const endDaily = getDefaultDate(0);
// 2021-10-01
const startMonthly = new Date(2021, 9, 1);
// Current day
const endMonthly = getDefaultDate(0);
// First day of a month 6 months ago
const startCategory = new Date();
startCategory.setMonth(startCategory.getMonth() - 6);
startCategory.setHours(0, 0, 0, 0);
// Current day
const endCategory = getDefaultDate(0);

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
          <ExpensePlot title="Daily" aggregation="daily" yAxisLabel="USD" />
        </Grid>

        <Grid item xs={12} md={4}>
          <ExpensePlot title="Monthly" aggregation="monthly" yAxisLabel="USD" />
        </Grid>

        <Grid item xs={12} md={4}>
          <ExpensePlot title="Category" aggregation="category" />
        </Grid>

        <Grid item xs={12}>
          <ExpenseTable />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ExpensePage;
