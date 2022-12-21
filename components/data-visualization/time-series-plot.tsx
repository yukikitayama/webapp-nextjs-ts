import { useState } from "react";
import { blue } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { getDefaultDate } from "../../utils/datetime";

const color = blue[500];

const defaultStart = dayjs(getDefaultDate(-30));
const defaultEnd = dayjs(getDefaultDate(0));
const defaultData = [
  { index: "2022-11-23", value: 10 },
  { index: "2022-11-24", value: 12 },
  { index: "2022-11-25", value: 11 },
  { index: "2022-11-26", value: 13 },
  { index: "2022-11-27", value: 14 },
];

interface TimeSeriesPlotProps {
  title?: string;
  yAxisLabel?: string;
  data?: {
    index: string;
    value: number;
  }[];
  start?: Date | null;
  setStart?(newValue: Date | null): void;
  end?: Date | null;
  setEnd?(newValue: Date | null): void;
  fetchData?: () => void;
  isLoading?: boolean;
}

const TimeSeriesPlot: React.FC<TimeSeriesPlotProps> = (props) => {
  const handleStartChange = (newValue: Dayjs | null) => {
    const nativeDate = newValue!.toDate();
    props.setStart!(nativeDate);
  };

  const handleEndChange = (newValue: Dayjs | null) => {
    const nativeDate = newValue!.toDate();
    props.setEnd!(nativeDate);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Grid item xs={12}>
        <Typography align="center" variant="h5" gutterBottom>
          {props.title}
        </Typography>
      </Grid>

      {props.isLoading && (
        <Grid item xs={12} textAlign="center">
          <CircularProgress />
        </Grid>
      )}

      <Grid item xs={12}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={props.data ? props.data : defaultData}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              dot={false}
              strokeWidth={2}
            />
            <XAxis dataKey="index" />
            <YAxis
              label={{
                value: `${props.yAxisLabel ? props.yAxisLabel : ""}`,
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </Grid>

      <Grid item xs={12}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <MobileDatePicker
              label="Start"
              inputFormat="MM/DD/YYYY"
              value={props.start}
              onChange={handleStartChange}
              renderInput={(params) => (
                <TextField {...params} variant="standard" size="small" />
              )}
            />
            <MobileDatePicker
              label="End"
              inputFormat="MM/DD/YYYY"
              value={props.end}
              onChange={handleEndChange}
              renderInput={(params) => (
                <TextField {...params} variant="standard" size="small" />
              )}
            />
            <Button variant="outlined" size="small" onClick={props.fetchData}>
              Update
            </Button>
          </Stack>
        </LocalizationProvider>
      </Grid>
    </Grid>
  );
};

export default TimeSeriesPlot;
