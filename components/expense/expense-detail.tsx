import Link from "next/link";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import AdapterDateFns from "@mui/x-date-pickers/AdapterDateFns";
import LocalizationProvider from "@mui/x-date-pickers/LocalizationProvider";
import DesktopDatePicker from "@mui/x-date-pickers/DesktopDatePicker";

import { expenseCategories, expenseTypes } from "../../utils/expense";

const ExpenseDetail = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [category, setCategory] = useState("grocery");
  const [type, setType] = useState("normal");
  const [amount, setAmount] = useState<number | null>();
  const [place, setPlace] = useState("");
  const [memo, setMemo] = useState("");
  const [documentId, setDocumentId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mode, setMode] = useState("add-expense");
  const [isAuth, setIsAuth] = useState(false);

  const dateChangeHandler = (newValue: Date) => {
    setDate(newValue);
  };
  const categoryChangeHandler = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
  const typeChangeHandler = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };
  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(+event.target.value);
  };
  const placeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlace(event.target.value);
  };
  const memoChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMemo(event.target.value);
  };

  const addHandler = () => {};
  const updateHandler = () => {};
  const deleteHandler = () => {};

  const addExpenseButtons = (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" disabled={!isAuth} onClick={addHandler}>
        Submit
      </Button>
      <Link href="/expense" passHref>
        <Button variant="contained" color="warning">
          Cancel
        </Button>
      </Link>
    </Stack>
  );

  const updateExpenseButtons = (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" disabled={!isAuth} onClick={updateHandler}>
        Update
      </Button>
      <Link href="/expense" passHref>
        <Button variant="contained" color="warning">
          Cancel
        </Button>
      </Link>
      <Button
        variant="contained"
        color="error"
        disabled={!isAuth}
        onClick={deleteHandler}
      >
        Delete
      </Button>
    </Stack>
  );

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item sx={{ width: { xs: "100%", md: "70%" } }}>
        <Card>
          <CardHeader title="Add new expense" />
          <CardContent>
            <Stack spacing={1}>
              {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  label="Date *"
                  inputFormat="MM/dd/yyyy"
                  value={date}
                  onChange={dateChangeHandler}
                  renderInput={(params: any) => <TextField {...params} />}
                />
              </LocalizationProvider> */}
              <FormControl fullWidth>
                <InputLabel id="category-label">Category *</InputLabel>
                <Select
                  labelId="category-label"
                  value={category}
                  label="Category *"
                  onChange={categoryChangeHandler}
                >
                  {expenseCategories.map((expenseCategory) => (
                    <MenuItem
                      key={expenseCategory.value}
                      value={expenseCategory.value}
                    >
                      {expenseCategory.label}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>Required</FormHelperText>
              </FormControl>
              <FormControl>
                <InputLabel id="type-label">Type *</InputLabel>
                <Select
                  labelId="type-label"
                  value={type}
                  label="Type *"
                  onChange={typeChangeHandler}
                >
                  {expenseTypes.map((expenseType) => (
                    <MenuItem key={expenseType.value} value={expenseType.value}>
                      {expenseType.label}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>Required</FormHelperText>
              </FormControl>
              <TextField
                label="Amount"
                value={amount}
                onChange={amountChangeHandler}
                variant="outlined"
                required
                type="number"
                inputProps={{ inputMode: "numeric", pattern: "[0-9.]*" }}
                helperText="Required"
              />
              <TextField
                label="Place"
                value={place}
                onChange={placeChangeHandler}
                variant="outlined"
                required
                helperText="Required"
              />
              <TextField
                label="Memo"
                value={memo}
                onChange={memoChangeHandler}
                variant="outlined"
              />
            </Stack>
          </CardContent>
          <CardActions>
            {mode === "add-expense" ? addExpenseButtons : updateExpenseButtons}
          </CardActions>
          {isSubmitting && <LinearProgress color="secondary" />}
        </Card>
      </Grid>
    </Grid>
  );
};

export default ExpenseDetail;
