import { Fragment } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import ExpenseTable from "../../components/expense/expense-table";

const ExpensePage = () => {
  return (
    <Fragment>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Button variant="contained" sx={{ width: { xs: "100%", md: "auto" } }}>
            add new expense
          </Button>
        </Grid>

        <Grid item xs={12}>
          <ExpenseTable />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ExpensePage;
