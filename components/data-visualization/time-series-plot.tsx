import { useState } from "react";
import Box from "@mui/material/Box";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { index: "2022-11-23", value: 10 },
  { index: "2022-11-24", value: 12 },
  { index: "2022-11-25", value: 11 },
  { index: "2022-11-26", value: 13 },
  { index: "2022-11-27", value: 14 },
];

const TimeSeriesPlot = () => {
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
    <Box>
      <LineChart width={300} height={200} data={data}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <XAxis dataKey="index" />
        <YAxis />
        <Tooltip />
      </LineChart>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack direction="row" spacing={1}>
          <MobileDatePicker
            label="Start"
            inputFormat="MM/DD/YYYY"
            value={start}
            onChange={handleStartChange}
            renderInput={(params) => <TextField {...params} variant="standard" />}
          />
          <MobileDatePicker
            label="End"
            inputFormat="MM/DD/YYYY"
            value={end}
            onChange={handleEndChange}
            renderInput={(params) => <TextField {...params} variant="standard" />}
          />
        </Stack>
      </LocalizationProvider>
    </Box>
  );
};

export default TimeSeriesPlot;
