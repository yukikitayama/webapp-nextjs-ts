import { useState } from "react";
import Grid from "@mui/material/Grid";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
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

const data = [
  { index: "2022-11-23", value: 10 },
  { index: "2022-11-24", value: 12 },
  { index: "2022-11-25", value: 11 },
  { index: "2022-11-26", value: 13 },
  { index: "2022-11-27", value: 14 },
];

interface TimeSeriesPlotProps {
  title?: string;
  yAxisLabel?: string;
}

const TimeSeriesPlot: React.FC<TimeSeriesPlotProps> = (props) => {
  const [start, setStart] = useState<Dayjs | null>(
    dayjs("2022-12-01T00:00:00")
  );
  const [end, setEnd] = useState<Dayjs | null>(dayjs("2022-12-02T00:00:00"));

  const handleStartChange = (newValue: Dayjs | null) => {
    setStart(newValue);
  };

  const handleEndChange = (newValue: Dayjs | null) => {
    setEnd(newValue);
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

      <Grid item xs={12}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
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
              value={start}
              onChange={handleStartChange}
              renderInput={(params) => (
                <TextField {...params} variant="standard" size="small" />
              )}
            />
            <MobileDatePicker
              label="End"
              inputFormat="MM/DD/YYYY"
              value={end}
              onChange={handleEndChange}
              renderInput={(params) => (
                <TextField {...params} variant="standard" size="small" />
              )}
            />
            <Button variant="outlined" size="small">
              Update
            </Button>
          </Stack>
        </LocalizationProvider>
      </Grid>
    </Grid>
  );
};

export default TimeSeriesPlot;
